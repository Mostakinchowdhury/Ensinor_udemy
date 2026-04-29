import React from "react";

type AchievementCardProps = {
  icon: React.ReactNode;
  data: string;
  quantity: string;
};

const AchievementCard = ({ icon, data, quantity }: AchievementCardProps) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition">
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-loginbg/20 text-loginbg">
        {icon}
      </div>

      {/* Text */}
      <div>
        <h1 className="text-sm text-slate-500">{data}</h1>
        <p className="text-xl font-semibold">{quantity}</p>
      </div>

    </div>
  );
};

export default AchievementCard;