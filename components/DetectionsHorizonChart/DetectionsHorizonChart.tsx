import React, { useState, useEffect, useContext, useRef } from 'react';
import { MultiSelect, rem, Slider, Button, Text, Loader, Grid, Container, useMantineTheme } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { fetchData } from 'utils/api';
import ApiEndpointContext from 'context/ApiEndpointContext';
import { PodIDsInterface, RunsInterface, SwarmsInterface, DatesInterface, LocationsInterface} from 'interfaces/MinorInterfaces';
import { TimelineDataInterface } from 'interfaces/TimelineDataInterface';
import * as d3 from "d3";
import { IconCalendar } from '@tabler/icons-react';
import EndpointError from 'components/Error/EndpointError/EndpointError';
import styles from './DetectionsHorizonChart.module.css';

function DetectionsHorizonChart() {
    const theme = useMantineTheme();
    const contextValue = useContext(ApiEndpointContext);

    if (!contextValue) {
        return <EndpointError />;
    }

    const { apiEndpoint } = contextValue;

    const [podIDs, setPodIDs] = useState<string[]>([]);
    // const [locations, setLocations] = useState<string[]>([]);
    const [runs, setRuns] = useState<string[]>([]);
    const [dates, setDates] = useState<string[]>([]);
    const [selectedPods, setSelectedPods] = useState<string[]>([]);
    // const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const [selectedRuns, setSelectedRuns] = useState<string[]>([]);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [S1Threshold, setS1Threshold] = useState(0.5);
    const [S2Threshold, setS2Threshold] = useState(0.7);
    const [timelineData, setTimelineData] = useState<TimelineDataInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const horizonChartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchData(apiEndpoint + '/api/podIDs')
        .then((data: PodIDsInterface) => {
            console.log('Full podIDs data:', data); // Log the podIDs data
            setPodIDs(data);
        })
        .catch((error) => {
            console.error('Error fetching podIDs:', error);
        });
        fetchData(apiEndpoint + '/api/runs').then((data: RunsInterface) => {
            // console.log('Full runs data:', data); // Log the runs data
            setRuns(data);
        });
        fetchData(apiEndpoint + '/api/dates').then((data: DatesInterface) => {
            // console.log('Full dates data:', data); // Log the entire dates response
            setDates(data);
        });
        // console.log('Fetching data from:', apiEndpoint + '/api/timeline-data');
        
    }, [apiEndpoint]);

    // console.log('Dates:', dates);
    const minPickerDate = dates && dates.length ? new Date(dates[0] + 'T00:00') : undefined;
    // console.log('Min picker date:', minPickerDate);
    const maxPickerDate = dates && dates.length ? new Date(dates[dates.length - 1] + 'T00:00') : undefined;
    // console.log('Max picker date:', maxPickerDate);

    const calendarIcon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

    // const excludeDate = (date: Date) => {
    //     const minPickerDate = dates && dates.length ? new Date(dates[0]) : undefined;
    //     console.log('Min picker date:', minPickerDate);
    //     const maxPickerDate = dates && dates.length ? new Date(dates[dates.length - 1]) : undefined;
    //     console.log('Max picker date:', maxPickerDate);
    
    //     if (!minPickerDate || !maxPickerDate) {
    //         return true; // Exclude date if minDate or maxDate is not defined
    //     }
    
    //     return date < minPickerDate || date > maxPickerDate;
    // };

    const handleFetchData = () => {
        const endpoint = `${apiEndpoint}/api/timeline-data?` +
                         (startDate ? `start_date=${startDate.toISOString().split('T')[0]}&` : '') +
                         (endDate ? `end_date=${endDate.toISOString().split('T')[0]}&` : '') +
                         (selectedPods.length ? `podID=${selectedPods.join(',')}&` : '') +
                        //  (selectedLocations.length ? `location=${selectedLocations.join(',')}&` : '') +
                         (selectedRuns.length ? `run=${selectedRuns.join(',')}&` : '') +
                         `S1_score_thresh=${S1Threshold}&` +
                         `S2_score_thresh=${S2Threshold}&`;

        if (horizonChartRef.current) {
            horizonChartRef.current.innerHTML = '';
        }
        
        setLoading(true);
        // console.log('Constructed API Endpoint:', endpoint);
        fetchData(endpoint).then((data: TimelineDataInterface[]) => {
            console.log('Fetched data:', data);
            const localData = data.map(item => {
                const date = new Date(item.timestamp);
                const localTimestamp = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
                return { ...item, timestamp: localTimestamp };
            });
            setTimelineData(localData);
            setLoading(false);
            renderHorizonChart(localData);
        });
    };

    useEffect(() => {
        handleFetchData();
    }, []);

    // Define bands and colors
    const bands = 4;
    const name = 'Greens'; // Change this to the color scheme you want
    let colors = d3[`scheme${name}`][bands];
    if (!colors) {
        console.error(`Invalid color scheme: ${name}`);
        colors = []; // Set colors to an empty array instead of returning
    }
    const n = colors.length;
    const dark = d3.lab(colors[0]).l < 20;
    if (dark) {
        colors = colors.map(c => d3.lab(c).darker().toString());
    }

    // Increase the size for more vertical space
    const size = 36; // Increase this value to spread out the bands more

    // Increase the font size for species labels
    const fontSize = 12; // Increase this value to make the text bigger

    // Change the color of the x-axis ticks and labels
    const tickColor = 'black'; // Change this to the color you want
    
    const renderHorizonChart = (data: TimelineDataInterface[]) => {
        // console.log("Data received for rendering:", data);
        
        const dataArray = [...data];
        // console.log("Converted data to array:", dataArray);
        
        dataArray.forEach(d => {
            d.date = new Date(d.timestamp);
        });
        // console.log("Converted timestamps to Date objects.");
    
        const roundedHour = (d: TimelineDataInterface): Date => {
            if (!d.date) {
                throw new Error('Date is undefined');
            }
            const date = new Date(d.date);
            date.setHours(date.getUTCHours() - 5); // Convert from UTC to EST
            date.setMinutes(0, 0, 0);
            return date;
        };
    
        const nestedData = d3.group(dataArray, d => d.S2_taxonID_str, d => roundedHour(d));
        // console.log("Grouped data by taxonID and rounded hour:", nestedData);
        
        const frequencies: Map<string, Map<Date, number>> = new Map();
        nestedData.forEach((hourMap: Map<Date, TimelineDataInterface[]>, species: string) => {
            const speciesFrequencies: Map<Date, number> = new Map();
            hourMap.forEach((occurrences: TimelineDataInterface[], hour: Date) => {
                speciesFrequencies.set(hour, occurrences.length);
            });
            frequencies.set(species, speciesFrequencies);
        });
        // console.log("Mapped frequencies:", frequencies);
    
        const MIN_OCCURRENCES = 0;
    
        const totalFrequencies: Map<string, number> = new Map();
        frequencies.forEach((hourFrequencies, species) => {
            let total = 0;
            for (let freq of hourFrequencies.values()) {
                total += freq;
            }
            totalFrequencies.set(species, total);
        });
        // console.log("Computed total frequencies:", totalFrequencies);
    
        const filteredFrequencies = new Map([...frequencies.entries()].filter(([key, _]) => (totalFrequencies.get(key) || 0) >= MIN_OCCURRENCES));
        // console.log("Using minimum occurrences threshold of", MIN_OCCURRENCES);
        // console.log("Filtered frequencies:", filteredFrequencies);
    
        const flattenedData: { S2_taxonID_str: string; date: Date; frequency: number }[] = [];
        filteredFrequencies.forEach((value, key) => {
            value.forEach((count, date) => {
                flattenedData.push({ S2_taxonID_str: key, date: date, frequency: count });
            });
        });
        // console.log("Flattened data:", flattenedData);
    
        const series = d3.rollup(flattenedData, 
            (values) => d3.sort(values, d => d.date), 
            d => d.S2_taxonID_str
        );
        // console.log("Computed series data:", series);
    
        // Chart dimensions and scales
        const marginTop = 30;
        const marginRight = 10;
        const marginBottom = 0;
        const marginLeft = 10;
        const width = 928;
        const size = 25;
        const height = series.size * size + marginTop + marginBottom;
        const padding = 2;
    
        const dateExtent = d3.extent(flattenedData, d => d.date);
        if (!dateExtent[0] || !dateExtent[1]) {
            console.error('Invalid date extent:', dateExtent);
            return null;
        }
        const x = d3.scaleUtc()
            .domain(dateExtent as [Date, Date])
            .range([0, width]);
    
            const y = d3.scaleLinear()
            .domain([0, d3.max(flattenedData, d => d.frequency) || 0])
            .range([size, size - bands * (size - padding)]);
    
        // Area definition
        const area = d3.area<{ date: Date; frequency: number }>()
        .defined((d) => {
            if (isNaN(d.frequency)) {
                console.log("Invalid frequency in area generator:", d);
                return false;
            }
            return true;
        })
        .x((d) => {
            const val = x(d.date);
            if (isNaN(val)) {
            console.log("Invalid x value:", d, val);
            }
            return val;
        })
        .y0(size)
        .y1((d) => {
            const val = y(d.frequency);
            if (isNaN(val)) {
            console.log("Invalid y1 value:", d, val);
            }
            return val;
        });

        
        // SVG creation
        const uid = `O-${Math.random().toString(16).slice(2)}`;
        const svg = d3.create("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

        // console.log("SVG element created.");
    
        const g = svg.append("g")
            .selectAll("g")
            .data(series)
            .join("g")
            .attr("transform", (d, i) => `translate(0,${i * size + marginTop})`);
    
        // Add clipping and path definition
        const defs = g.append("defs");
        defs.append("clipPath")
            .attr("id", (_, i) => `${uid}-clip-${i}`)
            .append("rect")
            .attr("y", padding)
            .attr("width", width)
            .attr("height", size - padding);
    
        defs.append("path")
            .attr("id", (_, i) => `${uid}-path-${i}`)
            .attr("d", ([, values]) => area(values));
    
        // Create groups for bands
        g.append("g")
            .attr("clip-path", (_, i) => `url(#${uid}-clip-${i})`)
            .selectAll("use")
            .data((_ ,i) => new Array(bands).fill(i))
            .enter().append("use")
            .attr("xlink:href", (i) => `#${uid}-path-${i}`)
            .attr("fill", (_, i) => colors[i])
            .attr("transform", (_, i) => `translate(0,${i * size})`);
    
        // Add species labels with increased font size
        g.append("text")
            .attr("x", 3)
            .attr("y", (size + padding) / 2)
            .attr("dy", "0.45em")
            .attr("font-size", `${fontSize}px`) // Add this line
            .text(([name]) => name);

        // Add horizontal axis with black ticks and labels
        svg.append("g")
            .attr("transform", `translate(0,${marginTop})`)
            .call(d3.axisTop(x).ticks(width / 80).tickSizeOuter(0))
            .call(g => g.selectAll(".tick").filter(d => x(d as Date) < marginLeft || x(d as Date) >= width - marginRight).remove())
            .call(g => g.select(".domain").remove())
            .attr('color', tickColor); // Add this line

        // console.log("All appends to SVG element completed.");
        
        // Append the SVG to the referenced div
        if (horizonChartRef.current && svg.node()) {
            horizonChartRef.current.appendChild(svg.node() as Node);
        }

        // Return the SVG node, or null if it doesn't exist
        return svg.node() || null;
    };

    // console.log("DatePicker: minPickerDate:", minPickerDate);
    // console.log("DatePicker: maxPickerDate:", maxPickerDate);

    return (
        <Container size="md">
            <Grid gutter="md">
                {/* Date Picker */}
                <Grid.Col span={4}>
                    <DatePickerInput
                        className={styles.datePicker}
                        clearable
                        type="range"
                        label="Select Date Range"
                        value={dateRange}
                        onChange={(range) => {
                            let localStartDate = range[0] ? new Date(range[0].toLocaleDateString()) : null;
                            let localEndDate = range[1] ? new Date(range[1].toLocaleDateString()) : null;
                            if (localEndDate) {
                                localEndDate.setDate(localEndDate.getDate() + 1);
                            }
                            setStartDate(localStartDate);
                            setEndDate(localEndDate);
                            setDateRange([localStartDate, localEndDate]);
                        }}
                        minDate={minPickerDate}
                        maxDate={maxPickerDate}
                        weekendDays={[]}
                        allowSingleDateInRange={true}
                    />
                </Grid.Col>
    
                {/* Dropdown for Pod Selection */}
                <Grid.Col span={4}>
                    <MultiSelect
                        className={styles.multiSelect}
                        data={podIDs}
                        label="Pod Selection"
                        placeholder="Select Pods"
                        searchable
                        nothingFound="No Pods Found"
                        onChange={(selected) => setSelectedPods(selected)}
                    />
                </Grid.Col>
    
                {/* Dropdown for Run Selection */}
                <Grid.Col span={4}>
                    <MultiSelect
                        className={styles.multiSelect}
                        data={runs}
                        label="Run Selection"
                        placeholder="Select Runs"
                        searchable
                        nothingFound="No Runs Found"
                        onChange={(selected) => setSelectedRuns(selected)}
                    />
                </Grid.Col>
    
                {/* Sliders for Confidence Thresholds and Submit Button */}
                <Grid.Col span={5}>
                    <div className={styles.slider}>
                        <Text>S1 Confidence Threshold</Text>
                        <Slider
                            value={S1Threshold}
                            onChange={(value) => setS1Threshold(value)}
                            step={0.1}
                            min={0}
                            max={1}
                        />
                    </div>
                </Grid.Col>
    
                <Grid.Col span={5}>
                    <div className={styles.slider}>
                        <Text>S2 Confidence Threshold</Text>
                        <Slider
                            value={S2Threshold}
                            onChange={(value) => setS2Threshold(value)}
                            step={0.1}
                            min={0}
                            max={1}
                        />
                    </div>
                </Grid.Col>
    
                <Grid.Col span={2}>
                    <Button className={styles.button} onClick={handleFetchData}>Submit</Button>
                </Grid.Col>
            </Grid>
    
            {/* Container for Horizon Chart */}
            <Container fluid bg={theme.colorScheme === 'dark' ? theme.colors.orange[3] : theme.colors.orange[2]}>
                <div ref={horizonChartRef} className={loading ? styles.loading : ''} style={{ margin: '20px auto', maxWidth: '95%', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Loader className={styles.Loader} />
                    <div className={styles['chart-content']}>
                        Horizon Chart will be rendered here.
                    </div>
                </div>
            </Container>
        </Container>
    );
}
    export default DetectionsHorizonChart;
    