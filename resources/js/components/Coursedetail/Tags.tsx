import React from 'react';

export default function Tags({ alltags }: { alltags: string[] }) {
    return (
        <div className="space-y-4 rounded-lg bg-[#F3F6F7] p-3.5">
            <h3 className="my-3 border-b-2 border-text50 pb-4 text-2xl font-medium text-text26">
                Popular Tags
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {alltags.map((alltag) => (
                    <div
                        key={alltag}
                        className={`cursor-pointer rounded-sm bg-white px-6 py-2.5 text-lg text-text26`}
                    >
                        {alltag}
                    </div>
                ))}
            </div>
        </div>
    );
}
