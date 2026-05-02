import { GraduationCap } from 'lucide-react'
import React from 'react'

const EducationInstituteCard = () => {
  return (
    <div className='flex items-center gap-3 p-2 cursor-pointer'>
        
        {/* Icon */}
        <div className='p-2 bg-[#FFFFFF] text-black rounded'>
            <GraduationCap size={24} />
        </div>

        {/* Info */}
        <div className='flex flex-col'>
            <p className='text-[16px] font-semibold text-[#606060]'>
                University of Dhaka
            </p>
            <p className='text-[12px] text-[#606060]'>
                UI & UX Designer
            </p>
        </div>

    </div>
  )
}

export default EducationInstituteCard