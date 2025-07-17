import React, { useState } from 'react'

const Tabs = ({tabs =[]}) => {
    const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='w-full'>
        <div className='flex border-b mb-4'>
            {tabs.map((tab, index) => (
                <button 
                    key={index} 
                    className={`py-2 px-4 border-b-2 transition-all duration-300 ${activeIndex === index ? 'border-blue-500 text-blue-500 font-semibold' : 'border-transparent text-gray-500 hover:text-blue-500'}`}
                    onClick={() => setActiveIndex(index)}
                >
                    {tab.label}
                </button>
                
            ))}
            </div>
            <div className='p-4 border rounded bg-white shadow-sm duration-300 transition-all'>
                {tabs[activeIndex]?.content}
            </div>
    </div>
  )
}

export default Tabs