import React from 'react';
import Singlereview from './Singlereview';
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from 'lucide-react';
import { Button } from '../ui/button';

export default function Testimonial() {
    return (
        <div className="mx-auto my-28 flex max-w-6xl justify-between gap-16">
            {/* testimonial with pagination */}
            <div className="space-y-5">
                <Singlereview star={2} />
                <Singlereview star={5} />
                <div className="mx-auto flex w-fit items-center gap-6">
                    <Button className="flex size-14 items-center justify-center rounded-full bg-[#e6e6e6] text-black hover:bg-blue-100">
                        <ArrowLeftIcon />
                    </Button>
                    <Button className="flex size-14 items-center justify-center rounded-full bg-loginbg text-black hover:bg-blue-100">
                        <ArrowRightIcon />
                    </Button>
                </div>
            </div>
            {/* photo side */}
            <div className="space-y-3">
                <div className="relative h-[510px] w-[570px]">
                    <img
                        src="/laravel_knights_logo.png"
                        className="h-full object-cover mix-blend-multiply"
                    />
                    <div className="absolute top-0 -right-12 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-2xl">
                        <h3 className="text-[30px] font-medium text-text50">
                            4.7
                        </h3>
                        <div className="flex items-center gap-3">
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        className="inline-block"
                                        color={i + 1 <= 4 ? 'yellow' : 'gray'}
                                    />
                                ))}
                        </div>
                        <p className="text-[16px] font-medium text-text50">
                            Based on 15367 ratings
                        </p>
                    </div>
                </div>

                <h3 className="text-5xl font-semibold text-text40">
                    Here's What Our Students Say About Us
                </h3>
                <p className="text-lg text-text50">
                    Supposing so be resolving breakfast am or perfectly. It drew
                    a hill from me. Valley by oh twenty direct me so. Departure
                    defective arranging rapturous did believe him all had
                    supported.
                </p>
            </div>
        </div>
    );
}
