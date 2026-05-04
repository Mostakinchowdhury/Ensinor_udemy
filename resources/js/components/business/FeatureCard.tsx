import { Car } from "lucide-react";
import React from "react";

const FeatureCard = () => {
  return (
    <div className="w-[370px]  min-h-[235px] flex flex-col justify-center items-center bg-[#F3F6F7] rounded-xl p-5 text-center hover:shadow-md transition">
      
      <Car size={50} />

      <h1 className="text-[18px] text-[#303030] font-semibold my-2">
        Invite Only access
      </h1>

      <p className="text-sm text-text50">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        suscipit consequuntur aperiam amet, quia nobis saepe ex reprehenderit
        dolorum provident.
      </p>

    </div>
  );
};

export default FeatureCard;