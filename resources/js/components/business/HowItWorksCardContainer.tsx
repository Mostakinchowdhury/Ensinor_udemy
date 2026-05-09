// HowItWorksCardContainer.tsx
import {
  Clock12,
  LoaderCircle,
  MailCheck,
  SyringeIcon,
} from 'lucide-react'
import React from 'react'
import HowItWorksCard from './HowItWorksCard'

const HowItWorksCardContainer = () => {
  return (
    <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 place-items-center'>
      <HowItWorksCard
        icon={<MailCheck size={40} />}
        title='Create Courses'
        subtitle='Easily build interactive courses with our intuitive course builder.'
      />

      <HowItWorksCard
        icon={<SyringeIcon size={40} />}
        title='Schedule Events'
        subtitle='Host live training sessions, webinars, and workshops for your audience,'
      />

      <HowItWorksCard
        icon={<Clock12 size={40} />}
        title='Invite Participants'
        subtitle='Seamlessly invite employees or customers to access your training content.'
      />

      <HowItWorksCard
        icon={<LoaderCircle size={40} />}
        title='Monitor Progress'
        subtitle='Track completion rates and engagement with detailed analytics dashboards.'
      />
    </div>
  )
}

export default HowItWorksCardContainer