import { createStyles, Container, Title, Text, Button, Group, rem } from '@mantine/core';
import { Illustration } from './Illustration';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  inner: {
    position: 'relative',
  },

  image: {
    ...theme.fn.cover(),
    opacity: 0.55,
  },

  content: {
    paddingTop: rem(220),
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(120),
    },
  },

  title: {
    fontFamily: `--font-ibm-plex-sans-condensed, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(530),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    fontFamily: `--font-ibm-plex-sans-condensed, ${theme.fontFamily}`,
  },
}));

interface ComingSoonProps {
  description: string;
}

export default function ComingSoon({ description }: ComingSoonProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Coming soon!</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
             {description}
          </Text>
          <Group position="center">
            <Button size="md" component="a" href="/">Go back to PolliOS Home</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}