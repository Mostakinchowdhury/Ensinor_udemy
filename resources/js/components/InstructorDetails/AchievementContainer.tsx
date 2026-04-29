import { BookAudioIcon, Briefcase, Users } from "lucide-react";
import React from "react";
import AchievementCard from "./AchievementCard";
const AchievementContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
      <AchievementCard
        icon={<BookAudioIcon size={20} />}
        data="Total Courses"
        quantity="25"
      />

      <AchievementCard
        icon={<Users size={20} />}
        data="Students"
        quantity="1,200"
      />

      <AchievementCard
        icon={<Briefcase size={20} />}
        data="Experience"
        quantity="8+ years"
      />

    </div>
  );
};

export default AchievementContainer;