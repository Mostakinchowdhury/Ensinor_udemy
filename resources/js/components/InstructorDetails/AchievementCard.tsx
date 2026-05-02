import React from "react";

type AchievementCardProps = {
  icon: React.ReactNode;
  data: string;
  quantity: string;
};

const AchievementCard = ({ icon, data, quantity }: AchievementCardProps) => {
  return (
    <div className="flex items-center gap-4 bg-[#F3F6F7] rounded-2xl shadow-sm p-4 hover:shadow-md transition">
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl  text-[#000000]">
        {icon}
      </div>

      {/* Text */}
      <div>
        <h1 className="text-[16px] text-[#000000]">{data}</h1>
        <p className="text-[20px] text-[#000000] font-medium">{quantity}</p>
      </div>

    </div>
  );
};

export default AchievementCard;