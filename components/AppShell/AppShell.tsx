// components/AppShell/AppShell.tsx
'use client'
import { useState, useRef } from 'react';
import { AppShell, Navbar, Center, Header, Space, Text, MediaQuery, Burger, useMantineTheme, Image, Group, Container, Code, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PolliFooter from 'components/PolliFooter/PolliFooter';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
import { ReactNode } from 'react';
import Link from 'next/link';
import { NavbarNested } from 'components/Navbar/NavbarNested/NavbarNested';

// import dynamic from 'next/dynamic';

// const NavbarNested = dynamic(() => import('components/Navbar/NavbarNested/NavbarNested').then((mod) => mod.NavbarNested), { ssr: false });

interface AppShellComponentProps {
  children: ReactNode;
}

export function AppShellComponent({ children }: AppShellComponentProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  // Define media queries based on Mantine's breakpoints
  const isMediumScreenOrSmaller = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const isXsScreenOrSmaller = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  return (
    <AppShell
    layout="alt"
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="lg"
      navbar={
        <Navbar p="xs" fixed={false} hiddenBreakpoint="lg" hidden={!opened} width={{lg: 280, xl: 300 }}>
          <NavbarNested setOpened={setOpened} isMediumScreenOrSmaller={isMediumScreenOrSmaller} headerRef={headerRef} />
        </Navbar>
      }
      footer={<PolliFooter />}
      header={
        <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
          <Header ref={headerRef} height={{ xxxs:60,  xxs: 60, xs: 60, sm:60, md: 60, lg: 0, xl: 0 }} p="0">
            <Grid
              // style={{ height: '100%' }}
              // columns={2}
              // align="center"
              // gutter={0}
              >
              <Grid.Col span={2}>
                {/* <Center> */}
                <Burger
                        opened={opened}
                        onClick={() => setOpened(!opened)}
                        size="md"
                        color={theme.colors.gray[6]}
                        px="md"
                        mt="md"
                        // mr="sm"
                      />
                {/* </Center> */}
              </Grid.Col>
              <Grid.Col span="auto">
                {/* <Center> */}
                  <Link href="/">
                    <Image height="30" fit="contain" src="/logo/PolliOS.v0.1t.png" py="md" />
                  </Link>
                {/* </Center> */}
              </Grid.Col>
              <Grid.Col span={2}>
                <ColorSchemeToggle px="md" mt ="lg" />
              </Grid.Col>
              {/* <Grid.Col span={2}>
                <Code fw={700}>v0.5.2</Code>
              </Grid.Col>
              <Grid.Col span={1}>
                <ColorSchemeToggle />
              </Grid.Col> */}
              </Grid>
            </Header>
        </MediaQuery>
      }
    >
      <Container size="lg">
        {children}
      </Container>
    </AppShell>
  );
}