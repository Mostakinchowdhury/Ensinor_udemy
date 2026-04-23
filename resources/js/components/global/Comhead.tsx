import { usePage } from '@inertiajs/react';
import React from 'react';

export default function Comhead() {
    const prp = usePage();
    console.log('props in here ', prp);
    const component = prp.component;

    return (
        <div className="flex h-[300px] w-full items-center justify-center bg-headbg">
            <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="headtitle text-white">Course Coupon Code</h2>
                <p className="space-x-2">
                    <span className="text-xl font-medium text-headofftxt">
                        Home
                    </span>
                    <span className="text-xl font-medium text-headofftxt">
                        {'>'}
                    </span>
                    <span className="text-xl font-medium text-white">
                        {(component ?? 'Not Found') as string}
                    </span>
                </p>
            </div>
        </div>
    );
}
