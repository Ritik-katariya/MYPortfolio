import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import ProjectTemplate from "./ProjectTemplate";
import { easeInOut, motion } from 'framer-motion';
function ProjectC({data,setpage}) {
  return (
    <div>
      <motion.div
      
      initial={{x:-300,opacity:0,scale:.9}}
       whileInView={{x:0,opacity:1,scale:1}}
       transition={{duration:1,ease:easeInOut}}
      >
              <ProjectTemplate togel={false} data={data[0]} />
            </motion.div>
            <motion.div
            initial={{opacity:0,scale:.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:1,ease:easeInOut}}
            >
              <ProjectTemplate togel={true} data={data[1]} />
            </motion.div>
            <motion.div
            
            initial={{x:300,opacity:0,scale:.9}}
       whileInView={{x:0,opacity:1,scale:1}}
       transition={{duration:1,ease:easeInOut}}
            >
              <ProjectTemplate togel={false} data={data[2]} />
            </motion.div>
            <motion.div 
            initial={{opacity:0,scale:.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:1,ease:easeInOut}}
            className='flex justify-center items-center w-full gap-16 lg:text-3xl md:text-2xl text-lg md:h-20 h-16 lg:h-24'>
                  <span onClick={()=>{setpage(1)}} className='rounded-full  hover:text-col3 '> <FaArrowLeft /> </span>
                 <span onClick={()=>{setpage(2)}} className='rounded-full  hover:text-col3 '> <FaArrowRight /> </span>
               </motion.div>
    </div>
  )
}

export default ProjectC
