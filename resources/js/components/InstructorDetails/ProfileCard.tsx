import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const ProfileCard = () => {
    return (
        <div className='bg-[#f3f6f7] w-fit h-fit p-2'>
            <img src="./laravel_knights_logo.png" alt="" />
            <div className="flex items-center justify-center gap-4">
                <p>Ratings</p>
                <p>
                    <span>⭐</span>
                    <span>4.6/5.0</span>
                </p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <p>Follow</p>
                <p>
                    <span>
                        <Facebook />
                    </span>
                    <span>
                        <Linkedin />
                    </span>
                    <span>
                        <Twitter />
                    </span>
                    <span>
                        <Instagram />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
