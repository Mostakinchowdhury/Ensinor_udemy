import Comhead from '@/components/global/Comhead'
import Footer from '@/components/global/Footer'
import Nav from '@/components/global/nav'
import DetailsContainer from '@/components/InstructorDetails/DetailsContainer'
import React from 'react'

const InstructorDetail = () => {
  return (
    <div className='text-black'>
        <Nav/>
        <Comhead/>
        <DetailsContainer/>
        <Footer/>
    </div>
  )
}

export default InstructorDetail