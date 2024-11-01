import React from 'react'
import SkillTemp from './SkillTemp';
import { iconTab,logo } from './SkillData';
import SkillsIcon from './SkillsIcon';
import { easeIn, motion } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
function Skills() {
    
    
  return (
    <div className='flex flex-col lg:p-4 w-full justify-between items-center gap-8 mt-32  ' id='Skills'>
      <motion.h1 
       initial={{y:-100,opacity:0,scale:.9}}
       whileInView={{y:0,opacity:1,scale:1}}
       transition={{duration:1,ease:easeInOut,when:"beforeChildren"}}
       className='lg:text-4xl font-semibold text-col3 font-rubiq flex flex-col '>My Skills & Tools
       <motion.span className='border-2 w-full border-col5 mt-1'></motion.span>
       </motion.h1>
     <motion.div
     initial={{opacity:0,scale:.8}}
     whileInView={{opacity:1,scale:1}}
     transition={{duration:1,ease:easeInOut}}
     
     className='lg:flex flex:col justify-around  lg:mt-8 lg:p-6 lg:pr-10   '>
        <div className='lg:w-[600px] xl:w-[700px] 2xl:w-[820px]  lg:text-2xl text-col4 font-rubiq text-center lg:p-4 lg:pl-8 lg:pt-16 p-4 lg:mt-12'>
        <p className=''> I'm enhancing my skills with the MERN stack: MongoDB, Express.js, React, and Node.js. After mastering React for dynamic UIs, I'm now focusing on backend technologies. I'm learning Node.js for server-side programming, Express.js for robust APIs, and MongoDB for effective data management, aiming to build full-stack web applications proficiently.






        </p>
        </div>
       <div className='flex justify-center items-center lg:w-[390px] xl:w-[500px] 2xl:w-[600px] p-8'>
       <div className="flex flex-col justify-around w-full lg:w-[390px] xl:w-[500px] 2xl:w-[640px] max-lg:mt-8">
            {
                iconTab.map((data,index)=>(
                    <SkillTemp data={data} key={index}/>
                ))
            }
        </div>
       </div>
     </motion.div>
     <motion.div
     initial={{y:80,opacity:0,scale:.9}}
     whileInView={{y:0,opacity:1,scale:1}}
     transition={{duration:1,ease:easeInOut}}
     className='flex justify-around items-center w-full  h-24   ' >
        {logo.map((data,index)=>(
            <SkillsIcon data={data} key={index}/>
        ))}
     </motion.div>
    </div>
  )
}

export default Skills;
