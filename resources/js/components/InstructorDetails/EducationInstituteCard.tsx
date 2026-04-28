import { GraduationCap } from 'lucide-react'
import React from 'react'

const EducationInstituteCard = () => {
  return (
    <div className='flex items-center gap-3 p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer'>
        
        {/* Icon */}
        <div className='p-2 bg-blue-100 text-blue-600 rounded-full'>
            <GraduationCap size={18} />
        </div>

        {/* Info */}
        <div className='flex flex-col'>
            <p className='text-sm font-semibold text-gray-800'>
                University of Dhaka
            </p>
            <p className='text-xs text-gray-500'>
                UI & UX Designer
            </p>
        </div>

    </div>
  )
}

export default EducationInstituteCard