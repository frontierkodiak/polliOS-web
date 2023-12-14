// https://github.com/mantinedev/ui.mantine.dev/blob/7e5e46bfa881b38d2497b835096499cde90ce221/components/ProjectButton/ProjectButton.tsx

import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
    Badge,
  } from '@mantine/core';
  import { IconChevronRight, IconRocket } from '@tabler/icons-react';
  import { DemoDisabledModal } from 'components/Demo/DemoDisabledModal';
  import { useState } from 'react';
  
  
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
  
  interface ProjectButtonProps extends UnstyledButtonProps {
    image?: string;
    name: string;
    role: string;
    icon?: React.ReactNode;
  }
  
  export function ProjectButton({ image, name, role, icon, ...others }: ProjectButtonProps) {
    const { classes } = useStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleButtonClick = () => {
      setIsModalOpen(true);
    };
  
    return (
      <>
        <UnstyledButton className={classes.user} onClick={handleButtonClick} {...others}>
          <Group>
            {image ? (
              <Avatar src={image} radius="xl" size="md" />
            ) : (
              <Avatar color="blue" radius="xl" size="md">
                <IconRocket size="1.5rem" />
              </Avatar>
            )}
  
            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {name}
              </Text>
  
              <Badge color="blue" size="xs">
                {role}
              </Badge>
            </div>
  
            {icon || <IconChevronRight size={14} stroke={1.5} />}
          </Group>
        </UnstyledButton>
        <DemoDisabledModal label="Switching projects is disabled in demo." isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
    }