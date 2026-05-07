import React from 'react'
import MonthYearPlan from './MonthYearPlan'
import SubscriptionCardContainer from './SubscriptionContainer'

const SubscriptionPlans = () => {
  return (
    <div className='flex justify-center py-10 items-center'>
        <div className='w-6xl'>
            <h1 className='text-[48px] text-text50 text-center font-semibold'>Subscription Plans</h1>
            <p className='text-[18px] text-text50 text-center'>Choose the perfect plan for your organization's size and needs.</p>
            <div className='flex w-full text-black py-10 justify-center items-center gap-4'>
                <MonthYearPlan />
            </div>
            <SubscriptionCardContainer />
        </div>
    </div>
  )
}

export default SubscriptionPlans