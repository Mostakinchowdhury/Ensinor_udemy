import { Star } from 'lucide-react';
import React from 'react';

export default function Onetbinlist() {
    return (
        <div className="space-y-2.5 rounded-lg bg-[#f3f6f7] p-4">
            <div className="h-56 w-full overflow-hidden rounded-lg">
                <img
                    src="/laravel_knights_logo.png"
                    className="h-full w-full object-cover"
                />
            </div>

            <h3 className="text-[20px] font-medium text-text40">
                UX/UI Design Book
            </h3>
            <p className="text-lg text-text50">
                This book offers practical advice on and improving the visual
                aspects.
            </p>

            <div className="flex items-center justify-between">
                <p className="text-xl font-medium text-text50">$520</p>
                <div>
                    <Star className="mx-1.5 inline-block" color="yellow" /> 4.7
                    (7k)
                </div>
            </div>
        </div>
    );
}
