// components/Metabase/MetabaseGeneric/ClientMetabaseGeneric.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Container, Center, ScrollArea } from '@mantine/core';
import MetabaseGeneric from './MetabaseGeneric';

interface ClientMetabaseGenericProps {
    y_proportion: number;
    resource: number;
    width: string;
    scrollbar?: 'hover' | 'scroll' | 'auto' | 'never';
}

const ClientMetabaseGeneric: React.FC<ClientMetabaseGenericProps> = ({ y_proportion, resource, width, scrollbar = 'never' }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [maxWidth, setMaxWidth] = useState(parseInt(width));
    const [height, setHeight] = useState(0);

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
        <Container fluid h={height} ref={containerRef} py="xl">
            <Center>
                <MetabaseGeneric width={`${maxWidth}px`} height={height} resource={resource} />
            </Center>
        </Container>
    );
}

export default ClientMetabaseGeneric;