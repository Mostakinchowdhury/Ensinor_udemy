import React from 'react';

export default function Skilllevels({
    skilllevels,
    value,
    fn,
}: {
    skilllevels: string[];
    value: string;
    fn: (name: string, value: string) => void;
}) {
    return (
        <div className="space-y-4 rounded-lg bg-[#F3F6F7] p-3.5">
            <h3 className="my-3 border-b-2 border-text50 pb-4 text-2xl font-medium text-text26">
                Skill Level
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {skilllevels.map((skilllevel) => (
                    <div
                        key={skilllevel}
                        className={`cursor-pointer rounded-sm px-6 py-2.5 text-lg ${value == skilllevel ? 'bg-loginbg text-text26' : 'bg-white text-text26'}`}
                        onClick={() => fn('skilllevel', skilllevel)}
                    >
                        {skilllevel}
                    </div>
                ))}
            </div>
        </div>
    );
}
