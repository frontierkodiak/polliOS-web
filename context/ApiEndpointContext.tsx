// context/ApiEndpointContext.tsx
import React from 'react';

// context/ApiEndpointContext.tsx
interface ApiEndpointContextProps {
  apiEndpoint: string | null;
  setApiEndpoint: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
}

// Default context value
const defaultApiEndpointContextValue: ApiEndpointContextProps = {
  apiEndpoint: null,
  setApiEndpoint: () => {},
  loading: true,
};

const ApiEndpointContext = React.createContext<ApiEndpointContextProps>(defaultApiEndpointContextValue);

export const ApiEndpointProvider = ApiEndpointContext.Provider;
export const ApiEndpointConsumer = ApiEndpointContext.Consumer;

export const useApiEndpoint = (): [string | null, React.Dispatch<React.SetStateAction<string | null>>] => {
  const context = React.useContext(ApiEndpointContext);
  return [context.apiEndpoint, context.setApiEndpoint];
};

export default ApiEndpointContext;