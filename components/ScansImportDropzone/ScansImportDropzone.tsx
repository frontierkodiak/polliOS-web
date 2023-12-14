// components/ScansImportDropzone/ScansImportDropzone.tsx
import React, { useState, useCallback } from 'react';
import { Container, Paper, Grid, Text, rem, MultiSelect, TextInput, Group, useMantineTheme, Modal, Alert, Stack } from '@mantine/core';
import { FileRejection, useDropzone, DropEvent } from 'react-dropzone';
import { IconUpload, IconPhoto, IconX, IconAlertCircle } from '@tabler/icons-react';
import { useModals } from '@mantine/modals';
import { DemoDisabledModal } from 'components/Demo/DemoDisabledModal';


const ScansImportDropzone: React.FC = () => {
    const theme = useMantineTheme();
    const { openModal, closeModal } = useModals();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onDrop = useCallback((acceptedFiles: Array<File>) => {
        console.log('accepted files', acceptedFiles);
    }, []);
    
    const onDropRejected = (fileRejections: Array<FileRejection>, event: DropEvent) => {
        console.log('rejected files', fileRejections);
        setIsModalOpen(true);
      };
    
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        onDropRejected,
        maxSize: 1,
        accept: { 'image': ['*'] }, // accept all image types
    });

    const handleCloseModal = () => {
        setIsModalOpen(false);
        closeModal('reject-modal');
    };

    return (
        <Container>
        <Grid gutter="md" align="center">
            <Grid.Col span={8}>
                <Paper p="md">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                            {isDragReject && <IconX size="3.2rem" stroke={1.5} color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]} />}
                            {!isDragActive && <IconPhoto size="3.2rem" stroke={1.5} />}

                            <div>
                                <Text size="xl" inline>
                                    Drag images here or click to select files
                                </Text>
                                <Text size="sm" color="dimmed" inline mt={15}>
                                    Attach as many files as you like. 
                                </Text>
                                <Text size="sm" color="dimmed" inline mt={15}>
                                    If your images don't have GPS metadata, you can include a GPX/CSV track file. We'll infer locations based on timestamps.
                                </Text>
                            </div>
                        </Group>
                    </div>
                </Paper>
            </Grid.Col>
                <Grid.Col span={4}>
                    <Stack spacing="sm">
                        <MultiSelect
                            data={['Generic', 'Pollination', 'Bird survey', 'Plant survey']}
                            label="Target"
                            placeholder="What should Polli Brain look for?"
                        />
                        <TextInput
                            label="Scan name"
                            placeholder="Select a unique name for this Polli Scan"
                            required
                        />
                        <TextInput
                            label="Project"
                            placeholder="Attach this scan to a larger project"
                        />
                    </Stack>
                </Grid.Col>
            </Grid>

            <DemoDisabledModal label="PolliScanner disabled in Demo." isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Container>
    );
}

export default ScansImportDropzone;