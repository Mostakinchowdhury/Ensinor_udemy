import { StarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Textarea } from '../ui/textarea';
import { useForm, usePage } from '@inertiajs/react';

export default function Addreviewpop() {
    const page = usePage();

    const { data, setData, post } = useForm({
        review_msg: '',
        rating: 0,
        course_id: page.url.split('/').pop(),
    });

    const handleclick = (e: any) => {
        e.preventDefault();
        post('/review');
        setData('rating', 0);
        setData('review_msg', '');
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className="block! border-2 bg-loginbg text-lg font-medium text-text40 transition-colors duration-200 hover:bg-primary"
                    size={'lg'}
                >
                    Write a Review
                </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-2xl!">
                <div className="space-y-3.5 rounded-xl bg-white p-4">
                    {/* head bar  */}
                    <div className="flex justify-between gap-6 space-y-2 bg-[#F3F6F7] p-3">
                        <div className="flex gap-2">
                            <img
                                src="/mypic.png"
                                alt="mypic"
                                className="h-24 w-[149px] object-cover"
                            />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-text40">
                                    UX/UI Design
                                </h3>
                                <p className="text-xl text-[#303030]">
                                    Instructor :{' '}
                                    <span className="text-[#606060]">
                                        Shahid Hasan
                                    </span>
                                </p>
                                <p className="text-[16px] text-text50">
                                    Published date: Jan 17 2025
                                </p>
                            </div>
                        </div>
                        <h4 className="text-2xl font-semibold text-text40">
                            $120.00
                        </h4>
                    </div>
                    {/* rating */}
                    <div className="space-y-2">
                        <h3 className="text-[16px] text-[#2d2d2d]">
                            Rate this Course
                        </h3>
                        <div className="mt-3.5 flex items-center gap-2">
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        className="inline-block cursor-pointer"
                                        color={
                                            i + 1 <= (data.rating || 0)
                                                ? 'yellow'
                                                : 'gray'
                                        }
                                        onClick={() => setData('rating', i + 1)}
                                    />
                                ))}
                        </div>
                    </div>
                    {/* review */}
                    <div className="space-y-3">
                        <h3 className="text-[16px] text-[#2d2d2d]">
                            Write a Feedback
                        </h3>
                        <Textarea
                            placeholder="Write here....."
                            className="h-40 resize-none border-2 border-[#d7d7d7] bg-[#fbfbfb] text-[16px] text-[#606060] placeholder:text-[16px] placeholder:text-[#606060]"
                            value={data.review_msg}
                            onChange={(i) =>
                                setData('review_msg', i.target.value)
                            }
                        />
                        <div className="flex items-center gap-3">
                            <Button
                                className="grow bg-[#FFDE5926] text-lg font-semibold text-loginbg hover:bg-amber-100"
                                onClick={() => {
                                    setData('rating', 0);
                                    setData('review_msg', '');
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="grow bg-loginbg text-lg font-semibold text-text40"
                                onClick={handleclick}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
