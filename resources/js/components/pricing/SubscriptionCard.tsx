import SubscriptionCardSupports from './SubscriptionCardSupports';

type Props = {
    title: string;
    price: number;
    month: string;
    features: string[];
};

const SubscriptionCard = ({ title, price, month, features }: Props) => {
    return (
        <div className="flex flex-col justify-between rounded-2xl bg-[#F3F6F7] shadow-sm transition duration-300 hover:shadow-lg">
            <div className="inline-block w-40 rounded-tl-2xl rounded-br-3xl bg-[#bdc2c8] py-3 text-center text-lg font-semibold text-slate-100">
                {title}
            </div>

            <div className="my-6 px-6">
                <h1 className="text-center text-3xl font-semibold">
                    ${price}
                    <span className="text-sm font-light text-gray-500">
                        {' '}
                        {month}
                    </span>
                </h1>
            </div>

            <div className="flex flex-col items-start justify-start gap-3 px-6">
                {features.map((item, index) => (
                    <SubscriptionCardSupports key={index} data={item} />
                ))}
            </div>

            <div className="mt-6 p-6">
                <button className="w-full rounded-lg bg-[#ffde59] py-3 font-semibold transition hover:bg-yellow-400">
                    Get Subscription
                </button>
            </div>
        </div>
    );
};

export default SubscriptionCard;
