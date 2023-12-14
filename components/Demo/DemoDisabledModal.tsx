// components/Demo/DemoDisabledModal.tsx
import React from 'react';
import { Modal, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

interface DemoDisabledModalProps {
  label: string;
  isOpen: boolean;
  onClose: () => void;
}

export const DemoDisabledModal: React.FC<DemoDisabledModalProps> = ({ label, isOpen, onClose }) => {
  return (
    <Modal id="demo-disabled-modal" opened={isOpen} onClose={onClose} withCloseButton={false} centered>
      <Alert icon={<IconAlertCircle size="1rem" />} title="Bummer!" color="red">
        {label}
      </Alert>
    </Modal>
  );
};