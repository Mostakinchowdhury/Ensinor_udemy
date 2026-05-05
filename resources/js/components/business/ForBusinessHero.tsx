import React from 'react';
import ForBusinessDataCard from './ForBusinessDataCard';

const ForBusinessHero = () => {
    return (
        <div className="flex w-full justify-center my-10 px-4">
            <div className="flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl lg:w-[480px] xl:w-[520px]">
                    <img
                        src="/contributer.png"
                        alt="contributor"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                    <ForBusinessDataCard
                        title="Corporate Training"
                        subtitle="Quickly onboard new employees and upskill your existing team with standardized trackable training programs that ensure consistent knowledge across your organization."
                    />

                    <ForBusinessDataCard
                        title="Partner Onboarding"
                        subtitle="Equip your business partners with the knowledge they need through dedicated training portals, reducing support requests and accelerating their time to productivity."
                    />

                    <ForBusinessDataCard
                        title="Customer Education"
                        subtitle="Help customers get the most from your products with interactive tutorials and guided courses."
                    />

                    <ForBusinessDataCard
                        title="Compliance or Certification Program"
                        subtitle="Ensure your team stays compliant with industry regulations through regular, trackable training."
                    />

                    <ForBusinessDataCard
                        title="Coaching Customers"
                        subtitle="Launch and grow your coaching business by delivering personalized support and development programs."
                    />
                </div>
            </div>
        </div>
    );
};

export default ForBusinessHero;
