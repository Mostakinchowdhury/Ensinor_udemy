import { Lock, PlayIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

export default function Singlecritem({
    h3,
    p,
    ispremium,
}: {
    h3?: string;
    p?: string;
    ispremium: boolean;
}) {
    return (
        <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div
                    className={`inline-flex size-10 items-center justify-center rounded-full ${ispremium ? 'bg-[#D7D7D7]' : 'bg-loginbg'}`}
                >
                    {!ispremium ? <PlayIcon size={24} /> : <Lock size={24} />}
                </div>
                <div className="space-y-1">
                    {' '}
                    <h3 className="text-xl font-medium text-text50">
                        {h3 ?? 'Understanding Design Thinking & Process'}
                    </h3>
                    <p className="text-sm text-text50">{p ?? '1h 35m'}</p>{' '}
                </div>
            </div>

            <Button
                className={`${ispremium ? 'bg-black text-white' : 'bg-loginbg text-text40'} text-lg font-medium hover:bg-primary`}
            >
                {ispremium ? 'Premium' : 'Play'}
            </Button>
        </li>
    );
}
