// components/Error/EndpointError/EndpointError.tsx
import React, { useContext } from 'react';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import ApiEndpointContext from 'context/ApiEndpointContext';

const EndpointError: React.FC = () => {
  const contextValue = useContext(ApiEndpointContext);

  if (!contextValue) {
    return (
      <Alert 
        icon={<IconAlertCircle size="1rem" />} 
        title="Context Error" 
        color="red"
      >
        There is an issue setting the API endpoint context. Please check the context provider.
      </Alert>
    );
  }

  const { apiEndpoint } = contextValue;

  return (
    <Alert 
      icon={<IconAlertCircle size="1rem" />} 
      title="API Endpoint Error" 
      color="red"
    >
      There seems to be an issue with the API endpoint: <strong>{apiEndpoint}</strong>. Please verify the endpoint and try again.
    </Alert>
  );
}

export default EndpointError;
