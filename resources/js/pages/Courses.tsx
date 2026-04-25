import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';
import React from 'react';
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
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import Subscribe from '@/components/home/Subscribe';

export default function Courses() {
    // radio items

    const radioItems: { value: string; label: string; amount: number }[] = [
        { value: 'allcourses', label: 'All Courses', amount: 2520 },
        { value: 'development', label: 'Development', amount: 379 },
        { value: 'design', label: 'Design', amount: 720 },
        { value: 'marketing', label: 'Marketing', amount: 455 },
        { value: 'finance', label: 'Finance', amount: 379 },
        { value: 'illustrations', label: 'Illustrations', amount: 657 },
        { value: 'writing', label: 'Writing', amount: 850 },
    ];
    const coursestypes = ['Single', 'Bundle'];
    const pricelevels = ['All', 'Free', 'Paid'];
    const skilllevels = ['All levels', 'Advanced', 'Intermediate', 'Beginner'];
    const languages = [
        'English',
        'Frances',
        'Hindi',
        'Russian',
        'Spanish',
        'Bengali',
        'Portuguese',
    ];

    return (
        <Listlayout>
            <section className="container mx-auto my-20 grid max-w-6xl grid-cols-4 justify-between gap-8">
                {/* filter part */}
                <div className="space-y-6">
                    {/* category */}
                    <Categorifilter radioItems={radioItems} />
                    {/* Course type */}
                    <Coursestypefilter types={coursestypes} />
                    <Pricelevel pricelevels={pricelevels} />
                    <Skilllevels skilllevels={skilllevels} />
                    <Language languages={languages} />
                    <Button className="mx-auto w-full! bg-loginbg text-lg font-medium text-text26 transition-colors duration-200 hover:bg-primary">
                        Filter Results
                    </Button>
                </div>
                {/* items part */}
                <div className="col-span-3 space-y-6">
                    <Headtitle />
                    <div className="grid grid-cols-3 gap-3">
                        <Onecourseinlist />
                        <Onecourseinlist />
                        <Onecourseinlist />
                        <Onecourseinlist />
                        <Onecourseinlist />
                        <Onecourseinlist />
                        <Onecourseinlist />
                        <Onecourseinlist />
                    </div>
                    {/* pagination */}
                    <div className="flex w-full items-center justify-center">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        <LucideArrowLeft />
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem className="rounded-lg border-[1px] border-[#E9E9E9]">
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem className="rounded-lg border-[#E9E9E9]">
                                    <PaginationLink
                                        href="#"
                                        isActive
                                        className="bg-loginbg!"
                                    >
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem className="rounded-lg border-[1px] border-[#E9E9E9]">
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem className="rounded-lg border-[1px] border-[#E9E9E9]">
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem className="rounded-lg border-[1px] border-[#E9E9E9] bg-loginbg!">
                                    <PaginationLink href="#" isActive>
                                        <LucideArrowRight />
                                    </PaginationLink>
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </section>
            <Subscribe />
        </Listlayout>
    );
}
