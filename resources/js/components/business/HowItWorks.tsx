import React from 'react'
import HowItWorksCardContainer from './HowItWorksCardContainer'

const HowItWorks = () => {
  return (
    <div className='flex flex-col justify-center px-4 py-10 items-center'>
      <div className='w-full max-w-6xl mx-auto'>
        <h1 className='text-text40 text-3xl md:text-4xl lg:text-[48px] font-semibold text-center'>
          How It Works
        </h1>

        <p className='text-text50 text-base md:text-lg text-center mt-3 px-2'>
          Our platform makes it easy to create, manage and deliver training
          content.
        </p>
      </div>

      <HowItWorksCardContainer />
    </div>
  )
}

export default HowItWorks