import BusinessHero from '@/components/business/BusinessHero'
import ForBusiness from '@/components/business/ForBusiness'
import FormContainer from '@/components/business/FormContainer'
import HowItWorks from '@/components/business/HowItWorks'
import KeyFeatures from '@/components/business/KeyFeatures'
import SubscriptionPlans from '@/components/business/SubscriptionPlans'
import Nav from '@/components/global/nav'
import Partners from '@/components/home/Partners'

const Business = () => {
  return (
    <div>
        <Nav/>
        <BusinessHero/>
        <KeyFeatures/>
        <ForBusiness/>
        <HowItWorks/>
        <SubscriptionPlans/>
        <Partners/>
        <FormContainer/>
    </div>
  )
}

export default Business