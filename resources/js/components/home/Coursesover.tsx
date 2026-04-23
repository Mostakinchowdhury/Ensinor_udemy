import React from 'react';
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
                    <Select>
                        <SelectTrigger className="w-full max-w-48 rounded-lg bg-loginbg px-4 py-2 text-[#303030]">
                            <SelectValue
                                placeholder="Category"
                                className="text-lg font-medium text-[#303030]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button
                        className="border-2 border-black bg-white px-8! py-4! text-lg font-medium text-text26 transition-colors duration-200 hover:bg-yellow-300"
                        size={'lg'}
                    >
                        View all
                    </Button>
                </div>
            </div>
            {/* courses content */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Onecourseinlist level="All level" />
                <Onecourseinlist level="Beginner" />
                <Onecourseinlist level="Intermediate" />
                <Onecourseinlist level="Advanced" />
            </div>
        </section>
    );
}
