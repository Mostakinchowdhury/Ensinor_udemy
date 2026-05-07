import BusinessHero from '@/components/business/BusinessHero'
import ForBusiness from '@/components/business/ForBusiness'
import HowItWorks from '@/components/business/HowItWorks'
import KeyFeatures from '@/components/business/KeyFeatures'
import Nav from '@/components/global/nav'

const Business = () => {
  return (
    <div>
        <Nav/>
        <BusinessHero/>
        <KeyFeatures/>
        <ForBusiness/>
        <HowItWorks/>
    </div>
  )
}

export default Business