import { StarIcon } from 'lucide-react';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function Singlereview({
    star,
    p,
    pofile,
    name,
    job,
}: {
    star?: number;
    p?: string;
    pofile?: string;
    name?: string;
    job?: string;
}) {
    return (
        <div className="space-y-5 rounded-lg bg-[#F9F9F9] p-3">
            <div className="mx-auto flex w-fit items-center gap-1.5">
                <Avatar size={'lg'}>
                    <AvatarImage
                        src={pofile || 'https://github.com/shadcn.png'}
                        alt="@shadcn"
                        className="grayscale"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <h3 className="text-lg font-medium text-text40">
                        {name || 'Shahid Hasan'}
                    </h3>
                    <p className="text-sm text-text40">
                        {job || 'UI/UX Design'}
                    </p>
                    <div className="mt-3.5 flex items-center gap-2">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    className="inline-block"
                                    color={
                                        i + 1 <= (star || 0) ? 'yellow' : 'gray'
                                    }
                                />
                            ))}
                    </div>
                </div>
            </div>
            <p className="text-lg text-[#707070]">
                {p ??
                    `Explore a diverse selection of courses all in one platform,
                designed to cater to various learning needs and interests,
                making education more accessible and convenient. Explore a
                diverse selection of courses all in one platform, designed to
                cater to various learning needs and interests, making education`}
            </p>
        </div>
    );
}
