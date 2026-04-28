import React from 'react'
import EducationCard from './EducationCard'
import ProfileCard from './ProfileCard'
import SkillCard from './SkillCard'

const LeftContainer = () => {
  return (
    <div className='flex flex-col gap-2'>
        <ProfileCard />
        <EducationCard />
        <SkillCard />
    </div>
  )
}

export default LeftContainer