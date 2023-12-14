// pages/project_dashboard.tsx
import { Space, Divider } from '@mantine/core';
import { TableSelection } from '../components/Projects/ProjectsTable/ProjectsTable';
import FeatureCardsSection from '../components/FeatureCardsSection/FeatureCardsSection';

const featureCards = [
  {
    title: 'Assign tasks to your team',
    description: 'Manage your studies with ease by assigning sampling or analysis tasks to members of your team. Add or remove users and change their permission levels with a few clicks. Stop worrying about losing critical knowledge to field crew churn: PolliOS makes tracking projects and all their context easy.',
    icon: 'IconUsersGroup',
    polliplusOnly: true,
  },
  {
    title: 'Control dataflows per-project',
    description: 'Manage the data assigned to each project with fine spatial, temporal, and protocol filters. Create and share dataviews to easily share insights with your team.',
    icon: 'IconAdjustments',
    polliplusOnly: true,
  },
];

export default function MyProjects() {
  return (
    <>
      <FeatureCardsSection
        badge="projects"
        title="View and manage your projects"
        description="Stop wasting time on administration and get back to the science. Project Dashboard lets you manage all your projects in one spot."
        cards={featureCards}
      />
      <Space h="xl" />
      <Divider />
      <Space h="xl" />
      <TableSelection />
    </>
  );
}