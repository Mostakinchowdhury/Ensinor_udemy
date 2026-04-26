import { Send, StarIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Onereviewindetail() {
    const [onreplay, setonreplay] = React.useState(false);

    return (
        <div className="mb-4 space-y-3 border-b-2 border-[#606060] pb-4">
            <h3 className="text-lg font-medium text-text40">
                By Shahid Hasan{' '}
                <span className="ml-1 inline-block text-[16px]">
                    on 28 sep 2026
                </span>
            </h3>
            {/* star */}
            <div className="mt-3.5 flex items-center gap-2">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <StarIcon
                            key={i}
                            className="inline-block"
                            color={i + 1 <= 3 ? 'yellow' : 'gray'}
                        />
                    ))}
            </div>
            <p className="text-lg text-[#707070]">
                Explore a diverse selection of courses all in one platform,
                designed to cater to various learning needs and interests,
                making education more accessible and convenient. Explore a
                diverse selection of courses all in one platform, designed to
                cater to various learning needs and interests, making education
            </p>

            {/* replay of review */}
            {onreplay && (
                <div className="ml-6 space-y-1">
                    <h4 className="text-lg font-medium text-[#606060]">
                        Md Shimul{' '}
                        <span className="ml-1.5 inline-block text-[16px] text-[#707070] italic">
                            on 28 sep 2026{' '}
                        </span>
                    </h4>
                    <p className="text-lg text-[#707070]">
                        Thank You for your Feedback..!!
                    </p>
                </div>
            )}
            {/* replay of review */}

            {/* input box */}
            {onreplay ? (
                <div className="ml-6 flex items-center gap-3">
                    <Input
                        placeholder="Add a replay,,,"
                        className="border-2 border-text50 py-1.5 text-[16px] text-[#999999] placeholder:text-[#999999]"
                    />
                    <Button
                        className="flex items-center justify-center bg-loginbg"
                        onClick={() => setonreplay(false)}
                    >
                        <Send />
                    </Button>
                </div>
            ) : (
                // {/* input box */}
                <Button
                    variant={'ghost'}
                    className="p-0! text-lg text-text40"
                    onClick={() => setonreplay(true)}
                >
                    Replay
                </Button>
            )}
        </div>
    );
}
