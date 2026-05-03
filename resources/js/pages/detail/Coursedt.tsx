import { usePage } from '@inertiajs/react';
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
import React, { useState } from 'react';
import Addreviewpop from '@/components/Coursedetail/Addreviewpop';
import Onereviewindetail from '@/components/Coursedetail/Onereviewindetail';
import Singlecritem from '@/components/Coursedetail/Singlecritem';
import Tags from '@/components/Coursedetail/Tags';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Detaillayout from '@/layouts/Detaillayout';
import type { Course } from '@/types/course';

export type Lesson = {
    id: number;
    course_id: number;
    lesson: string;
    created_at: string;
    updated_at: string;
};
export type User = {
    id: number;
    name: string;
    email: string;
    role: 'User' | string; // চাইলে আরও strict করা যাবে
    email_verified_at: string | null;
    two_factor_confirmed_at: string | null;
    created_at: string;
    updated_at: string;
};
export type ReplayOfReview = {
    id: number;
    review_id: number;
    user_id: number;
    replay_msg: string;
    user: User;
    created_at: string;
    updated_at: string;
};
export type curriculam = {
    id: number;
    course_id: number;
    title: string;
    duration: string;
    ispremium: 0 | 1;
    url: string;
    created_at: string;
    updated_at: string;
};

export type Review = {
    id: number;
    course_id: number;
    user_id: number;
    rating: number;
    review_msg: string;
    created_at: string;
    updated_at: string;
    user: User;
    replay_of_reviews: ReplayOfReview[];
};
export default function Coursedt({
    course,
}: {
    course: Course & {
        lessons: Lesson[];
        curriculums: curriculam[];
        reviews: Review[];
        tags: any;
    };
}) {
    const pag = usePage();

    const [count, setcount] = useState<number>(5);

    const [c, setc] = useState<curriculam>(
        course.curriculums.filter((i) => !i.ispremium)[0],
    );

    const handleseemore = () => {
        if (count >= course.curriculums.length) {
            return;
        } else {
            setcount(count + 5);
        }
    };

    console.log('page info', pag);

    return (
        <Detaillayout>
            <section className="mx-auto my-20 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
                {/* left side */}

                <div className="space-y-6 lg:col-span-2">
                    <h2 className="text-5xl font-semibold text-text40">
                        {course?.title || 'The Complete UX/UI Design Course id'}
                    </h2>
                    <p className="text-lg text-text50">
                        {course?.summary ??
                            ` This course helps you learn everything from basic to
                        advanced topics in UX and UI design. It provides
                        complete knowledge about User Experience (UX) and User
                        Interface (UI) design.`}
                    </p>
                    <iframe
                        className="w-full"
                        height="500"
                        src={c.url as string}
                        title={c.title as string}
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
                            {course?.description ??
                                `This course provides an in-depth journey through the
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
                            user-centered.`}
                        </p>
                        <h3 className="text-2xl font-semibold text-text40">
                            What You'll Learn
                        </h3>
                        <ul className="space-y-2.5">
                            {course.lessons.map((i) => (
                                <li
                                    className="flex items-center gap-1.5 text-lg font-medium text-[#404040]"
                                    key={i.id}
                                >
                                    {' '}
                                    <span className="inline-block rounded-full border-2 border-green-700 p-0.5">
                                        <Check color="green" size={16} />
                                    </span>{' '}
                                    <p>{i.lesson}</p>
                                </li>
                            ))}
                        </ul>
                        {/* end of description */}
                        <p className="text-lg text-text50">
                            {course?.conclusion ??
                                `From understanding user behavior and creating user
                            flows to designing high-fidelity interfaces and
                            interactive prototypes, this course covers the
                            entire UX/UI process using industry-standard tools
                            like Figma and Adobe XD.`}
                        </p>
                    </div>
                    {/* Courses curriculum */}
                    <div className="space-y-4 rounded-lg bg-[#F3F6F7] p-6">
                        <h3 className="my-3 border-b-2 border-text50 pb-4 text-3xl font-semibold text-text40">
                            Course Curriculum
                        </h3>
                        {/* list of curriculum */}
                        <ul className="space-y-5">
                            {course.curriculums
                                .slice(
                                    0,
                                    count > course.curriculums.length
                                        ? course.curriculums.length
                                        : count,
                                )
                                .map((i) => (
                                    <Singlecritem data={i} fn={setc} />
                                ))}
                        </ul>
                        <Button
                            className="mx-auto! block text-lg! text-[#1B263B]"
                            variant={'ghost'}
                            onClick={handleseemore}
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
                                <p className="text-lg text-text40">
                                    {course?.lectures ?? '48'}
                                </p>
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
                                <p className="text-lg text-text40">
                                    {course
                                        ? `${Math.floor(
                                              Number(course.duration) / 60,
                                          )
                                              .toString()
                                              .padStart(
                                                  2,
                                                  '0',
                                              )}h ${String(Number(course.duration) % 60).padStart(2, '0')}m`
                                        : '35h 07m'}
                                </p>
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
                                <p className="text-lg text-text40">
                                    {course?.course_type ?? 'Beginner'}
                                </p>
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
                                <p className="text-lg text-text40">
                                    {course?.language ?? 'English'}
                                </p>
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
                                    {new Date(
                                        course?.deadline as string,
                                    ).toLocaleString('usa', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric',
                                    }) ?? '25 Sep 2025'}
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
                                <p className="text-lg text-text40">
                                    {course?.certificate ? 'Yes' : 'No'}
                                </p>
                            </li>
                        </ul>
                        {/* price */}
                        <div className="flex w-full items-center justify-between gap-4">
                            <p className="text-lg font-medium text-text40">
                                {' '}
                                Price
                            </p>
                            <p className="text-2xl font-semibold text-text40">
                                {course?.price
                                    ? '$'.concat(course.price.toString())
                                    : '$120'}
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
                    <Tags alltags={course.tags} />
                </div>
            </section>
            {/* review section */}
            <div className="mx-auto my-20 max-w-6xl space-y-5 rounded-lg bg-[#F3F6F7] p-8">
                <div className="mb-10 flex items-start justify-between gap-5">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-semibold text-text40">
                            Reviews (
                            {course.reviews.length > 1000
                                ? (course.reviews.length / 1000)
                                      .toFixed(2)
                                      .concat('K')
                                : course.reviews.length}
                            )
                        </h3>
                        <p className="text-lg text-text50">
                            Get specific details about this Course from student
                            who own it.
                        </p>
                    </div>
                    <Addreviewpop />
                </div>
                {course.reviews.map((i) => (
                    <Onereviewindetail key={i.id} data={i} />
                ))}
            </div>
        </Detaillayout>
    );
}
