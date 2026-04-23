import {
    AlignEndVertical,
    Ambulance,
    Microscope,
    StickyNote,
    TypeOutlineIcon,
    VenusIcon,
} from 'lucide-react';
import React from 'react';

export default function Partners() {
    return (
        <div className="my-20 w-full bg-[#F3F6F7] py-8">
            <div className="mx-auto max-w-6xl space-y-4">
                <h3 className="text-center text-5xl font-semibold text-text40">
                    Partners who trust Us
                </h3>
                <p className="text-center text-lg text-text50">
                    Our platform gives you the freedom to grow your skills at
                    your own pace.
                </p>
                {/* logos */}
                <div className="mt-12 flex items-center justify-between gap-6">
                    <Microscope size={54} />
                    <TypeOutlineIcon size={54} />
                    <AlignEndVertical size={54} />
                    <StickyNote size={54} />
                    <Ambulance size={54} />
                    <VenusIcon size={54} />
                </div>
            </div>
        </div>
    );
}
