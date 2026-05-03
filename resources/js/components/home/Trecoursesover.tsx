import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import type { Course } from '@/types/course';
import { Button } from '../ui/button';
import Onetcinlist from './Onetcinlist';

export default function TrenCoursesover() {
    const { top_courses }: { top_courses: Course[] } = usePage().props;

    return (
        <section className="mx-auto my-24 max-w-6xl space-y-6">
            {/* head title */}
            <div className="flex items-center justify-between">
                <div className="space-y-3">
                    <h2 className="text-5xl font-semibold text-text40">
                        Our Trending Courses
                    </h2>
                    <p className="text-lg text-text50">
                        Check out most 🔥 courses in the market
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link href={'/courses'}>
                        <Button
                            className="border-2 border-black bg-white px-8! py-4! text-lg font-medium text-text26 transition-colors duration-200 hover:bg-yellow-300"
                            size={'lg'}
                        >
                            View all
                        </Button>
                    </Link>
                </div>
            </div>
            {/* courses content */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {top_courses.map((course) => (
                    <Onetcinlist data={course} />
                ))}
            </div>
        </section>
    );
}
