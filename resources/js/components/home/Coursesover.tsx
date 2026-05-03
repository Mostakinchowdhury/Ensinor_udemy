import { Link, useForm, usePage } from '@inertiajs/react';
import React from 'react';
import type { Course } from '@/types/course';
import { Button } from '../ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import Onecourseinlist from './Onecourseinlist';

export default function Coursesover() {
    const {
        categories,
        courses,
    }: {
        categories: string[];
        courses: Course & { category: { name: string } }[];
    } = usePage().props;
    const params = new URLSearchParams(usePage().url.split('?')[1]);
    const selectcategories = ['all', ...categories];
    const [selectedcategory, setselectedcategory] = React.useState(
        params.get('category') || 'all',
    );
    const { get } = useForm();

    const handlecategorychange = (value: string) => {
        setselectedcategory(value);
        get(`/?category=${value}`);
    };

    console.log('page', usePage());

    return (
        <section className="mx-auto my-16 max-w-6xl space-y-6">
            {/* head title */}
            <div className="flex items-end justify-between">
                <div className="space-y-3">
                    <h2 className="text-5xl font-semibold text-text40">
                        Most Popular Courses
                    </h2>
                    <p className="text-lg text-text50">
                        Join Thousands of Successful Learners
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Select
                        value={selectedcategory}
                        onValueChange={handlecategorychange}
                    >
                        <SelectTrigger className="w-full max-w-48 rounded-lg bg-loginbg px-4 py-2 text-[#303030]">
                            <SelectValue
                                placeholder="Category"
                                className="text-lg font-medium text-[#303030]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                {selectcategories.map((ct) => (
                                    <SelectItem value={ct}>
                                        {ct[0]
                                            .toUpperCase()
                                            .concat(ct.slice(1))}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
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
                {courses.map((course) => (
                    <Onecourseinlist key={course.id} data={course} />
                ))}
            </div>
        </section>
    );
}
