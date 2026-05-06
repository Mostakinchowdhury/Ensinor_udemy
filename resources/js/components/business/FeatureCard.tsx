import React from 'react';

type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
};

const FeatureCard = ({ icon, title, subtitle }: FeatureCardProps) => {
    return (
        <div className="flex min-h-[235px] w-[370px] flex-col items-center justify-center rounded-xl bg-[#F3F6F7] p-5 text-center transition hover:shadow-md">
            <div className='p-2 bg-[#FFF5CC]'>
              {icon}
            </div>

            <h1 className="my-2 text-[18px] font-semibold text-[#303030]">
                {title}
            </h1>

            <p className="text-sm text-text50">{subtitle}</p>
        </div>
    );
};

export default FeatureCard;
