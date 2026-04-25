import { SearchIcon } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

export default function Headtitle() {
    const selectoptions = [
        'Most Viewed',
        'Most popular',
        'Recently search',
        'Top rated',
    ];

    return (
        <div className="flex items-center justify-between gap-6 text-lg text-[#606060]">
            {/* search group */}
            <div className="flex h-12 grow items-center gap-2.5 overflow-hidden rounded-none border-2 border-black bg-[#F3F6F7] pl-5">
                <SearchIcon color="black" size={24} />
                <Input
                    placeholder="Search Here"
                    className="footnavbtn placeholder:poppins border-0 shadow-none outline-0 placeholder:text-lg placeholder:text-[#606060] focus-within:ring-0 focus-within:outline-0 focus:ring-0 focus:outline-0 focus-visible:ring-0 focus-visible:outline-0"
                />
            </div>
            {/* selecet */}
            <div className="grow">
                <Select>
                    <SelectTrigger className="h-12! w-full! rounded-none! border-2 border-black bg-[#F3F6F7]! text-lg text-[#606060]">
                        <SelectValue placeholder="Select a statagy" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {selectoptions.map((op) => (
                                <SelectItem
                                    value={op}
                                    key={op}
                                    className="hover:bg-[#FFFAE6]!"
                                >
                                    {op}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <h4>Showing 1-20 of 120 Result</h4>
        </div>
    );
}
