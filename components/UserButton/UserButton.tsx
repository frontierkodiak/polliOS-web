// https://github.com/mantinedev/ui.mantine.dev/blob/7e5e46bfa881b38d2497b835096499cde90ce221/components/UserButton/UserButton.tsx

import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
  } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { useState } from 'react';
import { DemoDisabledModal } from 'components/Demo/DemoDisabledModal';
  
  const useStyles = createStyles((theme) => ({
    user: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.xs,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },
  }));
  
  interface UserButtonProps extends UnstyledButtonProps {
    image: string;
    name: string;
    email: string;
    icon?: React.ReactNode;
  }
  
  export function UserButton({ image, name, email, icon, ...others }: UserButtonProps) {
    const { classes } = useStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    return (
      <>
        <UnstyledButton className={classes.user} onClick={handleButtonClick} {...others}>
          <Group>
            <Avatar src={image} radius="xl" size="md" />
  
            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {name}
              </Text>
  
              <Text color="dimmed" size="xs">
                {email}
              </Text>
            </div>
  
            {icon || <IconChevronRight size={14} stroke={1.5} />}
          </Group>
        </UnstyledButton>
  
        <DemoDisabledModal label="Switching users is disabled in demo." isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }