// components/SwarmGrid/SwarmGrid.tsx
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Container, Grid, Skeleton, rem, Loader, useMantineTheme } from '@mantine/core';
import ApiEndpointContext from 'context/ApiEndpointContext';
import { fetchData } from 'utils/api';
import SwarmStatusMinimal from 'components/SwarmStatus/SwarmStatusMinimal';
import DemoUpdateApiEndpoint from 'components/UpdateApiEndpoint/DemoUpdateApiEndpoint';
import { DataItem } from 'interfaces/SwarmStatusInterface';
import dynamic from 'next/dynamic';
import EndpointError from 'components/Error/EndpointError/EndpointError'; // Import EndpointError
import ClientMetabaseGeneric from 'components/Metabase/MetabaseGeneric/ClientMetabaseGeneric';

const PRIMARY_COL_HEIGHT = rem(500);
const SWARM_MAP_HEIGHT = `calc(4 * ${PRIMARY_COL_HEIGHT} / 5)`;
const UPDATE_API_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 5)`;

// Using dynamic import to make SwarmMap load on the client side only
const DynamicSwarmMap = dynamic(() => import('components/SwarmMap/SwarmMap'), {
    loading: () => <Skeleton height={SWARM_MAP_HEIGHT} radius="md" animate={false} />,
    ssr: false
});

const SwarmGrid: React.FC = () => {
    const theme = useMantineTheme();
    const xlWidth = theme.breakpoints.xl;
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [maxWidth, setMaxWidth] = useState(0);

    const { apiEndpoint, loading: apiLoading } = useContext(ApiEndpointContext); // Destructure apiLoading from context

    if (apiLoading) {
      return <div>Loading...</div>; // Display a loading component
    }

    if (apiEndpoint === null) {
      return <EndpointError />; // Use EndpointError when apiEndpoint is the default value
    }

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setMaxWidth(containerRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // call the function initially to set the width

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log('SwarmGrid fetching data from:', apiEndpoint);
        fetchData(apiEndpoint + '/api/swarm-status')
            .then(fetchedData => {
                setData(fetchedData);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setError(true);
                setLoading(false);
            });
    }, [apiEndpoint]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Loader />
            </div>
        );
    }

    return (
        <Container size="lg" my="xl" ref={containerRef}>
            <Grid>
                <Grid.Col span={ 7 }>
                    <SwarmStatusMinimal data={data} loading={loading} error={error} style={{ height: PRIMARY_COL_HEIGHT }} scroll_height={PRIMARY_COL_HEIGHT} />
                </Grid.Col>
                <Grid.Col span={ 5 }>
                    <DynamicSwarmMap data={data} loading={loading} style={{ height: SWARM_MAP_HEIGHT, width: '100%' }} />
                    <DemoUpdateApiEndpoint style={{ height: UPDATE_API_HEIGHT }} />
                </Grid.Col>
                <Grid.Col span={12}>
                    <ClientMetabaseGeneric y_proportion={1.3} resource={4} width={`${maxWidth}px`} scrollbar="scroll" />
                </Grid.Col>
            </Grid>
        </Container>
    );
}   

export default SwarmGrid;