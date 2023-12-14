import React, { useState } from 'react';
import { PaperProps } from '@mantine/core';
import Link from 'next/link';
import useStyles from './PolliHeader.styles';
import { PolliLogoPrimary } from '../Assets/PolliLogo/PolliLogo';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { Menu, Center, Group, Burger, Paper, Portal, NavLink } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

interface LinkType {
  link: string;
  label: string;
  links?: LinkType[];
}

const PolliHeader: React.FC = () => {
  const { classes } = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { link: '/mission', label: 'Mission' },
    { link: '/product', label: 'Product' },
    {
      link: '/solutions',
      label: 'Solutions',
      links: [
        { link: '/solution_backyard', label: 'Backyard' },
        { link: '/solution_conservation', label: 'Conservation' },
        { link: '/solution_science', label: 'Science' },
        { link: '/solution_invasives', label: 'Invasives' },
        { link: '/solution_tourism', label: 'Tourism' },
      ],
    },
    { link: '/blog', label: 'Blog' },
  ];

  const DropdownMenu: React.FC<PaperProps> = (props) => (
    <Portal>
      <Paper {...props} shadow="xs" style={{ width: 260, position: 'absolute', right: 15, top: 55, padding: '1rem' }}>
        {links.map((link) => {
          if (link.links) {
            return (
              <NavLink key={link.link} label={link.label} styles={{ label: { textDecoration: 'none' } }}>
                {link.links.map((childLink) => (
                  <Link key={childLink.link} href={childLink.link}>
                    <NavLink label={childLink.label} styles={{ label: { textDecoration: 'none' } }} />
                  </Link>
                ))}
              </NavLink>
            );
          }

          return (
            <Link key={link.link} href={link.link}>
              <NavLink label={link.label} styles={{ label: { textDecoration: 'none' } }} />
            </Link>
          );
        })}
      </Paper>
    </Portal>
  );
  
  const renderLink = (link: LinkType) => {
    const menuItems = link.links?.map((item) => (
      <Link key={item.link} href={item.link}>
        <NavLink label={item.label} styles={{ label: { textDecoration: 'none' } }} />
      </Link>
    ));
  
    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }
  
    return (
      <Link href={link.link} key={link.label} className={classes.link}>
        {link.label}
      </Link>
    );
  };

  return (
    <header className={classes.inner}>
      <Link href="/">
        <span>
          <PolliLogoPrimary size={100} />
        </span>
      </Link>
      <nav className={classes.links}>
        <Group>
          {links.map(renderLink)}
        </Group>
      </nav>
      <ColorSchemeToggle />
      <Burger
        opened={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
        className={classes.burger}
        size="sm"
      />
      {menuOpen && <DropdownMenu />}
    </header>
  );
};

export default PolliHeader;