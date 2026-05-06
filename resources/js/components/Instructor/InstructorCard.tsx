import React from "react";

const InstructorCard = () => {
  return (
    <div className="bg-[#F3F6F7] rounded-2xl text-black shadow-sm hover:shadow-md transition p-4 flex flex-col  h-full">
      
      {/* Image */}
      <div className="w-full h-[300px] rounded-xl overflow-hidden">
        <img
          src="/laravel_knights_logo.png"
          alt="Instructor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Rating */}
      <div className="flex justify-between mt-2 items-center">
        <h1 className="text-[22px] text-[#000000] font-semibold">Muskan Tanaz</h1>
        <p className="flex items-center gap-1 text-[16px] font-medium">
          ⭐ <span>4.7</span>
        </p>
      </div>

      {/* Role */}
      <p className="text-[16px] text-text50">UX Design Lead</p>

      {/* Experience */}
      <div className="flex justify-between my-3 text-text50 items-center text-sm">
        <p className="text-[16px]">Experience</p>
        <p className="text-[16px]">5 years</p>
      </div>

      {/* Description */}
      <p className="text-[16px] text-text50">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
        veritatis maiores distinctio, perferendis minima error 
      </p>
    </div>
  );
};

export default InstructorCard;