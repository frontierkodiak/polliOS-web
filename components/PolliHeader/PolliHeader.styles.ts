// components/PolliHeader/PolliHeader.styles.ts
import { createStyles, rem } from '@mantine/core';



const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,
    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: rem(20), // Add this line to add a left margin of 20px
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'flex',
    lineHeight: 1,
    padding: `${rem(4)} ${rem(12)}`,
    borderRadius: theme.radius.xs,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontFamily: `--font-ibm-plex-sans-condensed, ${theme.fontFamily}`,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0], textDecoration: 'none',
    },
    '&:active, &:visited': {
      textDecoration: 'none',
    },

  },
  linkLabel: {
    marginRight: rem(5),
    fontFamily: `--font-ibm-plex-sans-condensed, ${theme.fontFamily}`,
  },

  navLink: {
    '& .mantine-NavLink-label': {
      textDecoration: 'none',
    },
  },

  dropdownMenu: {
    display: 'none',
    [theme.fn.smallerThan('sm')]: {
      display: 'block',
    },
    padding: `${rem(2)} ${rem(6)}`, // decrease padding around dropdown menu items
  },
}));

export default useStyles;