import SubscriptionCardSupports from './SubscriptionCardSupports';

type Props = {
    title: string;
    price: number;
    month: string;
    features: string[];
};

const SubscriptionCard = ({ title, price, month, features }: Props) => {
    return (
        <div className="flex flex-col w-full min-h-125 justify-between rounded-2xl bg-[#F3F6F7] shadow-sm transition duration-300 hover:shadow-lg">
            
            <div className="inline-block w-50 h-17 rounded-tl-2xl rounded-br-3xl px-6 py-2.5 bg-[#bdc2c8] text-center text-[32px] font-semibold text-[#FFFFFF]">
                {title}
            </div>

            <div className="my-6 px-6">
                <h1 className="text-center text-[48px] font-semibold">
                    ${price}
                    <span className="text-[20px] font-light text-text40">
                        {' '}
                        {month}
                    </span>
                </h1>
            </div>

            <div className="flex flex-col text-[18px] text-text50 gap-3 px-6 grow">
                {features.map((item, index) => (
                    <SubscriptionCardSupports key={index} data={item} />
                ))}
            </div>

            <div className="mt-6 p-6">
                <button className="w-full rounded-lg bg-loginbg py-3 font-semibold transition hover:bg-yellow-400">
                    Get Subscription
                </button>
            </div>
        </div>
    );
};

export default SubscriptionCard;