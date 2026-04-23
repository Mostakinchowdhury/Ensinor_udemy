import { ArrowDownRight, Check } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Link } from '@inertiajs/react';

export default function Thinkingcom() {
    return (
        <section className="mx-auto my-16 flex max-w-6xl items-center justify-between">
            <div className="flex h-[520px] items-center justify-center">
                <img
                    src="/laravel_knights_logo.png"
                    className="h-full object-cover mix-blend-multiply"
                />
            </div>
            <div className="space-y-4">
                <h2 className="text-5xl font-semibold text-[#404040]">
                    Improve Your Skills Learn With Us From Anywhere
                </h2>
                <p className="text-lg text-[#505050]">
                    Rapidiously iterate enabled meta-services vis-a-vis
                    world-class quality vectors. Collaboratively recaptiualize
                    proof relationships via ubiquitous leadership skills.
                </p>
                <ul className="space-y-2.5">
                    <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                        {' '}
                        <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                            <Check color="green" size={16} />
                        </span>{' '}
                        <p>Skilled and experienced coaches.</p>
                    </li>
                    <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                        {' '}
                        <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                            <Check color="green" size={16} />
                        </span>{' '}
                        <p>35K+ review with 5 star rating.</p>
                    </li>
                    <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                        {' '}
                        <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                            <Check color="green" size={16} />
                        </span>{' '}
                        <p>30 Days Free Trial.</p>
                    </li>
                </ul>
                <Link href={'/about'}>
                    <Button
                        className="bg-loginbg px-8! py-4! text-lg font-semibold text-[#262626] transition-colors duration-200 hover:bg-yellow-300"
                        size={'lg'}
                    >
                        Read More{' '}
                        <ArrowDownRight className="inline-block -rotate-90" />{' '}
                    </Button>
                </Link>
            </div>
        </section>
    );
}
