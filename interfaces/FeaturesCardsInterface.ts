
export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  comingSoon?: boolean;
  polliplusOnly?: boolean;
  disabledInDemo?: boolean;
  linkSwarmOverview?: boolean;
  linkActivityTrends?: boolean;
  linkProjectDashboard?: boolean;
}

export interface FeatureCardsSectionProps {
  badge?: string;
  title: string;
  description: string;
  cards?: FeatureCard[]; // make cards optional
}