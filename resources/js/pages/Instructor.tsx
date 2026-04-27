import Comhead from '@/components/global/Comhead'
import Footer from '@/components/global/Footer'
import Nav from '@/components/global/nav'
import EveryInstructorDataContainer from '@/components/Instructor/EveryInstructorDataContainer'


const Instructor = () => {
  return (
    <div>
        <Nav/>
        <Comhead/>
        <EveryInstructorDataContainer/>
        <Footer/>
    </div>
  )
}

export default Instructor