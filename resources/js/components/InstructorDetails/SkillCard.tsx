import React from 'react'

const skills = [
    "UI/UX Designer",
                "Web Developer",
                "Web Designer",
                "UI/UX Designer",
                "Web Developer",
                "Web Designer",
                "UI/UX Designer",
                "Web Developer",
                "Web Designer",
]

const SkillCard = () => {
  return (
    <div className='bg-[#f3f6f9] w-[332px] min-h-60 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col'>
        
        {/* Title */}
        <h1 className='text-lg font-semibold text-gray-700 mb-3'>Skills</h1>

        {/* Skills Grid */}
        <div className='grid grid-cols-3 gap-2 overflow-hidden'>
            {skills.map((skill, index) => (
                <p
                    key={index}
                    className="text-[12px] text-center bg-white px-2 py-2 rounded-lg shadow-sm"
                >
                    {skill}
                </p>
            ))}
        </div>

    </div>
  )
}

export default SkillCard