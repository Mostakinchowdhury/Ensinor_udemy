import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const ForBusinessDataCard = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-base md:text-lg font-semibold text-[#303030] flex items-start gap-2">
        <span className="text-green-500 mt-1">✅</span>
        {title}
      </h1>

      <p className="text-sm md:text-lg text-text50 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

export default ForBusinessDataCard;