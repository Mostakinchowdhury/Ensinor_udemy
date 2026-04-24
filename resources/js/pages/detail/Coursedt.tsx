import {
    ArrowDown,
    Book,
    Calendar,
    CalendarCheck,
    Check,
    Lightbulb,
    MapPinnedIcon,
    StarIcon,
    Timer,
} from 'lucide-react';
import React from 'react';
import Singlecritem from '@/components/Coursedetail/Singlecritem';
import { Button } from '@/components/ui/button';
import Detaillayout from '@/layouts/Detaillayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Tags from '@/components/Coursedetail/Tags';
import Onereviewindetail from '@/components/Coursedetail/Onereviewindetail';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import Addreviewpop from '@/components/Coursedetail/Addreviewpop';

export default function Coursedt({ id }: { id: string }) {
    const tags = [
        'blog',
        'business',
        'theme',
        'data science',
        'web development',
        'tips',
        'machinelearning',
    ];

    return (
        <Detaillayout>
            <section className="mx-auto my-20 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
                {/* left side */}

                <div className="space-y-6 lg:col-span-2">
                    <h2 className="text-5xl font-semibold text-text40">
                        The Complete UX/UI Design Course id {id}
                    </h2>
                    <p className="text-lg text-text50">
                        This course helps you learn everything from basic to
                        advanced topics in UX and UI design. It provides
                        complete knowledge about User Experience (UX) and User
                        Interface (UI) design.
                    </p>
                    <iframe
                        className="w-full"
                        height="500"
                        src="https://www.youtube.com/embed/HjH2Thk4ZVo?si=U07DbB2VuUwOivB2"
                        title="YouTube video player"
                        frameborder={'0' as string}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                    {/* course description and lessons */}
                    <div className="space-y-4 rounded-lg bg-[#F3F6F7] p-3.5">
                        <h3 className="text-3xl font-semibold text-text40">
                            Course description
                        </h3>
                        <p className="text-lg text-text50">
                            This course provides an in-depth journey through the
                            principles and practices of UX (User Experience) and
                            UI (User Interface) design. Whether you're a
                            complete beginner or a creative professional looking
                            to transition into product design, this course will
                            guide you through each step of the design
                            process—from research and ideation to prototyping
                            and usability testing. By the end of this course,
                            learners will be able to conceptualize, design, and
                            prototype digital products that are not only
                            visually appealing but also intuitive and
                            user-centered.
                        </p>
                        <h3 className="text-2xl font-semibold text-text40">
                            What You'll Learn
                        </h3>
                        <ul className="space-y-2.5">
                            <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                                {' '}
                                <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                                    <Check color="green" size={16} />
                                </span>{' '}
                                <p>
                                    Principles of User Experience (UX) and User
                                    Interface (UI) Design
                                </p>
                            </li>
                            <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                                {' '}
                                <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                                    <Check color="green" size={16} />
                                </span>{' '}
                                <p>
                                    Conducting user research and building user
                                    personas
                                </p>
                            </li>
                            <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                                {' '}
                                <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                                    <Check color="green" size={16} />
                                </span>{' '}
                                <p>
                                    Creating user journeys, wireframes, and
                                    sitemaps
                                </p>
                            </li>
                            <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                                {' '}
                                <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                                    <Check color="green" size={16} />
                                </span>{' '}
                                <p>
                                    Designing high-fidelity interfaces with
                                    Figma or Adobe XD
                                </p>
                            </li>
                            <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                                {' '}
                                <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                                    <Check color="green" size={16} />
                                </span>{' '}
                                <p>
                                    Prototyping and testing designs with real
                                    users
                                </p>
                            </li>
                            <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                                {' '}
                                <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                                    <Check color="green" size={16} />
                                </span>{' '}
                                <p>
                                    Responsive and accessible design principles
                                </p>
                            </li>
                            <li className="flex items-center gap-1.5 text-lg font-medium text-[#404040]">
                                {' '}
                                <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                                    <Check color="green" size={16} />
                                </span>{' '}
                                <p>
                                    Handoff to developers and working in design
                                    teams
                                </p>
                            </li>
                        </ul>
                        {/* end of description */}
                        <p className="text-lg text-text50">
                            From understanding user behavior and creating user
                            flows to designing high-fidelity interfaces and
                            interactive prototypes, this course covers the
                            entire UX/UI process using industry-standard tools
                            like Figma and Adobe XD.
                        </p>
                    </div>
                    {/* Courses curriculum */}
                    <div className="space-y-4 rounded-lg bg-[#F3F6F7] p-6">
                        <h3 className="my-3 border-b-2 border-text50 pb-4 text-3xl font-semibold text-text40">
                            Course Curriculum
                        </h3>
                        {/* list of curriculum */}
                        <ul className="space-y-5">
                            <Singlecritem ispremium={false} />
                            <Singlecritem ispremium={false} />
                            <Singlecritem ispremium={true} />
                            <Singlecritem ispremium={false} />
                            <Singlecritem ispremium={true} />
                            <Singlecritem ispremium={true} />
                        </ul>
                        <Button
                            className="mx-auto! block text-lg! text-[#1B263B]"
                            variant={'ghost'}
                        >
                            See more video{' '}
                            <ArrowDown className="ml-1.5 inline-block" />
                        </Button>
                    </div>
                </div>
                {/* right side */}
                <div className="space-y-6">
                    <div className="space-y-5 rounded-lg bg-[#F3F6F7] p-3">
                        <div className="flex items-center justify-center gap-2.5">
                            <Avatar className="size-24">
                                <AvatarImage
                                    src={'https://github.com/shadcn.png'}
                                    alt="@shadcn"
                                    className="grayscale"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h3 className="text-3xl font-medium text-text40">
                                    Shahid Hasan
                                </h3>
                                <p className="text-lg font-medium text-text40">
                                    {'UI/UX Design'}
                                </p>
                                <h4>
                                    <StarIcon
                                        size={24}
                                        className="mr-2 inline-block"
                                    />{' '}
                                    4.9 (1.5k Rating)
                                </h4>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-text40">
                            This course includes
                        </h3>
                        {/* list */}
                        <ul className="-mt-2 space-y-4">
                            <li className="flex w-full items-center justify-between gap-4">
                                <p className="text-lg text-text40">
                                    {' '}
                                    <Book
                                        size={24}
                                        className="mr-1 inline-block"
                                    />
                                    Lectures
                                </p>
                                <p className="text-lg text-text40">48</p>
                            </li>
                            <li className="flex w-full items-center justify-between gap-4">
                                <p className="text-lg text-text40">
                                    {' '}
                                    <Timer
                                        size={24}
                                        className="mr-1 inline-block"
                                    />
                                    Duration
                                </p>
                                <p className="text-lg text-text40">35h 07m</p>
                            </li>
                            <li className="flex w-full items-center justify-between gap-4">
                                <p className="text-lg text-text40">
                                    {' '}
                                    <Lightbulb
                                        size={24}
                                        className="mr-1 inline-block"
                                    />
                                    Beginner
                                </p>
                                <p className="text-lg text-text40">Beginner</p>
                            </li>
                            <li className="flex w-full items-center justify-between gap-4">
                                <p className="text-lg text-text40">
                                    {' '}
                                    <MapPinnedIcon
                                        size={24}
                                        className="mr-1 inline-block"
                                    />
                                    Language
                                </p>
                                <p className="text-lg text-text40">English</p>
                            </li>
                            <li className="flex w-full items-center justify-between gap-4">
                                <p className="text-lg text-text40">
                                    {' '}
                                    <Calendar
                                        size={24}
                                        className="mr-1 inline-block"
                                    />
                                    Deadline
                                </p>
                                <p className="text-lg text-text40">
                                    25 Sep 2025
                                </p>
                            </li>
                            <li className="flex w-full items-center justify-between gap-4">
                                <p className="text-lg text-text40">
                                    {' '}
                                    <CalendarCheck
                                        size={24}
                                        className="mr-1 inline-block"
                                    />
                                    Certificate
                                </p>
                                <p className="text-lg text-text40">Yes</p>
                            </li>
                        </ul>
                        {/* price */}
                        <div className="flex w-full items-center justify-between gap-4">
                            <p className="text-lg font-medium text-text40">
                                {' '}
                                Price
                            </p>
                            <p className="text-2xl font-semibold text-text40">
                                $120
                            </p>
                        </div>
                        <div className="flex w-full items-center gap-3">
                            <Button
                                variant={'outline'}
                                className="block! grow! border-2 border-loginbg text-lg font-medium text-text40"
                                size={'lg'}
                            >
                                Add to Card
                            </Button>
                            <Button
                                variant={'outline'}
                                className="block! grow! border-2 bg-loginbg text-lg font-medium text-text40 transition-colors duration-200 hover:bg-primary"
                                size={'lg'}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                    <Tags alltags={tags} />
                </div>
            </section>
            {/* review section */}
            <div className="mx-auto my-20 max-w-6xl space-y-5 rounded-lg bg-[#F3F6F7] p-8">
                <div className="mb-10 flex items-start justify-between gap-5">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-semibold text-text40">
                            Reviews (1.5k)
                        </h3>
                        <p className="text-lg text-text50">
                            Get specific details about this Course from student
                            who own it.
                        </p>
                    </div>
                    <Addreviewpop />
                </div>
                <Onereviewindetail />
                <Onereviewindetail />
                <Onereviewindetail />
                <Onereviewindetail />
                <Onereviewindetail />
            </div>
        </Detaillayout>
    );
}
