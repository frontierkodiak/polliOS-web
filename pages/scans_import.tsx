// pages/scans_import.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import FeatureCardsSection from 'components/FeatureCardsSection/FeatureCardsSection';
import { Divider, Space } from '@mantine/core';

// Dynamically import ScansImportDropzone
const ScansImportDropzone = dynamic(() => import('components/ScansImportDropzone/ScansImportDropzone'), {
  ssr: false, // This line is important. It disables server-side rendering for this component.
});

const ScansImport: React.FC = () => {
  const cards = [
    {
      title: 'Your methods, minus the bottlenecks',
      description: 'Field research budgets are dominated by the cost of skilled, specializd labor. Though they\'re more important than ever, ambitious studies with big crews increasingly struggle to attract funding. Supercharge your crew\'s efficiency and tap a broader labor pool by replacing or supplementing your methods with image-based samples. Chop per-sample costs and scale the ambitious of your research. A rigorous digital record of sample effort makes it easy to integrate Polli-generated data with legacy studies and their methods.',
      icon: 'IconPigMoney',
    },
    {
      title: 'Modular algorithms for any research question',
      description: 'Your questions don\'t end with presence-absence. Neither does Polli Brain. Generate pollination networks, assess plant abundance, or perform transect surveys by selecting Brain targets within PolliOS. Select multiple targets to bootstrap multiple projects from the same data. We regularly add new Brain modules to support more analyses: the first behavioral analysis modules will launch in early 2024. Fine-tune Polli Brain for your exact usecase with a drag-n-drop pipeline editor (est. late 2024). Need something specific? Contact us! We can develop a module to fit your research needs.',
      icon: 'IconPuzzle',
    },
    {
      title: 'One tool for your multimodal data',
      description: 'Mine insights from audio recordings, images, and videos-- all in the same project. Whether you\'re adding recordings from a Pod Pro or uploading your own, Polli Brain fuses data from all your sensors to produce an incredibly deep view into your study system. Need to limit data sources to fit an existing study protocol? Fine-tune data sources for analyses and exports with PolliOS.',
      icon: 'IconMicrophone2',
      comingSoon: true,
      polliplusOnly: true,
    },
    {
      title: 'Easy imports with PolliScanner for the desktop',
      description: 'Have a ton of data? Efficiently upload pictures, videos, recordings, and sensor data into PolliOS with our lightweight desktop apps for Windows, MacOS, and Linux (Flatpak).  Optionally pre-filter blank frames and compress media for quicker imports. Store your data and easily reuse it in future projects with Polli+.',
      icon: 'IconCloudUpload',
      comingSoon: true,
      polliplusOnly: true,
    },
    {
      title: 'Sample in seconds with PolliScanner for iOS and Android',
      description: 'Develop a deeper understanding of your backyard, or launch a study with equipment that your crew already has in their pockets. Tap \'Start Scanning\' and watch as PolliScanner surveys everything in view. In Rec mode, you\'ll see a live PolliScore reflecting the quantity and diversity of organisms you\'ve scanned. Upload your scans to PollliOS and try to top your local leaderboard! Scientific mode allows project managers to assign helpers a daily \'task list\' of Scans to complete. Optionally standardize samples by defining transect boundaries or assigning timed scans.',
      icon: 'IconDevices',
      comingSoon: true,
    },
  ];

  return (
    <>
      <FeatureCardsSection
        badge="PolliSCANNER"
        title="You bring the pics. We'll bring the Brain."
        description="Active sampling with superpowers. Turn your field assistants into field heroes with image-based surveys, powered by Polli Scanner."
        cards={cards}
      />

      <Divider my="xl" />
      
      <Space h="xl" />
      <ScansImportDropzone />
      <Space h="xl" />
    </>
  );
}

export default ScansImport;