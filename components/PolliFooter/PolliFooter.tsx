import React from 'react';
import { createStyles, Badge, Group, ActionIcon, Flex, Text, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { PolliLabsTrans } from '../Assets/PolliLogo/PolliLogo';
import Link from 'next/link';


const useStyles = createStyles((theme) => ({
  footer: {
    // marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    padding: theme.spacing.xs,
  },
  // logo: {
  //   flex: '0 1 auto',
  // },
  copyright: {
    fontSize: rem(10),
    alignSelf: 'center',
    [theme.fn.smallerThan('xs')]: {
      marginBottom: theme.spacing.md,
    },
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));


export default function PolliFooter() {
  const { classes } = useStyles();

  return (
    <Flex className={classes.footer} align="flex-end" justify="flex-end">
      <Group position="center" spacing="md">
          <ActionIcon component="a" href="https://polli.ai" size={rem(80)}>
              <Image height="50" fit="contain" src="/logo/PolliLabs.v0.1.5.300t.png" />
          </ActionIcon>
          <Text c="dimmed" size="sm" className={classes.copyright}>
            © 2023 Polli Labs. All rights reserved.
          </Text>
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <ActionIcon size="lg" component="a" href="https://twitter.com/pollilabs">
              <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" component="a" href="https://www.youtube.com/channel/UCILxaV1_MJx01zbNqyJaang">
              <IconBrandYoutube size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" component="a" href="https://www.instagram.com/pollilabs/">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
          <Badge color="gray" variant="light" size="xs">
            Pre-Alpha
          </Badge>
      </Group>
    </Flex>
  );
}
