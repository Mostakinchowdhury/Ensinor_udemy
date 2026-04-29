import React from 'react'
import AchievementContainer from './AchievementContainer'
import Contacts from './Contacts'
import CourseListContainer from './CourseListContainer'
import PersonalData from './PersonalData'

const RightContainer = () => {
  return (
    <div>
      <PersonalData/>
      <Contacts/>
      <AchievementContainer/>
      <CourseListContainer/>
    </div>
  )
}

export default RightContainer