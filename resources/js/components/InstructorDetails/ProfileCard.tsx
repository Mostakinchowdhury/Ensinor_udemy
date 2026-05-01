import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const ProfileCard = () => {
    return (
        <div className='bg-[#f3f6f7] w-78 h-103 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-between'>
            
            {/* Image */}
<div className="w-[280px] h-[302px] rounded-xl overflow-hidden shadow">
    <img 
        src="./contributer.png" 
        alt="profile" 
        className="w-full h-full object-cover"
    />
</div>

            {/* Rating */}
            <div className="flex items-center text-[16px] text-text50 gap-5">
                <p>Ratings</p>
                <p className="flex items-center gap-1">
                    <span>⭐</span>
                    <span className="text-gray-800">4.6 / 5.0</span>
                </p>
            </div>

            {/* Follow */}
            <div className='flex  items-center gap-4 text-[16px] text-text50'>
                <p>Follow</p>
                <div className="flex gap-3">
                    <Facebook className='hover:text-blue-600' size={20} />
                    <Linkedin className='hover:text-blue-600' size={20} />
                    <Twitter className='hover:text-blue-400' size={20} />
                    <Instagram className='hover:text-pink-600' size={20} />
                </div>
            </div>

        </div>
    );
};

export default ProfileCard;