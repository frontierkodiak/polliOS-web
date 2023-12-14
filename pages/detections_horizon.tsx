import React from 'react';
import FeatureCardsSection from 'components/FeatureCardsSection/FeatureCardsSection';
import ClientDetectionsHorizonChart from 'components/DetectionsHorizonChart/ClientDetectionsHorizonChart';
import { Space, Divider } from '@mantine/core';

const DetectionsHorizonPage: React.FC = () => {
  return (
    <>
      <FeatureCardsSection 
        badge="Activity Detail" 
        title="Dive deep into your data" 
        description="Use Activity Detail to take a close look at the activity patterns for your currently selected project."
      />
      <Space h="xl" />
      <Divider />
      <Space h="xl" />
      <ClientDetectionsHorizonChart />
    </>
  );
}

export default DetectionsHorizonPage;