import React from 'react';
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '../ui/avatar';
import TestimonialCarousel from './TestimonialCarousel';


const ClientReview = () => {
    return (
        <div className="flex items-center justify-center my-16 py-10">
            <div className="w-6xl flex flex-col items-center justify-center">
                <h1 className="text-center text-[48px] font-semibold text-text40">
                    What our clients say
                </h1>
                <p className="my-2 text-center text-[18px] text-text50">
                    Hear from companies that have transformed their training
                    programs with Train Flow Academy.
                </p>
                <div className="flex items-center justify-center gap-1 text-text50">
                    <AvatarGroup className="grayscale">
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/maxleiter.png"
                                alt="@maxleiter"
                            />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/evilrabbit.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/maxleiter.png"
                                alt="@maxleiter"
                            />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                    </AvatarGroup>
                    <div className="flex items-center justify-center text-[32px]">
                        <span className="mx-2 text-[#B2B2B2]">|</span>
                        <span className="font-semibold text-text40">⭐5.0</span>
                        <span className="ml-2 text-[14px] text-text50">
                            Rated by 19 people on google
                        </span>
                    </div>
                </div>
                <div className="">
                    <TestimonialCarousel />
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
