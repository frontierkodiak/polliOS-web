// components/SwarmStatus/SwarmStatusMinimal.tsx
import React, { useState, useEffect, useContext } from 'react';
import { Table, ScrollArea, Loader, Badge } from '@mantine/core';
import { useStyles } from './SwarmStatus.styles';
import { DataItem } from 'interfaces/SwarmStatusInterface';
import EndpointError from 'components/Error/EndpointError/EndpointError';
import SwarmStatusError from 'components/Error/SwarmStatusError/SwarmStatusError';
import formatTimeSinceLast from 'utils/format/formatTimeSinceLast';
import formatRSSI from 'utils/format/formatRSSI';
import {
    ActionIconZzz,
    ActionIconCameraCheck,
    ActionIconCameraQuestion,
    ActionIconCameraExclamation
  } from 'components/Assets/ActionIcons/ActionIcons';

interface SwarmStatusProps {
    data: DataItem[];
    loading: boolean;
    error: boolean;
    style?: React.CSSProperties;
    scroll_height?: string | number; // Add this line
  }

  const SwarmStatusMinimal: React.FC<SwarmStatusProps> = ({ data, loading, error, style, scroll_height }) => {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', ...style }}>
                <Loader />
            </div>
        );
    }

    if (error) return <EndpointError />;

    if (data) { console.log('data:', data);}

    if (!data) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', ...style }}>
                <Loader />
            </div>
        );
    }

    if (data && data.every(item => item.podID === 'none')) {
        return <SwarmStatusError />;
    }
    

    return (
        <div style={style}>
            <ScrollArea h={scroll_height || 600} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table verticalSpacing="sm">
                    <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <tr>
                            <th>Pod</th>
                            <th>Model</th>
                            <th>PodOS</th>
                            <th>Status</th>
                            <th>Last seen</th>
                            <th>RSSI</th>
                            <th>Frames (last 24hrs)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data
                        .filter(item => item.time_since_last_seen <= 1440)
                        .map((item, index) => (
                            <tr key={index}>
                                <td>
                                <a href={`http://${item.pod_address}`} target="_blank" rel="noopener noreferrer">
                                    <b>{item.podID}</b>
                                </a>
                                </td>
                                <td>Pod (1st gen)</td>
                                <td>{"v0.4.2"}</td>
                                <td>
                                {item.connection_status === 'asleep' && 
                                    <Badge size="sm" variant="outline" color="blue" leftSection={<ActionIconZzz color="blue" size="md" variant="subtle" />}>
                                    Asleep
                                    </Badge>
                                }
                                {item.connection_status === 'streaming' && 
                                    <Badge size="sm" variant="outline" color="green" leftSection={<ActionIconCameraCheck color="green" size="md" variant="subtle" />}>
                                    Streaming
                                    </Badge>
                                }
                                {'restarting_pod'.includes(item.connection_status) && 
                                    <Badge size="sm" variant="outline" color="yellow" leftSection={<ActionIconCameraQuestion color="yellow" size="md" variant="subtle" />}>
                                    Restarting
                                    </Badge>
                                }
                                {'stream_interrupted'.includes(item.connection_status) && 
                                    <Badge size="sm" variant="outline" color="orange" leftSection={<ActionIconCameraQuestion color="orange" size="md" variant="subtle" />}>
                                    Reconnecting
                                    </Badge>
                                }
                                {item.connection_status === 'disconnected' && 
                                    <Badge size="sm" variant="outline" color="red" leftSection={<ActionIconCameraExclamation color="red" size="md" variant="subtle" />}>
                                    Charging (AC)
                                    </Badge>
                                }
                                </td>
                                <td>{formatTimeSinceLast(item.time_since_last_seen)}</td>
                                <td>{item.rssi ? formatRSSI(item.rssi) : 'N/A'}</td>
                                <td>{item.total_frames}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ScrollArea>
        </div>
    );
}

export default SwarmStatusMinimal;