// components/SwarmStatus/SwarmStatus.tsx
import React, { useState, useEffect, useContext } from 'react';
import { Table, ScrollArea, Loader } from '@mantine/core';
import { useStyles } from './SwarmStatus.styles';
import { DataItem } from 'interfaces/SwarmStatusInterface';
import EndpointError from 'components/Error/EndpointError/EndpointError';
import SwarmStatusError from 'components/Error/SwarmStatusError/SwarmStatusError';
import formatTimeSinceLast from 'utils/format/formatTimeSinceLast';
import formatRSSI from 'utils/format/formatRSSI';

interface SwarmStatusProps {
    data: DataItem[];
    loading: boolean;
    error: boolean;
    style?: React.CSSProperties;
    scroll_height?: string | number; // Add this line
  }

  const SwarmStatus: React.FC<SwarmStatusProps> = ({ data, loading, error, style, scroll_height }) => {
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
                <Table>
                    <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <tr>
                            <th>Pod</th>
                            <th>Status</th>
                            <th>Last seen</th>
                            <th>RSSI</th>
                            <th>Total Frames</th>
                            <th>Last S1 detection</th>
                            <th>Last S2 detection</th>
                            <th>Total Specimens</th>
                            <th>Last specimen time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>
                                <a href={`http://${item.pod_address}`} target="_blank" rel="noopener noreferrer">
                                    {item.podID}
                                </a>
                                </td>
                                <td>{item.connection_status}</td>
                                <td>{formatTimeSinceLast(item.time_since_last_seen)}</td>
                                <td>{item.rssi ? formatRSSI(item.rssi) : 'N/A'}</td>
                                <td>{item.total_frames}</td>
                                <td>{item.last_S1_class}</td>
                                <td>{item.last_S2_class}</td>
                                <td>{item.total_specimens}</td>
                                <td>{formatTimeSinceLast(item.time_since_last_specimen)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ScrollArea>
        </div>
    );
}

export default SwarmStatus;