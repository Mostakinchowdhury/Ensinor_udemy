import React from 'react';
import QNAccordion from './QNAccordion';

const FrequentQNA = () => {
    return (
        <div className="flex w-full justify-center mb-20 px-4">
            <div className="w-full max-w-6xl">
                {/* Title */}
                <h1 className="text-center text-3xl font-semibold text-text40 md:text-4xl lg:text-5xl">
                    Frequently asked questions
                </h1>

                {/* Subtitle */}
                <p className="mt-3 text-center text-base text-text50 md:text-lg">
                    Perceived end knowledge certainly day sweetness why
                    cordially
                </p>

                {/* Accordion Grid */}
                <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* Left Column */}
                    <div className="flex flex-col gap-5">
                        <QNAccordion
                            defaultOpen={true}
                            title="Do you provide customer support?"
                            description="Preference any astonished unreserved Mrs. Prosperous understood Middleton's in
conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew
a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous dld
believe him all had supported. Family months lasted simple set nature vulgar him_ Picture
for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving
agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides
add,"
                        />

                        <QNAccordion
                            title="What is your privacy policy?"
                            description="Preference any astonished unreserved Mrs. Prosperous understood Middleton's in
conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew
a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous dld
believe him all had supported. Family months lasted simple set nature vulgar him_ Picture
for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving
agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides
add,"
                        />

                        <QNAccordion
                            title="Can I customize training content?"
                            description="Preference any astonished unreserved Mrs. Prosperous understood Middleton's in
conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew
a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous dld
believe him all had supported. Family months lasted simple set nature vulgar him_ Picture
for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving
agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides
add,"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-5">
                        <QNAccordion
                            title="Do you provide certifications?"
                            description="Preference any astonished unreserved Mrs. Prosperous understood Middleton's in
conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew
a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous dld
believe him all had supported. Family months lasted simple set nature vulgar him_ Picture
for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving
agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides
add,"
                        />

                        <QNAccordion
                            title="Can I onboard partners using this platform?"
                            description="Preference any astonished unreserved Mrs. Prosperous understood Middleton's in
conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew
a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous dld
believe him all had supported. Family months lasted simple set nature vulgar him_ Picture
for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving
agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides
add,"
                        />

                        <QNAccordion
                            title="Is customer support available?"
                            description="Preference any astonished unreserved Mrs. Prosperous understood Middleton's in
conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. It drew
a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous dld
believe him all had supported. Family months lasted simple set nature vulgar him_ Picture
for attempt joy excited ten carried manners talking how. Suspicion neglected the resolving
agreement perceived at an. Comfort reached gay perhaps chamber his six detract besides
add,"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentQNA;
