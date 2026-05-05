import { Clock10Icon, Group, MessageCircleDashed, Settings, SignalHighIcon } from 'lucide-react';
import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureContainer = () => {
    return (
        <div className="mt-10 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
                icon={<MessageCircleDashed size={20} />}
                title="Invite-Only Access"
                subtitle="Control who joins with secure, one-time email links. Restrict access to only your team or specific customers."
            />
            <FeatureCard
                icon={<Settings size={20} />}
                title="Customizable Content"
                subtitle="Assign specific courses or modules per group or individual. Tailor training paths to different roles or needs."
            />
            <FeatureCard icon={<Clock10Icon size={20} />} title='Progress Tracking' subtitle='Monitor employee/customers engagement and completion status with detailed dashboards and reports' />
            <FeatureCard icon={<Group size={20}/>} title='Group Management' subtitle='Organize users by department, client, or training type. Create custom groups for trageted learning paths.' />
            <FeatureCard icon={<Clock10Icon size={20}/>} title='Aumated Reminders' subtitle='Keep learners on track with scheduled email notifications for upcoming deadlines and course completions.' />
        </div>
    );
};

export default FeatureContainer;
