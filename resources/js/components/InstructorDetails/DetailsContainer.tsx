import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const DetailsContainer = () => {
  return (
    <div className='max-w-6xl my-20 flex gap-4 items-start mx-auto'>
        <LeftContainer/>
        <RightContainer/>
    </div>
  )
}

export default DetailsContainer