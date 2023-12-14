import React from 'react';
import Link from 'next/link';
import { Badge, Group, Title, Text, Card, SimpleGrid, Container, Divider } from '@mantine/core';
import { IconChartHistogram, IconDatabasePlus, IconPresentationAnalytics, IconZoomCheck, IconVocabulary, IconAdjustmentsUp, IconCameraCog, 
  IconSatellite, IconChevronsRight, IconHeartRateMonitor, IconRocket, IconMicroscope, IconDevices, IconCloudUpload, IconMicrophone2, IconWorldUpload,
  IconPuzzle, IconPigMoney, IconAdjustments, IconUsersGroup} from '@tabler/icons-react';
import { FeatureCardsSectionProps } from 'interfaces/FeaturesCardsInterface';

// Create a mapping from string names to icon components
const iconMapping: { [iconName: string]: React.ComponentType<any> } = {
    IconChartHistogram,
    IconDatabasePlus,
    IconPresentationAnalytics,
    IconZoomCheck,
    IconVocabulary,
    IconAdjustmentsUp,
    IconCameraCog,
    IconSatellite,
    IconRocket,
    IconHeartRateMonitor,
    IconMicroscope,
    IconChevronsRight,
    IconDevices,
    IconCloudUpload,
    IconMicrophone2,
    IconPuzzle,
    IconPigMoney, 
    IconAdjustments, 
    IconUsersGroup,
    IconWorldUpload,
  };
  
  const FeatureCardsSection: React.FC<FeatureCardsSectionProps> = ({ badge, title, description, cards = [] }) => {
    const features = cards.map((card) => {
      // Get the correct icon component from the mapping
      const IconComponent = iconMapping[card.icon];
  
      return (
        <Card key={card.title} shadow="md" padding="xl" style={{ position: 'relative' }}>
          <Group position="center">
            <IconComponent style={{ width: 50, height: 50 }} stroke={2} color="blue" />
          </Group>
          <Group position="center" mt="md" mb="xs">
            <Text weight={500}>{card.title}</Text>
          </Group>
          <Text size="sm" color="dimmed" mt="sm" mb="xl">
            {card.description}
          </Text>
          <Group position="right" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            {card.disabledInDemo && (
              <Badge color="red" variant="filled">
                Disabled in Demo
              </Badge>
            )}
            {card.comingSoon && (
              <Badge color="blue" variant="light">
                Coming Soon
              </Badge>
            )}
            {card.polliplusOnly && (
              <Badge color="green" variant="filled">
                Polli+
              </Badge>
            )}
          </Group>
          <Group style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', paddingTop: '10px' }}>
          {card.linkSwarmOverview && (
            <Link href="/swarm">
            <Badge color="blue" variant="outline" rightSection={<IconChevronsRight style={{ verticalAlign: 'middle', fontSize: '0.8em',  }} />} size="sm">
            swarm dashboard
            </Badge>
            </Link>
          )}
          {card.linkActivityTrends && (
            <Link href="/activity_trends">
            <Badge color="blue" variant="outline" pr={3} rightSection={<IconChevronsRight style={{ verticalAlign: 'middle', fontSize: '0.8em' }} />} size="sm">
            explore activity
            </Badge>
            </Link>
          )}
          {card.linkProjectDashboard && (
            <Link href="/project_dashboard">
            <Badge color="blue" variant="outline" pr={3} rightSection={<IconChevronsRight style={{ verticalAlign: 'middle', fontSize: '0.8em' }} />} size="sm">
            project dashboard
            </Badge>
            </Link>
          )}
        </Group>
      </Card>
    );
  });
  
    return (
      <Container size="lg" px="xl" py="xl">
        {badge && (
          <Group position="center">
            <Badge variant="filled" size="lg">
              {badge}
            </Badge>
          </Group>
        )}
        <Title order={2} align="center" mt="xl">
          {title}
        </Title>
        <Text color="dimmed" align="center" mt="md">
          {description}
        </Text>
        <SimpleGrid cols={3}  spacing="xl" mt={50} breakpoints={[
              { maxWidth: 'lg', cols: 2, spacing: 'lg' },
              { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          ]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  };
  
  export default FeatureCardsSection;