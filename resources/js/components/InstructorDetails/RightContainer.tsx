import React from 'react'
import AchievementContainer from './AchievementContainer'
import Contacts from './Contacts'
import PersonalData from './PersonalData'

const RightContainer = () => {
  return (
    <div>
      <PersonalData/>
      <Contacts/>
      <AchievementContainer/>
    </div>
  )
}

export default RightContainer