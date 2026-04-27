import React from 'react'
import FilterInstructor from './FilterInstructor'
import InstructorCard from './InstructorCard'

const EveryInstructorDataContainer = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <FilterInstructor />
        <div className="grid grid-cols-1 mx-4 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <InstructorCard />
  <InstructorCard />
  <InstructorCard />
  <InstructorCard />
  <InstructorCard />
  <InstructorCard />
  <InstructorCard />
  <InstructorCard />
  <InstructorCard />
</div>
    </div>
  )
}

export default EveryInstructorDataContainer