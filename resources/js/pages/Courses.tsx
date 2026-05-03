import { useForm, usePage } from '@inertiajs/react';
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Listlayout from '@/layouts/Listlayout';
import { Button } from '@/components/ui/button';
import Categorifilter from '@/components/courses/Categorifilter';
import Coursestypefilter from '@/components/courses/Coursestypefilter';
import Pricelevel from '@/components/courses/Pricelevel';
import Skilllevels from '@/components/courses/Skilllevels';
import Language from '@/components/courses/Language';
import Headtitle from '@/components/courses/Headtitle';
import Onecourseinlist from '@/components/home/Onecourseinlist';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from '@/components/ui/pagination';
import Subscribe from '@/components/home/Subscribe';
import { Course } from '@/types/course';

export interface PaginatedResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
}

export default function Courses({
    courses,
    languages,
    categories,
    cl,
}: {
    courses: PaginatedResponse<Course>;
    languages: string[];
    categories: { name: string; total_courses: number }[];
    cl: number;
}) {
    // radio items
    const { url } = usePage();
    const params = new URLSearchParams(url.split('?')[1]);
    const { data, setData, get } = useForm({
        category: params.get('category') ?? 'allcourses',
        bundle_type: params.get('bundle_type') ?? 'Single',
        price_level: params.get('price_level') ?? 'Paid',
        language: params.get('language') ?? 'English',
        search: params.get('search') ?? '',
        sorting: params.get('sorting') ?? 'Latest',
        skilllevel: params.get('skilllevel') ?? 'All levels',
    });

    const [radioitems, setradioitems] = useState<
        { name: string; total_courses: number }[]
    >([{ name: 'allcourses', total_courses: cl }]);
    const coursestypes = ['Single', 'Bundle'];
    const pricelevels = ['All', 'Free', 'Paid'];
    const skilllevels = ['All levels', 'Advanced', 'Intermediate', 'Beginner'];

    function goToPage(url: string | null) {
        if (!url) {
            return;
        }

        const pageUrl = new URL(url);

        get(pageUrl.pathname + pageUrl.search, {
            preserveState: true,
            replace: true,
            data: data,
        });
    }

    useEffect(() => {
        setradioitems((pre) => [...pre, ...categories]);
    }, [categories]);

    const page = usePage();

    console.log('page', page);

    function submit() {
        get('/courses', {
            preserveState: true,
            replace: true,
        });
    }

    return (
        <Listlayout>
            <section className="container mx-auto my-20 grid max-w-6xl grid-cols-4 justify-between gap-8">
                {/* filter part */}
                <div className="space-y-6">
                    {/* category */}

                    <Categorifilter
                        radioItems={radioitems}
                        value={data.category}
                        fn={setData}
                    />
                    {/* Course type */}
                    <Coursestypefilter
                        types={coursestypes}
                        value={data.bundle_type}
                        fn={setData}
                    />
                    <Pricelevel
                        pricelevels={pricelevels}
                        value={data.price_level}
                        fn={setData}
                    />
                    <Skilllevels
                        skilllevels={skilllevels}
                        value={data.skilllevel}
                        fn={setData}
                    />
                    <Language
                        languages={languages}
                        value={data.language}
                        fn={setData}
                    />
                    <Button
                        className="mx-auto w-full! bg-loginbg text-lg font-medium text-text26 transition-colors duration-200 hover:bg-primary"
                        onClick={submit}
                    >
                        Filter Results
                    </Button>
                </div>
                {/* items part */}
                <div className="col-span-3 space-y-6">
                    <Headtitle
                        search={data.search}
                        sorting={data.sorting}
                        submit={submit}
                        fn={setData}
                        from={courses.from}
                        to={courses.to}
                        total={courses.total}
                    />
                    <div className="grid grid-cols-3 gap-3">
                        {courses.data.map((crs) => (
                            <Onecourseinlist data={crs} key={crs.id} />
                        ))}
                    </div>
                    {/* pagination */}
                    <div className="flex w-full items-center justify-center">
                        <Pagination>
                            <PaginationContent>
                                {courses.links.map((i, ind) => {
                                    if (i.label === '&hellip;') {
                                        return (
                                            <PaginationItem
                                                key={ind}
                                                className="rounded-lg border-[1px] border-[#E9E9E9]"
                                            >
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        );
                                    }

                                    return (
                                        <PaginationItem
                                            key={ind}
                                            className="rounded-lg border-[1px] border-[#E9E9E9]"
                                        >
                                            <PaginationLink
                                                href={'#'}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    goToPage(i.url);
                                                }}
                                                isActive={i.active}
                                                className={
                                                    i.active
                                                        ? 'bg-loginbg!'
                                                        : ''
                                                }
                                            >
                                                {i.label ===
                                                '&laquo; Previous' ? (
                                                    <LucideArrowLeft />
                                                ) : i.label ===
                                                  'Next &raquo;' ? (
                                                    <LucideArrowRight />
                                                ) : (
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: i.label,
                                                        }}
                                                    />
                                                )}
                                            </PaginationLink>
                                        </PaginationItem>
                                    );
                                })}
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </section>
            <Subscribe />
        </Listlayout>
    );
}
