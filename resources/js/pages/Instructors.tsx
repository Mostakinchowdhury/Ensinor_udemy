import Comhead from '@/components/global/Comhead'
import Footer from '@/components/global/Footer'
import Nav from '@/components/global/nav'
import EveryInstructorDataContainer from '@/components/Instructor/EveryInstructorDataContainer'


const Instructors = () => {
  return (
    <div>
        <Nav/>
        <Comhead/>
        <EveryInstructorDataContainer/>
        <Footer/>
    </div>
  )
}

export default Instructors