import { Briefcase, Building, Group } from 'lucide-react';
import React from 'react'
import SubscriptionCard from './SubscriptionCard';


const plans = [
    {
        title: 'NGO',
        plan: 'Non-profits',
        icon: <Briefcase size={40} />,
        price: 199,
        month: '/mo',
        features: [
            'Up to 50 Users',
            '5 training courses',
            'Basic Analytics',
            'Email Support',
        ],
    },
    {
        title: 'SME',
        plan: 'Most-popular',
        
        icon: <Building size={40} />,
        price: 399,
        month: '/mo',
        features: [
            'Up to 200 Users',
            '15 training courses',
            'Advanced Analytics',
            'Priority Support',
            'Custom branding'
        ],
    },
    {
        title: 'Enterprise',
        icon: <Group size={40} />,
        plan: 'Full-Power',
        price: 999,
        month: '/year',
        features: [
            'Unlimited Users',
            'Unlimited courses',
            'Full Analytics Suite',
            'Dedicated Account Manager',
            'Advanced Security Features',
            'API Access',
        ],
    },
];

const SubscriptionContainer = () => {
  return (
    <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                    <SubscriptionCard
                        key={index}
                        icon={plan.icon}
                        plan={plan.plan}
                        title={plan.title}
                        price={plan.price}
                        month={plan.month}
                        features={plan.features}
                    />
                ))}
            </div>
  )
}

export default SubscriptionContainer