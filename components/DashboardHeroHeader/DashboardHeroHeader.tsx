// PolliHeroHeader.tsx

import { createStyles, rem, Container, Title, Text, Highlight } from '@mantine/core';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

const useStyles = createStyles((theme) => ({

  // Modify the image URL here
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(/product/double_pods_mounted_0.JPG)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },
  
  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `--font-oswald, ${theme.fontFamily}`,
    fontWeight: 600,
    lineHeight: 1.05,
    maxWidth: rem(1000),
    fontSize: rem(50),

    [theme.fn.smallerThan('xl')]: {
      fontSize: rem(46),
    },
    [theme.fn.smallerThan('lg')]: {
      fontSize: rem(40),
    },
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(36),
      lineHeight: 1.15,
    },
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: rem(26),
      lineHeight: 1.15,
    },
    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
      fontSize: rem(22),
      lineHeight: 1.15,
    },

  },

  description: {
    color: theme.white,
    fontFamily: `--font-ibm-plex-sans-condensed, ${theme.fontFamily}`,
    opacity: 0.75,
    fontSize: rem(26),
    maxWidth: rem(600),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function PolliHeroHeader() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>

            <Title className={classes.title}>
              Turn on.{' '}
              <Typed
                strings={[
                  'Get data.',
                  'Do science.',
                  'Monitor invasives.',
                  'Supercharge studies.',
                  'Design interventions.',
                  'Track restoration.',
                  'Measure pollination.',
                  'Survey wildlife.',
                  'Target conservation.',
                  'Manage deployments.',
                ]}
                typeSpeed={70}
                backSpeed={90}
                loop
              />
            </Title>

            <Text className={classes.description} mt={70}>
              
              <Highlight
                highlight={['the big picture.']}
                highlightStyles={(theme) => ({
                  backgroundImage: theme.fn.linearGradient(45, theme.colors.green[5], theme.colors.orange[5]),
                  fontWeight: 700,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                })}
              >
                PolliOS does the little things, so you can focus on the big picture.
              </Highlight>
            </Text>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default PolliHeroHeader;