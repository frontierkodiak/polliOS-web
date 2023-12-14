// components/UpdateApiEndpoint/UpdateApiEndpoint.tsx
import React, { useState, useContext } from 'react';
import { Box, TextInput, Button } from '@mantine/core';
import ApiEndpointContext from 'context/ApiEndpointContext';
import { useStyles } from './UpdateApiEndpoint.styles';

interface UpdateApiEndpointProps {
    style?: React.CSSProperties;
}

const UpdateApiEndpoint: React.FC<UpdateApiEndpointProps> = ({ style }) => {
    const { classes } = useStyles();
    const context = useContext(ApiEndpointContext);

    // Check if context is defined before using its properties
    if (!context) {
        throw new Error("UpdateApiEndpoint must be used within an ApiEndpointProvider");
    }

    const { apiEndpoint, setApiEndpoint } = context;
    const [value, setValue] = useState(apiEndpoint || '');

    const handleEndpointChange = () => {
        setApiEndpoint(value);
    };

    return (
        <Box mt={3} className={classes.container} style={style}>
            <TextInput
                label="Swarm"
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)}
                className={classes.textField}
            />
            <Button onClick={handleEndpointChange}>
                Select Swarm
            </Button>
        </Box>
    );
}

export default UpdateApiEndpoint;