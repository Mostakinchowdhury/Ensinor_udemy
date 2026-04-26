import SubscriptionCard from './SubscriptionCard';

const plans = [
    {
        title: 'Basic',
        price: 99,
        month: '/01-month',
        features: [
            'Up to 50 Users',
            '5 training courses',
            'Basic Analytics',
            'Email Support',
        ],
    },
    {
        title: 'Standard',
        price: 199,
        month: '/06-month',
        features: [
            'Up to 200 Users',
            '15 training courses',
            'Advanced Analytics',
            'Priority Support',
            'Custom branding'
        ],
    },
    {
        title: 'Premium',
        price: 599,
        month: '/yearly',
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
        <div className="w-full bg-white px-4 py-12 text-black">
            <h1 className="text-center text-3xl font-semibold md:text-4xl">
                Instructor Subscription
            </h1>

            <p className="mx-auto mt-2 max-w-xl text-center text-gray-500">
                Choose the perfect plan for your organization's size and needs
            </p>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, index) => (
                    <SubscriptionCard
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        month={plan.month}
                        features={plan.features}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubscriptionContainer;
