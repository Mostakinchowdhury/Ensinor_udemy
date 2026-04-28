import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const ProfileCard = () => {
    return (
        <div className='bg-[#f3f6f7] w-78 h-103 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-between'>
            
            {/* Image */}
<div className="w-full h-70 rounded-xl overflow-hidden shadow">
    <img 
        src="./contributer.png" 
        alt="profile" 
        className="w-full h-full object-cover"
    />
</div>

            {/* Rating */}
            <div className="flex items-center gap-1">
                <p className="text-gray-500 text-sm">Ratings</p>
                <p className="flex items-center gap-1 text-lg font-semibold text-yellow-500">
                    <span>⭐</span>
                    <span className="text-gray-800">4.6/5.0</span>
                </p>
            </div>

            {/* Follow */}
            <div className='flex  items-center gap-2'>
                <p className="text-gray-500 text-sm">Follow</p>
                <div className="flex gap-3">
                    <span className="p-2 bg-white rounded-full shadow hover:bg-blue-500 hover:text-white transition cursor-pointer">
                        <Facebook size={18} />
                    </span>
                    <span className="p-2 bg-white rounded-full shadow hover:bg-blue-700 hover:text-white transition cursor-pointer">
                        <Linkedin size={18} />
                    </span>
                    <span className="p-2 bg-white rounded-full shadow hover:bg-sky-400 hover:text-white transition cursor-pointer">
                        <Twitter size={18} />
                    </span>
                    <span className="p-2 bg-white rounded-full shadow hover:bg-pink-500 hover:text-white transition cursor-pointer">
                        <Instagram size={18} />
                    </span>
                </div>
            </div>

        </div>
    );
};

export default ProfileCard;