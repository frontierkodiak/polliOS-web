// pages/module_market.tsx
import React from 'react';
import ComingSoon from 'components/ComingSoon/ComingSoon';
import FeatureCardsSection from 'components/FeatureCardsSection/FeatureCardsSection';

const ModuleMarket: React.FC = () => {
    return (
        <>
            <FeatureCardsSection 
                badge="Module market"
                title="Find & Deploy the right Modules for your project"
                description="Customize Polli Brain for your project with Modules for behavioral analysis, event detection, and more."
                cards={[
                    {
                        title: "Browse public & private Modules",
                        description: "Select from any of our pre-made or user-uploaded Modules. We provide a selection of Modules for common tasks like pollination detection, mammal behavior analysis, and floral density estimation. Need something specific? We work with you to create the right Modules for your task. You can choose to keep your custom Modules private, or share them in the Module Market for a discounted dev fee.",
                        icon: "IconPuzzle",
                        comingSoon: true
                    },
                    {
                        title: "Deploy in a few clicks",
                        description: "Add Modules to Brain and deploy to your Projects or Swarms in a few clicks. Stack Modules or swap out Brain's generalized detectors & classifiers with ones fine-tuned for your task. Optionally deploy new Brain configs to field-deployed Pod+ and Hub+ devices over cellular. Re-run Brain over your data to add additional analyses to an existing Project.",
                        icon: "IconWorldUpload",
                        comingSoon: true
                    }
                ]}
            />
            <ComingSoon description="Module Marketplace isn't available yet. We're hard at work, come back soon!" />
        </>
    );
}

export default ModuleMarket;