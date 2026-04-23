import { BookPlus, Clock, Heart, Star } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';

export default function Onecourseinlist({ level }: { level?: string }) {
    const [isfavorited, setisfavorited] = React.useState(false);
    function handlefavo() {
        setisfavorited(!isfavorited);
    }

    return (
        <div className="space-y-2.5 rounded-lg bg-[#f3f6f7] p-4">
            <div className="h-56 w-full overflow-hidden rounded-lg">
                <img
                    src="/laravel_knights_logo.png"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex items-center justify-between">
                <Badge
                    className={`${level == 'All level' ? 'bg-green-200 text-green-700' : level == 'Beginner' ? 'bg-amber-200 text-amber-700' : 'bg-blue-200 text-blue-700'}`}
                >
                    {level || 'All level'}
                </Badge>
                <Heart
                    size={22}
                    color={isfavorited ? 'red' : 'gray'}
                    className="cursor-pointer"
                    onClick={handlefavo}
                />
            </div>
            <h3 className="text-[20px] font-medium text-text40">
                Professional Graphic Design
            </h3>
            <p className="text-lg text-text50">
                Proposal indulged no do sociable he throwing settling.
            </p>
            <div className="flex items-center justify-between text-lg text-text50">
                <div>
                    <Star className="mx-1.5 inline-block" color="yellow" /> 4.7
                    (7k)
                </div>
                <div>
                    <Star className="mx-1.5 inline-block" color="yellow" /> 13k
                    Students
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between border-t-2 border-black pt-6 text-lg text-text50">
                <p>
                    <Clock className="mx-1.5 inline-block" /> 35h 07m
                </p>
                <p>
                    <BookPlus className="mx-1.5 inline-block" />
                    48 lectures
                </p>
            </div>
        </div>
    );
}
