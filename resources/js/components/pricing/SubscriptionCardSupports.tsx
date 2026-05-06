import React from 'react';


const SubscriptionCardSupports = ({ data }: { data: string }) => {
  return (
    <p className="flex gap-2 text-gray-700">
      <span className="text-green-500">✔</span>
      <span>{data}</span>
    </p>
  );
};

export default SubscriptionCardSupports;