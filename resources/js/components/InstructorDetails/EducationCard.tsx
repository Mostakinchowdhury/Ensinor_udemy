import React from 'react'
import EducationInstituteCard from './EducationInstituteCard'

const EducationCard = () => {
  return (
    <div className='bg-[#f3f6f7] w-fit h-fit p-2'>
        <h1>Education</h1>
        <EducationInstituteCard />
        <EducationInstituteCard />
        <EducationInstituteCard />
    </div>
  )
}

export default EducationCard