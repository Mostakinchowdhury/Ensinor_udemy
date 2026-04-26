import React from 'react';
import Singlecoupone from './Singlecoupone';

export default function Couponeover() {
    return (
        <div className="mx-auto max-w-6xl bg-[#F3F6F7] p-6">
            <div className="my-12 space-y-4">
                {' '}
                <h2 className="text-center text-5xl font-semibold text-text40">
                    Coupon & Promo Code
                </h2>
                <p className="mx-auto max-w-[500px] text-center text-lg text-text50">
                    Stay in the loop with the most talked-about events happening
                    right now. Don’t miss your chance to join the conversation.
                </p>
            </div>

            {/* coupon cards */}
            <div className="flex items-center justify-between gap-3">
                <Singlecoupone />
                <Singlecoupone />
                <Singlecoupone />
            </div>
        </div>
    );
}
