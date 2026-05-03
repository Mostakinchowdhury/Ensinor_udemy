import { ArrowDown } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

export default function Categorifilter({
    radioItems,
    value,
    fn,
}: {
    radioItems: { name: string; total_courses: number }[];
    value: string;
    fn: (name: string, value: string) => void;
}) {
    const [count, setcount] = useState<number>(5);

    const handleseemore = () => {
        if (count >= radioItems.length) {
            return;
        } else {
            setcount(count + 5);
        }
    };

    return (
        <div className="rounded-lg bg-[#F3F6F7] p-3.5">
            <h3 className="my-3 border-b-2 border-text50 pb-4 text-2xl font-medium text-text26">
                Category
            </h3>
            <div className="mt-4">
                <RadioGroup
                    defaultValue="allcourses"
                    value={value}
                    onValueChange={(v) => fn('category', v)}
                >
                    {radioItems
                        .slice(
                            0,
                            count > radioItems.length
                                ? radioItems.length
                                : count,
                        )
                        .map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between gap-3"
                            >
                                <div className="flex items-center gap-3">
                                    <RadioGroupItem
                                        value={item.name}
                                        id={`r${item.name}`}
                                    />
                                    <Label
                                        htmlFor={`r${item.name}`}
                                        className="text-lg text-text26"
                                    >
                                        {item.name[0]
                                            .toUpperCase()
                                            .concat(item.name.slice(1))}
                                    </Label>
                                </div>

                                <p className="text-lg text-text26">
                                    {'('.concat(
                                        item.total_courses.toString(),
                                        ')',
                                    )}
                                </p>
                            </div>
                        ))}
                </RadioGroup>
            </div>
            <Button
                className="my-3 text-lg text-primary hover:text-loginbg"
                variant={'ghost'}
                onClick={handleseemore}
            >
                See more
                <ArrowDown className="ml-1 inline-block" />
            </Button>
        </div>
    );
}
