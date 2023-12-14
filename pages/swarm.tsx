// pages/swarm.tsx
import SwarmGrid from 'components/SwarmGrid/SwarmGrid';
import FeatureCardsSection from 'components/FeatureCardsSection/FeatureCardsSection';
import { Divider } from '@mantine/core';

const SwarmPage: React.FC = () => {
  const cards = [
    {
      title: 'Scales with your needs',
      description: 'Whether you\'ve got a single Pod in your backyard, or 50 Swarms across a state, you can track every aspect of your deployment on one page. Update sampling protocols or register a new Swarm in a few clicks.',
      icon: 'IconAdjustmentsUp',
    },
    {
      title: 'Remotely configure your Pods',
      description: 'Each Pod hosts its own PodOS management page. Fine-tune camera settings, configure new sensors, or check battery health.. even if you\'re a thousand miles away! Fine-tune access controls with optional Tailscale integration.',
      icon: 'IconCameraCog',
      disabledInDemo: true,
    },
    {
      title: 'Manage offline deployments',
      description: 'If you\'re using a Hub or Pod Pro to run PolliEngine offline, you can still manage your Swarm in PolliOS. Too remote for cell coverage? Contact us for Hub+ satellite solutions.',
      icon: 'IconSatellite',
      comingSoon: true,
      polliplusOnly: true,
    },
  ];

  return (
    <>
      <FeatureCardsSection
        badge="Swarm Dashboard"
        title="One-stop shop for all your deployments."
        description="Passive sampling, the easy way. Your Dashboard lets you manage and monitor all of your Swarms and Pods in one spot."
        cards={cards}
      />
      <Divider my="xl" />
      <SwarmGrid />
    </>
  );
}

export default SwarmPage;