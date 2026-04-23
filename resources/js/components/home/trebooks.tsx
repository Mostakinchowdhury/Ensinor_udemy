import React from 'react';
import { Button } from '../ui/button';
import Onetbinlist from './Onetbinlist';

export default function Trenbooksover() {
    return (
        <section className="mx-auto my-24 max-w-6xl space-y-6">
            {/* head title */}
            <div className="flex items-center justify-between">
                <div className="space-y-3">
                    <h2 className="text-5xl font-semibold text-text40">
                        Trending Books
                    </h2>
                    <p className="max-w-[500px] text-lg text-text50">
                        A new addition to the Hunger Games universe, this novel
                        has quickly become a favorite among fans.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                        className="bg-loginbg px-8! py-4! text-lg font-medium text-text26 transition-colors duration-200 hover:bg-yellow-300"
                        size={'lg'}
                    >
                        View all
                    </Button>
                </div>
            </div>
            {/* courses content */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Onetbinlist />
                <Onetbinlist />
                <Onetbinlist />
                <Onetbinlist />
            </div>
        </section>
    );
}
