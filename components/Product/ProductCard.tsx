import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import classes from './ProductCard.module.css';

interface ProductCardInterface {
  name: string;
  desc: string;
  features: Array<{ label: string; icon: React.ElementType }>;
  addons: Array<{ name: string; icon: React.ElementType; color: string }>;
}

export function ProductCard({ name, desc, features, addons }: ProductCardInterface) {
  const featureElements = features.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  const addonElements = addons.map((addon) => (
    <Badge key={addon.name} variant="outline" color={addon.color}>
      <addon.icon />
      {addon.name}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src="https://i.imgur.com/ZL52Q2D.png" alt={name} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{name}</Text>
          <Text fz="xs" c="dimmed">
            {desc}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing="xs" mb={-8}>
          {featureElements}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing="md">
          {addonElements}
        </Group>
      </Card.Section>
    </Card>
  );
}