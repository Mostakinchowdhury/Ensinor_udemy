import React from 'react'
import ForBusinessHero from './ForBusinessHero'

const ForBusiness = () => {
  return (
    <div className='flex justify-center py-10 items-center'>
        <div className='w-6xl'>
            <h1 className='text-[48px] text-text40 font-semibold text-center'>For Business</h1>
            <p className='text-[18px] text-text50 mx-auto w-full lg:w-[80%] mb-3 text-center'>
                A complete solution to empower your team, partners, and customers through impactful training - perfect for corporate learning, partner enablement, customer education and compilance programs.
            </p>
            <ForBusinessHero />
        </div>
    </div>
  )
}

export default ForBusiness