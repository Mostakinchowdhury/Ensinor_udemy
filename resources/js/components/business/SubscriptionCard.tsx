import SubscriptionCardSupports from "./SubscriptionCardSupports";


type Props = {
  title: string;
  price: number;
  month: string;
  features: string[];
  icon: React.ReactNode;
  plan: string;
};

const SubscriptionCard = ({
  title,
  price,
  month,
  features,
  icon,
  plan,
}: Props) => {
  return (
    <div className="flex flex-col w-full h-full rounded-2xl bg-[#F3F6F7] shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
      
      {/* Plan Badge */}
      <div className="flex justify-end">
        <div className="px-6 py-3 bg-[#FFDE59] rounded-bl-2xl text-sm md:text-[18px] font-semibold text-text50">
          {plan}
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center mt-10">
        
        {/* Icon */}
        <div className="text-black text-5xl mb-3">
          {icon}
        </div>

        {/* Title */}
        <h1 className="text-[20px] font-semibold text-text40">
          {title}
        </h1>
      </div>

      {/* Price */}
      <div className="my-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#303030]">
          ${price}

          <span className="ml-1 text-lg font-normal text-text40">
            {month}
          </span>
        </h1>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-3 px-6 grow">
        {features.map((item, index) => (
          <SubscriptionCardSupports key={index} data={item} />
        ))}
      </div>

      {/* Button */}
      <div className="p-6 mt-6">
        <button className="w-full rounded-xl bg-[#FFDE59] text-text50 py-3 font-semibold transition hover:bg-yellow-400">
          Get Subscription
        </button>
      </div>

    </div>
  );
};

export default SubscriptionCard;