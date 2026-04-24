import React from 'react';

export default function Coursestypefilter({ types }: { types: string[] }) {
    const [selectedType, setSelectedType] = React.useState<string>(types[0]);

    return (
        <div className="space-y-4 rounded-lg bg-[#F3F6F7] p-3.5">
            <h3 className="my-3 border-b-2 border-text50 pb-4 text-2xl font-medium text-text26">
                Course Type
            </h3>
            <div className="flex items-center justify-center gap-3">
                {types.map((type) => (
                    <div
                        key={type}
                        className={`cursor-pointer rounded-sm px-6 py-2.5 text-lg ${selectedType == type ? 'bg-loginbg text-text26' : 'bg-white text-text26'}`}
                        onClick={() => setSelectedType(type)}
                    >
                        {type}
                    </div>
                ))}
            </div>
        </div>
    );
}
