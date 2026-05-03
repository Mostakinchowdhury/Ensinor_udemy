import { Lock, PlayIcon } from 'lucide-react';
import React from 'react';
import type { curriculam } from '@/pages/detail/Coursedt';
import { Button } from '../ui/button';

export default function Singlecritem({
    data,
    fn,
}: {
    data: curriculam;
    fn: React.Dispatch<React.SetStateAction<curriculam>>;
}) {
    return (
        <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div
                    className={`inline-flex size-10 items-center justify-center rounded-full ${data.ispremium ? 'bg-[#D7D7D7]' : 'bg-loginbg'}`}
                >
                    {!data.ispremium ? (
                        <PlayIcon size={24} />
                    ) : (
                        <Lock size={24} />
                    )}
                </div>
                <div className="space-y-1">
                    {' '}
                    <h3 className="text-xl font-medium text-text50">
                        {data.title ??
                            'Understanding Design Thinking & Process'}
                    </h3>
                    <p className="text-sm text-text50">
                        {data.duration ?? '1h 35m'}
                    </p>{' '}
                </div>
            </div>

            <Button
                className={`${data.ispremium ? 'bg-black text-white' : 'bg-loginbg text-text40'} text-lg font-medium hover:bg-primary`}
                disabled={data.ispremium > 0}
                onClick={() => fn(data)}
            >
                {data.ispremium ? 'Premium' : 'Play'}
            </Button>
        </li>
    );
}
