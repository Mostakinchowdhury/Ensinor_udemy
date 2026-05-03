import { useForm } from '@inertiajs/react';
import { BookPlus, Clock, Heart, Star } from 'lucide-react';
import React from 'react';
import type { Course } from '@/types/course';
import { Badge } from '../ui/badge';

export default function Onecourseinlist({
    data,
}: {
    data: Course & { category: { name: string } };
}) {
    const [isfavorited, setisfavorited] = React.useState(false);
    function handlefavo() {
        setisfavorited(!isfavorited);
    }
    const { get } = useForm();

    return (
        <div className="space-y-2.5 rounded-lg bg-[#f3f6f7] p-4">
            <div
                className="h-56 w-full cursor-pointer overflow-hidden rounded-lg"
                onClick={() => get('/courses'.concat('/', data.id.toString()))}
            >
                <img
                    src="/laravel_knights_logo.png"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex items-center justify-between">
                <Badge
                    className={`${data.course_type == 'All level' ? 'bg-green-200 text-green-700' : data.course_type == 'Beginner' ? 'bg-amber-200 text-amber-700' : 'bg-blue-200 text-blue-700'}`}
                >
                    {data.course_type || 'All level'}
                </Badge>
                <Heart
                    size={22}
                    color={isfavorited ? 'red' : 'gray'}
                    className="cursor-pointer"
                    onClick={handlefavo}
                />
            </div>
            <h3 className="text-[20px] font-medium text-text40">
                {data.title ?? 'Professional Graphic Design'}
            </h3>
            <p className="text-lg text-text50">
                {data.summary ??
                    'Proposal indulged no do sociable he throwing settling.'}
            </p>
            <div className="flex items-center justify-between text-lg text-text50">
                <div>
                    <Star className="mx-1.5 inline-block" color="yellow" />{' '}
                    {data.average_rating.toFixed(1)}(
                    {data.total_rating > 1000
                        ? Math.floor(data.total_rating / 1000).toFixed(2)
                        : data.total_rating}
                    )
                </div>
                <div>
                    <Star className="mx-1.5 inline-block" color="yellow" />{' '}
                    {data.total_student > 1000
                        ? Math.floor(data.total_student / 1000).toFixed(2)
                        : data.total_student}{' '}
                    Students
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between border-t-2 border-black pt-6 text-lg text-text50">
                <p>
                    <Clock className="mx-1.5 inline-block" />{' '}
                    {data
                        ? `${Math.floor(Number(data.duration) / 60)
                              .toString()
                              .padStart(
                                  2,
                                  '0',
                              )}h ${String(Number(data.duration) % 60).padStart(2, '0')}m`
                        : '35h 07m'}
                </p>
                <p>
                    <BookPlus className="mx-1.5 inline-block" />
                    {data.lectures
                        ? data.lectures.toString().concat(' lectures')
                        : '48 lectures'}
                </p>
            </div>
        </div>
    );
}
