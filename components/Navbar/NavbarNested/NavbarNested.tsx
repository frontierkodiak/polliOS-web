import { useState, useRef } from 'react';
import { Navbar, Group, Stack, Badge, Code, Space, createStyles, Image, Overlay, Divider, useMantineTheme, Burger } from '@mantine/core';
import { useMediaQuery, useClickOutside } from '@mantine/hooks';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconAffiliate,
  IconScan,
  IconChartDots3,
  IconPuzzle,
  IconHome2,
  IconCircleCheck,
  IconZoomScan,
  IconClipboardList,
  IconInfoCircle,
} from '@tabler/icons-react';
import Link from 'next/link';
import { UserButton } from '../../UserButton/UserButton';
import { LinksGroup } from 'components/Navbar/NavbarLinksGroup/NavbarLinksGroup';
import { PolliOSTrans } from 'components/Assets/PolliLogo/PolliLogo';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
import { ActionIconCheck, ActionIconCircleCheck, ActionIconCircleCheckFilled, ActionIconWorldCheck, ActionIconShieldCheck } from 'components/Assets/ActionIcons/ActionIcons';
import { ProjectButton } from 'components/Projects/ProjectButton';

const mockdata = [
  {
    label: 'Swarm',
    icon: IconAffiliate,
    initiallyOpened: true,
    links: [
      { label: 'Dashboard', link: '/swarm' },
    ],
  },
  {
    label: 'Scanner',
    icon: IconZoomScan,
    initiallyOpened: true,
    links: [
      { label: 'Import', link: '/scans_import' },
    ],
  },
  {
    label: 'Explore activity',
    icon: IconChartDots3,
    initiallyOpened: true,
    links: [
      { label: 'Summary', link: '/activity_trends' },
	  { label: 'Detail', link: '/detections_horizon' },
    ],
  },
  {
    label: 'My modules',
    icon: IconPuzzle,
    initiallyOpened: true,
    links: [
      { label: 'Pollination', link: '/scans_pollination' },
	  { label: 'Market', link: '/module_market' },
    ],
  },
  {
    label: 'My projects',
    icon: IconClipboardList,
    initiallyOpened: true,
    links: [
      { label: 'Dashboard', link: '/project_dashboard' },
    ],
  },
  // { label: 'About PolliOS', icon: IconInfoCircle, link: '/about' },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    height: '100%',
  },

  header: {
    padding: theme.spacing.xs,
    paddingTop: 0,
    marginLeft: -theme.spacing.xs,
    marginRight: -theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    // flex: 1,
    marginLeft: -theme.spacing.xl,
    marginRight: -theme.spacing.xl,
  },

  linksInner: {
    // flex: 1,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingTop: theme.spacing.md,
  },
}));

export function NavbarNested({ setOpened, isMediumScreenOrSmaller, headerRef }: { setOpened: (opened: boolean) => void, isMediumScreenOrSmaller: boolean, headerRef: React.RefObject<HTMLElement> }) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} setNavbarOpened={setOpened} isMediumScreenOrSmaller={isMediumScreenOrSmaller} />
  ));

  // Create a ref for the Navbar component
  const navbarRef = useRef<HTMLElement | null>(null);

  // Use useEffect to call useClickOutside when navbarRef.current changes
  useClickOutside(() => setOpened(false), null, [navbarRef.current, headerRef.current]);

  return (
    <Navbar ref={navbarRef} width={{ xs: 200, sm: 250, md: 270, lg: 280, xl: 300 }} p="sm" className={classes.navbar}>
        {/* Conditionally render the Navbar.Section for the header */}
        {/* {!isMediumScreenOrSmaller && ( */}
          <Navbar.Section className={classes.header}>
            <Group position="center" spacing="sm">
              <Link href="/">
                <Image height={isMediumScreenOrSmaller ? 20 : 30} fit="contain" src="/logo/PolliOS.v0.1t.png" />
              </Link>
              <Code fw={700}>v0.5.2</Code>
              <ColorSchemeToggle />
            </Group>
          </Navbar.Section>
        {/* )} */}

      <Navbar.Section grow mt="md" className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Stack spacing="xs">
          <ProjectButton name="Demo Project" role="project admin" />
          <Divider variant="dotted" my="0" />
          <UserButton
            image="/icons/woman_magnifying_glass_icon_trim_128.png"
            name="Sally McScience"
            email="demo@demo.com"
          />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}