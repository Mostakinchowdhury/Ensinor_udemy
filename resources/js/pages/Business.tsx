import BusinessHero from '@/components/business/BusinessHero'
import ClientReview from '@/components/business/ClientReview'
import ForBusiness from '@/components/business/ForBusiness'
import FormContainer from '@/components/business/FormContainer'
import FrequentQNA from '@/components/business/FrequentQNA'
import HowItWorks from '@/components/business/HowItWorks'
import KeyFeatures from '@/components/business/KeyFeatures'
import SubscriptionPlans from '@/components/business/SubscriptionPlans'
import Footer from '@/components/global/Footer'
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
        <ClientReview/>
        <FrequentQNA/>
        <Footer/>
    </div>
  )
}

export default Business