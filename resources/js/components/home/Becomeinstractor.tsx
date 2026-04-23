import { Check } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

export default function Becomeinstractor() {
    return (
        <div className="mx-auto my-20 flex max-w-6xl items-center justify-baseline rounded-xl bg-[#fff5cc] p-4">
            <div className="space-y-4">
                <h3 className="text-[40px] font-semibold text-text40">
                    Become an Instructor!
                </h3>
                <p className="text-[16px] text-text50">
                    Speedily say has suitable disposal add boy. On forth doubt
                    miles of child. Exercise joy man children rejoiced. Yet
                    uncommonly his ten who diminution astonished.
                </p>
                <Button
                    variant={'outline'}
                    className="border-2 border-black bg-transparent text-lg font-medium text-black hover:bg-slate-100"
                    size={'lg'}
                >
                    Start Teaching
                </Button>
            </div>
            {/* right side  */}
            <div>
                <h3 className="text-[32px] font-semibold text-text40">
                    Your teaching & earning steps
                </h3>
                <ul className="mt-4 grid grid-cols-2 gap-4 text-[16px] text-[#1D2026]">
                    <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                        {' '}
                        <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                            <Check color="green" size={16} />
                        </span>{' '}
                        <p>Apply to become instructor</p>
                    </li>
                    <li className="flex items-center gap-1.5">
                        {' '}
                        <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                            <Check color="green" size={16} />
                        </span>{' '}
                        <p>Build & edit your profile</p>
                    </li>
                    <li className="flex items-center gap-1.5">
                        {' '}
                        <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                            <Check color="green" size={16} />
                        </span>{' '}
                        <p>Create your new course</p>
                    </li>
                    <li className="flex items-center gap-1.5">
                        {' '}
                        <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                            <Check color="green" size={16} />
                        </span>{' '}
                        <p>Start teaching & earning</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
