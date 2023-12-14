// components/SwarmMapError/SwarmMapError.tsx
import React from 'react';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

const SwarmMapError: React.FC = () => {
  return (
    <Alert 
      icon={<IconAlertCircle size="1rem" />} 
      title="Swarm Map Error" 
      color="red"
    >
      No Pods have location data, so we can't display a Swarm map.
    </Alert>
  );
}

export default SwarmMapError;
