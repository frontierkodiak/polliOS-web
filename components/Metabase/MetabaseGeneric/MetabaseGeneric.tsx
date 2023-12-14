// MetabaseGeneric.tsx
import { useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';

const METABASE_SITE_URL = "https://api.polli.ai/metabase";

interface MetabaseGenericProps {
    width: string;
    height: number;
    resource: number;
}
  
export default function MetabaseGeneric({ width, height, resource }: MetabaseGenericProps) {
    const theme = useMantineTheme();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const url = `/api/metabase/token?dashboard=${resource}`;
        // console.log('fetch URL:', url);
        fetch(url)
            .then(response => response.json())
            .then(data => setToken(data.token));
    }, [resource, theme.colorScheme]); // Add theme.colorScheme to the dependency array

    if (!token) {
        return null;
    }

    const themeParameter = theme.colorScheme === 'dark' ? 'night' : 'light';
    // const iframeUrl = `${METABASE_SITE_URL}/embed/dashboard/${token}#theme=${themeParameter}&bordered=false&titled=false&refresh=60`;
    const iframeUrl = `${METABASE_SITE_URL}/embed/dashboard/${token}#theme=${themeParameter}&bordered=false&titled=false`;


    return (
        <iframe
            src={iframeUrl}
            // style={{
            //     border: 'none',
            //     overflow: 'hidden'
            // }}
            width={`${parseInt(width) * 1}px`}
            height={height}
            allowTransparency
        />
    );
}