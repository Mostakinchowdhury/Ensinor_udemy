import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureContainer = () => {
    return (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
</div>
    );
};

export default FeatureContainer;
