import React from 'react';
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '../ui/avatar';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';

const ClientReview = () => {
    return (
        <div className="flex items-center justify-center py-10">
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
                <div className="my-10 flex min-h-[300px] w-full max-w-[400px] rounded-xl items-center justify-center bg-[#F9F9F9] text-black px-4 py-6">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <div className='px-4'>
                                    <div className="flex gap-2 my-5 justify-center items-center">
                                    <img
                                        src="./contributer.png"
                                        alt=""
                                        className="h-20 w-20 rounded-full object-cover"
                                    />
                                    <div>
                                        <h1 className='text-[18px] text-text40 '>Hafziur Rahman</h1>
                                        <h3 className='mb-2 text-[14px] text-text40'>Full stack web developer</h3>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                                <p className='text-center break-words leading-7 text-sm md:text-base'>
                                    Explore a diverse selection of courses all
                                    in one platform, designed to cater to
                                    various learning needs and interests, making
                                    education more accessible and convenient.
                                    Explore a diverse selection of courses all
                                    in one platform, designed to cater to
                                    various learning needs and interests, making
                                    education
                                </p>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='px-4'>
                                    <div className="flex gap-2 my-5 justify-center items-center">
                                    <img
                                        src="./contributer.png"
                                        alt=""
                                        className="h-20 w-20 rounded-full object-cover"
                                    />
                                    <div>
                                        <h1 className='text-[18px] text-text40 '>Hafziur Rahman</h1>
                                        <h3 className='mb-2 text-[14px] text-text40'>Full stack web developer</h3>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                                <p className='text-center break-words leading-7 text-sm md:text-base'>
                                    Explore a diverse selection of courses all
                                    in one platform, designed to cater to
                                    various learning needs and interests, making
                                    education more accessible and convenient.
                                    Explore a diverse selection of courses all
                                    in one platform, designed to cater to
                                    various learning needs and interests, making
                                    education
                                </p>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='px-4'>
                                    <div className="flex gap-2 my-5 justify-center items-center">
                                    <img
                                        src="./contributer.png"
                                        alt=""
                                        className="h-20 w-20 rounded-full object-cover"
                                    />
                                    <div>
                                        <h1 className='text-[18px] text-text40 '>Hafziur Rahman</h1>
                                        <h3 className='mb-2 text-[14px] text-text40'>Full stack web developer</h3>
                                        <span>⭐⭐⭐⭐⭐</span>
                                    </div>
                                </div>
                               <p className='text-center break-words leading-7 text-sm md:text-base'>
                                    Explore a diverse selection of courses all
                                    in one platform, designed to cater to
                                    various learning needs and interests, making
                                    education more accessible and convenient.
                                    Explore a diverse selection of courses all
                                    in one platform, designed to cater to
                                    various learning needs and interests, making
                                    education
                                </p>
                                </div>
                            </CarouselItem>
                            
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
