// pages/detections_per_clade.tsx
import React, { useState } from 'react';
import ClientMetabaseGenericStandalone from 'components/Metabase/MetabaseGeneric/ClientMetabaseGenericStandalone';
import FeatureCardsSection from 'components/FeatureCardsSection/FeatureCardsSection';
import { useMantineTheme, Badge, Group, Title, Text, Card, SimpleGrid, Container, Switch, Popover, Divider, Stack } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';


const ActivityTrends: React.FC = () => {
    const cards = [
      {
        title: 'Multilevel insights',
        description: 'Visualize trends across taxonomic levels. Polli Brain suppresses false positives by only classifying specimens to the lowest level it can confidently discern.',
        icon: 'IconChartHistogram',
      },
      {
        title: 'No-code multifactor analysis',
        description: 'Explore interactions between biotic and abiotic processes with rich multifactor visualizations. Bring your own data, tap into Polli\'s sensor add-ons, or use our curated datasets.',
        icon: 'IconDatabasePlus',
        comingSoon: true,
        polliplusOnly: true,
      },
      {
        title: 'Answer your exact question',
        description: 'Explore your data and create dashboards in minutes. Polli+ subscribers can customize questions and create visualizations through an easy drag-n-drop interface.',
        icon: 'IconPresentationAnalytics',
        comingSoon: true,
        polliplusOnly: true,
      },

    ];
  
    const [checked, setChecked] = useState(false);
    const theme = useMantineTheme();
  
    return (
      <>
        <FeatureCardsSection
          title="Your ecosystem, at-a-glance."
          description="Activity Summary gives a quick look at the activity picked up by your Polli Swarm in the last 2 weeks."
          badge="Activity Summary"
          cards={cards}
        />
        <Divider my="xl" />
        <Group position="center" mt="md">
          <Badge color="cyan" variant="filled">Brain v0.6.1</Badge>
          <Badge color="cyan" variant="light">Target: Generic</Badge>
          <Badge color="cyan" variant="light">Modules: 6</Badge>
          <Badge color="grape" variant="filled">PolliEngine v0.5.2</Badge>
          <Badge color="grape" variant="light">Scans: excluded</Badge>
          <Badge color="lime" variant="filled">Swarm: Hillhouse</Badge>
          <Popover position="bottom" withArrow shadow="md">
            <Popover.Target>
             <Switch
                checked={checked}
                onChange={(event) => {
                  setChecked(event.currentTarget.checked);
                }}
                color="teal"
                size="md"
                label={<Text size="sm" weight={500}>Common names</Text>}
                thumbIcon={
                  checked ? (
                    <IconCheck size="0.8rem" color={theme.colors.teal[theme.fn.primaryShade()]} stroke={3} />
                  ) : (
                    <IconX size="0.8rem" color={theme.colors.red[theme.fn.primaryShade()]} stroke={3} />
                  )
                }
              />
            </Popover.Target>
            <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
              <Text size="xs">Coming soon!</Text>
            </Popover.Dropdown>
          </Popover>
        </Group>
        <Container size="lg" mt="xl">

        <ClientMetabaseGenericStandalone y_proportion={2} resource={5} />
        </Container>
      
      </>
    );
  }
  
  export default ActivityTrends;