// components/DashboardHeader/DashboardHeader.tsx
import { Burger, useMantineTheme, Image, Group, Container, Code } from '@mantine/core';
import Link from 'next/link';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@mantine/core';

interface DashboardHeaderProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  // hidden: boolean;
}

export function DashboardHeader({ opened, setOpened }: DashboardHeaderProps) {
  const theme = useMantineTheme();

  return (
    <Header height={{ xs: 50, sm:50, md: 50 }} p="md">
      <Container px="xs" py="xs">
        <Group position="apart" spacing="md">
        <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
          <Group position="center" spacing="md">
            <Link href="/">
              <Image height="30" fit="contain" src="/logo/PolliOS.v0.1t.png" />
            </Link>
            <Code fw={700}>v4.1.5</Code>
          </Group>
          <ColorSchemeToggle />
        </Group>
      </Container>
    </Header>
  );
}