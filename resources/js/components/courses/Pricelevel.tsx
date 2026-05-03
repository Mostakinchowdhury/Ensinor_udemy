import React from 'react';

export default function Pricelevel({
    pricelevels,
    value,
    fn,
}: {
    pricelevels: string[];
    value: string;
    fn: (name: string, value: string) => void;
}) {
    return (
        <div className="space-y-4 rounded-lg bg-[#F3F6F7] p-3.5">
            <h3 className="my-3 border-b-2 border-text50 pb-4 text-2xl font-medium text-text26">
                Price Level
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
                {pricelevels.map((pricelevel) => (
                    <div
                        key={pricelevel}
                        className={`cursor-pointer rounded-sm px-6 py-2.5 text-lg ${value == pricelevel ? 'bg-loginbg text-text26' : 'bg-white text-text26'}`}
                        onClick={() => fn('price_level', pricelevel)}
                    >
                        {pricelevel}
                    </div>
                ))}
            </div>
        </div>
    );
}
