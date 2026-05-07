import React from 'react'

type CardProps = {
    icon: React.ReactNode
    title: string
    subtitle: string
}

const HowItWorksCard = ({icon, title, subtitle} : CardProps) => {
  return (
    <div className='w-[280px] h-[235px] rounded-2xl flex justify-center items-center flex-col bg-[#F3F6F7]'>
      <div className='p-2 bg-[#FFF5CC] text-slate-500 rounded-full w-fit'>{icon}</div>
      <h1 className="my-2 text-[18px] font-semibold text-[#303030]">{title}</h1>
      <p className="text-[16px] text-center px-8 text-text50">{subtitle}</p>
    </div>
  )
}

export default HowItWorksCard