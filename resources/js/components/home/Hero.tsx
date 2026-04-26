import { MapIcon, SearchIcon } from 'lucide-react';
import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from '../ui/avatar';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Hero() {
    return (
        <section className="relative w-full bg-headbg p-16">
            <div className="container mx-auto flex max-w-6xl items-center justify-between gap-4">
                {/* left side  */}
                <div className="max-w-[650px] space-y-5">
                    <h2 className="hometitle text-white">
                        Learn a New Skill Every day, Anytime, & your Suitable
                        Schedule.
                    </h2>
                    <p className="navbtn text-[#EFEFEF]">
                        It’s important to note that online education also comes
                        with it’s own set of challenges, such as potential
                        feeling of isolation, the need for strong
                        self-discipline{' '}
                    </p>
                    {/* search group */}

                    <div className="flex h-14 max-w-[500px] items-center gap-2.5 overflow-hidden rounded-3xl bg-white pl-5">
                        <SearchIcon color="black" size={24} />
                        <Input
                            placeholder="Search arts or artists"
                            className="footnavbtn placeholder:poppins border-0 text-[#909090] outline-0 placeholder:text-[16px] placeholder:text-[#909090] focus-within:ring-0 focus-within:outline-0 focus:ring-0 focus:outline-0 focus-visible:ring-0 focus-visible:outline-0"
                        />
                        <Button className="poppins h-full cursor-pointer rounded-none bg-loginbg px-6 py-2 text-lg font-semibold text-black hover:bg-loginbg/90 focus:bg-loginbg/90 active:bg-loginbg/90">
                            Search
                        </Button>
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#f0f0f0]">
                        Our Enroll Students
                    </h3>
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
                        <AvatarGroupCount>+50K</AvatarGroupCount>
                    </AvatarGroup>
                </div>
                {/* right side  */}
                <div className="flex h-[600px] items-center justify-center">
                    <img
                        src="/laravel_knights_logo.png"
                        className="h-full object-cover mix-blend-multiply"
                    />
                </div>
            </div>

            {/* absolut panel */}
            <div className="absolute bottom-0 left-0 w-full translate-y-1/2">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
                    {/* 1st overview */}
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                        <MapIcon size={70} />
                        <div className="space-y-2.5">
                            <h3 className="poppins text-4xl font-semibold text-[#505050]">
                                175+
                            </h3>
                            <p className="poppins text-lg font-semibold text-[#303030]">
                                Expert Tutors
                            </p>
                        </div>
                    </div>
                    {/* 2nd overview  */}
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                        <MapIcon size={70} />
                        <div className="space-y-2.5">
                            <h3 className="poppins text-4xl font-semibold text-[#505050]">
                                8K+
                            </h3>
                            <p className="poppins text-lg font-semibold text-[#303030]">
                                Online Courses
                            </p>
                        </div>
                    </div>
                    {/* 3rd overview */}
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                        <MapIcon size={70} />
                        <div className="space-y-2.5">
                            <h3 className="poppins text-4xl font-semibold text-[#505050]">
                                9.5K+
                            </h3>
                            <p className="poppins text-lg font-semibold text-[#303030]">
                                Success Students
                            </p>
                        </div>
                    </div>
                    {/* 4th overview */}
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                        <MapIcon size={70} />
                        <div className="space-y-2.5">
                            <h3 className="poppins text-4xl font-semibold text-[#505050]">
                                60K+
                            </h3>
                            <p className="poppins text-lg font-semibold text-[#303030]">
                                Active Students
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
