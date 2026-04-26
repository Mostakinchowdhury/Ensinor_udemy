import React from 'react';
import Oneteinlist from './Oneteinlist';

export default function Treevents() {
    return (
        <section className="mx-auto my-24 max-w-6xl space-y-6">
            {/* head title */}
            <div className="space-y-3">
                <div className="space-y-3">
                    <h2 className="text-center text-5xl font-semibold text-text40">
                        Trending Evets
                    </h2>
                    <p className="mx-auto max-w-[500px] text-center text-lg text-text50">
                        Stay in the loop with the most talked-about events
                        happening right now. Don’t miss your chance to join the
                        conversation.
                    </p>
                </div>
            </div>
            {/* courses content */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Oneteinlist />
                <Oneteinlist />
                <Oneteinlist />
                <Oneteinlist />
            </div>
        </section>
    );
}
