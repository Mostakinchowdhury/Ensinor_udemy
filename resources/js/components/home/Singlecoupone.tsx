import React from 'react';
import { Button } from '../ui/button';

export default function Singlecoupone({ h3, p }: { h3?: string; p?: string }) {
    return (
        <div className="relative flex gap-0 overflow-hidden rounded-l-4xl rounded-r-2xl bg-white py-9 pl-24">
            {/* absolut element */}
            <div className="absolute top-1/2 left-0 z-50 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F3F6F7]"></div>
            <div className="absolute top-0 bottom-0 left-0 z-10 flex w-20 items-center justify-center bg-loginbg">
                <h2 className="-rotate-90 text-center text-2xl font-bold text-white">
                    DISCOUNT
                </h2>
            </div>
            <div className="flex flex-col justify-between gap-4 px-3">
                <div className="space-y-2">
                    {' '}
                    <h3 className="text-xl font-bold text-[#232027]">
                        {h3 ?? 'Course Coupon & promo'}
                    </h3>
                    <p className="text-[16px] font-medium text-[#393540]">
                        {p ?? 'Save money on all transactions.'}
                    </p>
                </div>
                <Button
                    className="w-full rounded-3xl! border-2 border-loginbg bg-white text-sm font-bold text-loginbg hover:bg-slate-100"
                    size={'lg'}
                >
                    View all
                </Button>
            </div>
        </div>
    );
}
