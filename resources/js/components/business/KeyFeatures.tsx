import React from "react";
import FeatureContainer from "./FeatureContainer";

const KeyFeatures = () => {
  return (
    <div className="w-full h-fit py-16 flex justify-center text-black px-4">
      
      <div className="w-full max-w-6xl">
        
        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-text40">
          Key Features
        </h1>

        {/* Subtitle */}
        <p className="text-center text-text50 max-w-2xl mx-auto mt-3 text-sm md:text-base">
          Everything you need to train your team and engage your customers effectively
        </p>

        {/* Cards */}
            <FeatureContainer />
      </div>
    </div>
  );
};

export default KeyFeatures;