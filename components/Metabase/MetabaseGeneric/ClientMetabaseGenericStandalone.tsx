// components/Metabase/MetabaseGeneric/ClientMetabaseGenericStandalone.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Container, Center, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import MetabaseGeneric from './MetabaseGeneric';

interface ClientMetabaseGenericStandaloneProps {
    y_proportion: number;
    resource: number;
    scrollbar?: 'hover' | 'scroll' | 'auto' | 'never';
}

const ClientMetabaseGenericStandalone: React.FC<ClientMetabaseGenericStandaloneProps> = ({ y_proportion, resource, scrollbar = 'never' }) => {
    const theme = useMantineTheme();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [maxWidth, setMaxWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const isSmOrSmaller = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const isXsOrSmaller = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
    const isXxsOrSmaller = useMediaQuery(`(max-width: ${theme.breakpoints.xxs})`);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const newWidth = containerRef.current.offsetWidth;
                setMaxWidth(newWidth);
                setHeight(newWidth * y_proportion); // calculate height based on width and proportion
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // call the function initially to set the width and height

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [y_proportion]);

    return (
        <Container fluid h={height} ref={containerRef} py="xl" px={isXxsOrSmaller ? 0 : isXsOrSmaller ? 'sm' : isSmOrSmaller ? 'md' : 'lg'}>
            <Center>
                <MetabaseGeneric width={`${maxWidth}px`} height={height} resource={resource} />
            </Center>
        </Container>
    );
}

export default ClientMetabaseGenericStandalone;