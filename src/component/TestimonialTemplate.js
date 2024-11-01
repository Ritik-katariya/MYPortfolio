import React from 'react'
import '../App.css'
function TestimonialTemplate(props) {
  return (
    <div className=''>
       <div className='flex flex-col items-center relative xl:w-[500px]   xl:h-[400px] lg:w-[400px]   lg:h-[400px]  sm:w-[300px]   sm:h-[200px] w-[200] h-[180px] overflow-visible mr-12    glassEffect border-[2px] border-col5 rounded-3xl'>
      <img src={props.data.image} alt="dp" className='absolute 2 lg:h-[150px] lg:w-[150px] md:h-[110px] md:w-[110px] sm:h-[90px] sm:w-[90px] h-[70px] w-[70px] rounded-full  sm:top-[-60px] lg:top-[-90px]  sm:left-28 lg:left-44 shadow-xl shadow-col4'/>
      <div className='flex flex-col justify-around lg:mt-24 md:mt-16 sm:mt-12 mt-20 '>
        <span className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-col3 font-bold font-rubiq text-center '>{props.data.name}</span>
        <span className='text-col5 lg:text-xl md:text-lg sm:text-base text-sm font-semibold  text-center font-mono'>{props.data.profile}</span>
        <span className='lg:text-xl md:text-lg sm:text-base text-sm font-mono text-col4  lg:mt-12'>{props.data.description}</span>
      </div>
    </div>
    </div>
  )
}

export default TestimonialTemplate
