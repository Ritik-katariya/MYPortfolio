import React from 'react'
import effect from "../image/effect.png"
import { motion } from 'framer-motion'
function ProjectEffect({setEffect}) {
  return (
    <motion.div 
    
    
    
    className='lg:w-[1000px] lg:h-[600px] object-contain overflow-hidden border-[4px] border-col4  relative'>
      <img src={effect} alt="Effect"  className=' hover:scale-[1.1] cursor-pointer lg:w-[1000px] lg:h-[600px]'/>


    </motion.div>
  )
}

export default ProjectEffect
