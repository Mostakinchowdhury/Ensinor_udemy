import { Send, StarIcon } from 'lucide-react';
import React from 'react';
import type { Review } from '@/pages/detail/Coursedt';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useForm } from '@inertiajs/react';

export default function Onereviewindetail({ data }: { data: Review }) {
    const [onreplay, setonreplay] = React.useState(false);

    const {
        data: fdt,
        setData,
        post,
    } = useForm({
        replay_msg: '',
        review_id: data.id,
        course_id: data.course_id,
    });

    return (
        <div className="mb-4 space-y-3 border-b-2 border-[#606060] pb-4">
            <h3 className="text-lg font-medium text-text40">
                {data.user.name}
                <span className="ml-1 inline-block text-[16px]">
                    on{' '}
                    {new Date(data.created_at).toLocaleString('en-uk', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                    })}
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
                            color={i + 1 <= data.rating ? 'yellow' : 'gray'}
                        />
                    ))}
            </div>
            <p className="text-lg text-[#707070]">
                {data.review_msg ??
                    `Explore a diverse selection of courses all in one platform,
                designed to cater to various learning needs and interests,
                making education more accessible and convenient. Explore a
                diverse selection of courses all in one platform, designed to
                cater to various learning needs and interests, making education`}
            </p>

            {/* replay of review */}
            {onreplay &&
                data.replay_of_reviews.map((i) => (
                    <div className="ml-6 space-y-1" key={i.id}>
                        <h4 className="text-lg font-medium text-[#606060]">
                            {i.user.name}
                            <span className="ml-1.5 inline-block text-[16px] text-[#707070] italic">
                                {new Date(i.created_at).toLocaleString(
                                    'en-uk',
                                    {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric',
                                    },
                                )}
                            </span>
                        </h4>
                        <p className="text-lg text-[#707070]">{i.replay_msg}</p>
                    </div>
                ))}
            {/* replay of review */}

            {/* input box */}
            {onreplay ? (
                <div className="ml-6 flex items-center gap-3">
                    <Input
                        placeholder="Add a replay,,,"
                        className="border-2 border-text50 py-1.5 text-[16px] text-[#999999] placeholder:text-[#999999]"
                        value={fdt.replay_msg}
                        onChange={(e) => setData('replay_msg', e.target.value)}
                    />
                    <Button
                        className="flex items-center justify-center bg-loginbg"
                        onClick={() => {
                            setonreplay(false);
                            post('/replay_of_review');
                            setData('replay_msg', '');
                        }}
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
