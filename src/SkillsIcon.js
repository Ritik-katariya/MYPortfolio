import React from 'react'
import { motion } from 'framer-motion';

function SkillsIcon(props) {
  return (
    <div >
      <motion.img 
      drag
      dragSnapToOrigin
      
      
      src={props.data} alt="icons" className='w-16 max-xl:h-[50px]  max-xl:w-10 max-md:w-6 max-md:h-[24px] h-[70px] object-contain' ></motion.img>
    </div>
  )
}

export default SkillsIcon
