import { Link } from '@inertiajs/react';
import { AlarmClockCheckIcon, ArrowUpRight, Clock, Star } from 'lucide-react';
import React from 'react';

export default function Oneteinlist() {
    return (
        <div className="space-y-2.5 rounded-lg bg-[#f3f6f7] p-4">
            <div className="h-56 w-full overflow-hidden rounded-lg">
                <img
                    src="/laravel_knights_logo.png"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex items-center justify-between">
                <p className="text-[16px] font-medium text-text50">
                    <AlarmClockCheckIcon
                        className="mx-1.5 inline-block"
                        color="yellow"
                    />{' '}
                    7 May 2025
                </p>
                <p className="text-[16px] font-medium text-text50">
                    <Clock className="mx-1.5 inline-block" color="yellow" />7
                    May 2025
                </p>
            </div>

            <h3 className="text-[20px] font-medium text-text40">
                Admitted Student events
            </h3>
            <p className="text-[16px] font-normal text-text50">
                This event is designed to help you explore academic opportunity,
                connect with current students and faculty..
            </p>
            <Link href={'/event/3'} className="text-lg">
                Learn more <ArrowUpRight className="mx-1.5 inline-block" />
            </Link>
        </div>
    );
}
