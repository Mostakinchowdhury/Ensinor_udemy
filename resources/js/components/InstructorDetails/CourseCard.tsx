import { Clock, Heart, Tv2 } from "lucide-react";
import React from "react";

const CourseCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      
      {/* Image */}
      <div className="w-full h-40 overflow-hidden">
        <img
          src="/laravel_knights_logo.png"
          alt="Course"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        
        {/* Level + Wishlist */}
        <div className="flex justify-between items-center">
          <span className="text-xs bg-loginbg/20 text-loginbg px-2 py-1 rounded-md">
            All Level
          </span>
          <Heart
            size={20}
            className="cursor-pointer text-gray-400 hover:text-red-500 transition"
          />
        </div>

        {/* Title */}
        <h1 className="text-lg font-semibold leading-snug">
          Professional Graphics Design
        </h1>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum.
        </p>

        {/* Rating + Students */}
        <div className="flex justify-between text-sm">
          <p className="flex items-center gap-1 font-medium">
            ⭐ <span>4.7 (7k)</span>
          </p>
          <p className="text-slate-500">13k Students</p>
        </div>

        <hr  className="border-slate-200"/>

        {/* Info */}
        <div className="flex justify-between text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>27h 30m</span>
          </div>

          <div className="flex items-center gap-1">
            <Tv2 size={16} />
            <span>48 Lectures</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;