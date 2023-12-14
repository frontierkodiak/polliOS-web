import DashboardHeroHeader from 'components/DashboardHeroHeader/DashboardHeroHeader';
import { MantineProvider, Button } from '@mantine/core';
import FeatureCardsSection from 'components/FeatureCardsSection/FeatureCardsSection';
import { IconX } from '@tabler/icons-react';
import { useEffect } from 'react';
import { notifications } from '@mantine/notifications';

export default function HomePage() {
  // useEffect(() => {
  //   notifications.show({
  //     title: 'Performance Alert',
  //     autoClose: false,
  //     message: "We're experiencing performance issues with our backend. Some graphs may load slowly during periods of high traffic. We're working on a fix.",
  //     icon: <IconX size="1.1rem" />,
  //     color: 'red',
  //   });
  // }, []);
    useEffect(() => {
    notifications.show({
      title: 'Demo Swarm Offline',
      autoClose: false,
      message: "Our demo swarm is currently offline for upgrades. Come back next week to see the new features!",
      icon: <IconX size="1.1rem" />,
      color: 'red',
    });
  }, []);

  return (
    <>
      <DashboardHeroHeader />
      <FeatureCardsSection
        badge="PolliOS"
        title="Collection. Analysis. And everything in between."
        description="AI-powered monitoring, the easy way. Monitor deployments, manage your projects, and analyze your data, all in one place. With PolliOS, your science is limited by your imagination, not your engineering chops."
        cards={[
          {
            title: 'Scale your data, not your headaches',
            description: 'Keep the science rolling, without entering the field. Monitor and manage your Polli Swarm deployments from afar. Map, tune protocols, and even update Pod firmware, all from within PolliOS.',
            icon: 'IconHeartRateMonitor',
            linkSwarmOverview: true,
          },
          {
            title: 'Manage projects and teams',
            description: ' Stop wasting time on admin. PolliOS\'s Project Dashboard lets you manage all your projects in one spot. Assign tasks, control dataflows, and share insights with your team.',
            icon: 'IconUsersGroup',
            linkProjectDashboard: true,
          },
          {
            title: 'Analysis at the speed of thought',
            description: 'Move from question to answer in minutes. Radically reduce your iteration time and explore more ideas with PolliOS\'s powerful no-code analysis tools. Need more? Polli packages expose the full power of your data to your favorite programming languages.',
            icon: 'IconRocket',
            linkActivityTrends: true,
          },
        ]}
      />
    </>
  );
}

// Custom theme is applied to all components in App
function Demo() {
  return (
    <MantineProvider       
    theme={{
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
        fontFamilyMonospace: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
        headings: { fontFamily: 'Inter, Greycliff CF, sans-serif' },
      }} withGlobalStyles withNormalizeCSS>
      <HomePage />
    </MantineProvider>
  );
}