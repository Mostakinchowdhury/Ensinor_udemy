import { GraduationCap } from 'lucide-react'
import React from 'react'

const EducationInstituteCard = () => {
  return (
    <div className='flex gap-2 items-center justify-start w-fit h-fit'>
        <GraduationCap />
        <div>
            <p>University of Dhaka</p>
            <p>UI & UX Designer</p>
        </div>
    </div>
  )
}

export default EducationInstituteCard