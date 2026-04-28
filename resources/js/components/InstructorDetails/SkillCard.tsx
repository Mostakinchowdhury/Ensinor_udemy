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
    <div className='bg-[#f3f6f9] w-78 h-60 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col'>
        
        {/* Title */}
        <h1 className='text-lg font-semibold text-gray-700 mb-3'>Skills</h1>

        {/* Skills Grid */}
        <div className='grid grid-cols-3 gap-2 overflow-hidden'>
            {skills.map((skill, index) => (
                <p
                    key={index}
                    className="text-xs text-center bg-white px-2 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-loginbg hover:text-black hover:font-black transition cursor-pointer"
                >
                    {skill}
                </p>
            ))}
        </div>

    </div>
  )
}

export default SkillCard