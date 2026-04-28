import React from 'react'
import EducationCard from './EducationCard'
import ProfileCard from './ProfileCard'
import SkillCard from './SkillCard'

const LeftContainer = () => {
  return (
    <div>
        <ProfileCard />
        <EducationCard />
        <SkillCard />
    </div>
  )
}

export default LeftContainer