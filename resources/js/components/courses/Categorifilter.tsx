import { ArrowDown } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

export default function Categorifilter({
    radioItems,
}: {
    radioItems: { value: string; label: string; amount: number }[];
}) {
    return (
        <div className="rounded-lg bg-[#F3F6F7] p-3.5">
            <h3 className="my-3 border-b-2 border-text50 pb-4 text-2xl font-medium text-text26">
                Category
            </h3>
            <div className="mt-4">
                <RadioGroup defaultValue="allcourses">
                    {radioItems.map((item) => (
                        <div
                            key={item.value}
                            className="flex items-center justify-between gap-3"
                        >
                            <div className="flex items-center gap-3">
                                <RadioGroupItem
                                    value={item.value}
                                    id={`r${item.value}`}
                                />
                                <Label
                                    htmlFor={`r${item.value}`}
                                    className="text-lg text-text26"
                                >
                                    {item.label}
                                </Label>
                            </div>

                            <p className="text-lg text-text26">
                                {'('.concat(item.amount.toString(), ')')}
                            </p>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <Button
                className="my-3 text-lg text-primary hover:text-loginbg"
                variant={'ghost'}
            >
                See more
                <ArrowDown className="ml-1 inline-block" />
            </Button>
        </div>
    );
}
