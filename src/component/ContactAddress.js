import React from 'react'

function ContactAddress(props) {
  return (
    <div className='flex  justify-around text-col5 font-mono w-full h-full gap-8 mb-6 '>
      <span className='flex gap'>
      <span className='lg:text-5xl md:text-4xl sm:text-3x text-2xl text-col3 '>{props.data.icon}</span>
      
      </span>
      <div className='flex flex-col gap-2  w-full'>
        <span className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-col3'>{props.data.title}</span>
        <span className='md:text-xl sm:text-base text-sm font-semibold '>{props.data.description}</span>
      </div>
    </div>
  )
}

export default ContactAddress
