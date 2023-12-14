// pages/_app.tsx
import { useState, useEffect } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
// import { Analytics } from '@vercel/analytics/react';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import 'public/leaflet/leaflet.css';
import { Notifications } from '@mantine/notifications';
import ApiEndpointContext, { ApiEndpointProvider } from 'context/ApiEndpointContext';  // Import the context and provider
import { ModalsProvider } from '@mantine/modals';
import { AppShellComponent } from 'components/AppShell/AppShell';
import { theme } from 'theme/theme';



export default function App(props: AppProps & { colorScheme: ColorScheme, initialApiEndpoint: string }) {
  const { Component, pageProps, initialApiEndpoint } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const [apiEndpoint, setApiEndpoint] = useState<string | null>(null);  // Initialize to null
  const [loading, setLoading] = useState(true);  // Add a loading state

  useEffect(() => {
    setApiEndpoint(initialApiEndpoint);
    setLoading(false);  // Set loading to false after apiEndpoint is set
  }, [initialApiEndpoint]);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>PolliOS</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider 
          theme={{ 
            colorScheme, 
            breakpoints: {
              xxs: '20em',
              xs: '36em',
              sm: '48em',
              md: '62em',
              lg: '75em',
              xl: '88em',
              xxxs: '10em'
            }
          }} 
          withGlobalStyles 
          withNormalizeCSS
        >
          <ModalsProvider>
            <ApiEndpointProvider value={{ apiEndpoint, setApiEndpoint, loading }}>
              <AppShellComponent>
                {loading ? <div>Loading...</div> : <Component {...pageProps} />}
              </AppShellComponent>
              <Notifications />
            </ApiEndpointProvider>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  const initialApiEndpoint = "https://api.polli.ai";  // Fetch your API endpoint here
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
    initialApiEndpoint,
  };
};
