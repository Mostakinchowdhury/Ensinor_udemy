import BusinessHero from '@/components/business/BusinessHero'
import ForBusiness from '@/components/business/ForBusiness'
import KeyFeatures from '@/components/business/KeyFeatures'
import Nav from '@/components/global/nav'

const Business = () => {
  return (
    <div>
        <Nav/>
        <BusinessHero/>
        <KeyFeatures/>
        <ForBusiness/>
    </div>
  )
}

export default Business