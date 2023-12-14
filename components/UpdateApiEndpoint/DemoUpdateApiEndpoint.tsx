// components/UpdateApiEndpoint/DemoUpdateApiEndpoint.tsx
import React, { useState } from 'react';
import { Box, TextInput, Button, Popover, Text } from '@mantine/core';
import { IoCaretForwardSharp } from 'react-icons/io5'
import { useStyles } from './UpdateApiEndpoint.styles';

interface UpdateApiEndpointProps {
    style?: React.CSSProperties;
}

const DemoUpdateApiEndpoint: React.FC<UpdateApiEndpointProps> = ({ style }) => {
    const { classes } = useStyles();
    const [value, setValue] = useState("Demo Swarm");
    const [showPopover, setShowPopover] = useState(false);

    const handleEndpointChange = () => {
        setShowPopover(!showPopover);
    };

    return (
        <Box mt={3} className={classes.container} style={style}>
            <TextInput
                label="Swarm"
                labelProps={{ style: { fontWeight: 'bold' } }}
                value={value}
                radius="sm"
                size="sm"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)}
                className={classes.textField}
            />
            <Popover
                opened={showPopover}
                onClose={() => setShowPopover(false)}
                position="bottom"
                width={150}
                radius="sm"
                withArrow
            >
                <Popover.Target>
                    <Button onClick={handleEndpointChange} size="xs" radius="xs" rightIcon={<IoCaretForwardSharp />} variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                        Select
                    </Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <Text fz="xs" fw={400}>Switching Swarms is unavailable in Demo.</Text>
                </Popover.Dropdown>
            </Popover>
        </Box>
    );
}

export default DemoUpdateApiEndpoint;