// components/Error/SwarmStatusError/SwarmStatusError.tsx
import React from 'react';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

const SwarmStatusError: React.FC = () => {
  return (
    <Alert 
      icon={<IconAlertCircle size="1rem" />} 
      title="No Pods active" 
      color="red"
    >
      Your Swarm isn't active. Make sure your Polli Hub is available.
    </Alert>
  );
}

export default SwarmStatusError;