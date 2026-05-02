import React from 'react'
import EducationInstituteCard from './EducationInstituteCard'

const EducationCard = () => {
  return (
    <div className='bg-[#f3f6f7] w-[332px] min-h-70 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col'>
        
        {/* Title */}
        <h1 className='text-[20px] text-[#606060] font-semibold mb-3'>Education</h1>

        {/* List */}
        <div className='flex flex-col gap-3 overflow-hidden'>
            <EducationInstituteCard />
            <EducationInstituteCard />
            <EducationInstituteCard />
        </div>

    </div>
  )
}

export default EducationCard