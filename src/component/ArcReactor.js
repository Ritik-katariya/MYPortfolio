import React from 'react'
import image from "../image/ArcReactor.png"
import { animate, motion } from 'framer-motion'
import { useState } from 'react'
function ArcReactor() {
  const [click, setclick] = useState(false)
  return (

    <div className='relative shadow-xl   '>
    
      <motion.img 
      drag
      dragConstraints={{left:0,right:1100}}
      
      src={image} alt="Arc Reactor" className={`h-[100px] w-[100px] object-contain rounded-full absolute  top-[-200px] left-24   z-[4] ${!click&&"animate-spin"}  `}  onClick={()=>{setclick(true)}} ></motion.img>
     
    </div>
  )
}

export default ArcReactor
