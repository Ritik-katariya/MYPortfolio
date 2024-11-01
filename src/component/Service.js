import React from 'react'
import ServiceCard from './ServiceCard'
import { SiAltiumdesigner } from "react-icons/si";
import { SiReactivex } from "react-icons/si";
import { AnimatePresence, easeIn, motion } from 'framer-motion';
function Service() {
  const service=[
    {
      logo:<SiReactivex />,
       title:"Full Stack Web Development",
       description:"I'm a Full Stack Web Developer skilled in building responsive, user-centered applications using the MERN stack . With a strong foundation in both frontend and backend technologies, I create seamless, efficient, and scalable web solutions tailored to user needs. Passionate about continuous learning and innovation, I strive to deliver high-quality, impactful code and intuitive design."
    },
    {
      logo:<SiAltiumdesigner />,
       title:"UI/UX Designer",
       description:" am a UI/UX Designer focused on crafting engaging user experiences through visually appealing and functional interfaces. I collaborate with teams to turn complex ideas into user-friendly solutions, always striving to enhance usability and stay updated with design trends."
    }
  ]
  console.log(service);
  return (
    
    <AnimatePresence>

    <div className='flex flex-col w-full h-full lg:p-8 max-lg:mt-8' id='Service'>
      <motion.div
      initial={{y:-100,opacity:0,scale:.9}}
      whileInView={{y:0,opacity:1,scale:1}}
      transition={{duration:1 ,ease:easeIn}}
      
      className='flex flex-col justify-between items-center lg:p-8 lg:text-5xl text-col3 text-center uppercase font-rubiq font-bold '>
      <div className='lg:text-2xl sm:text-2xl text-col5 lg:mt-40 lg:mb-5' >my service</div>
      <div className='lg:w-[800px]'>Crafting stories through
      design and innovation</div>
      </motion.div>
      <motion.div 
      initial={{x:-200,opacity:0}}
      whileInView={{x:0,opacity:1}}
      exit={{opacity:0}}
      transition={
        {
          duration:1,ease:easeIn,
          when:"afterChildren",
          
        }

      }
      
      className='lg:h-[500px]  lg:flex justify-center items-center w-full lg:gap-16'>
         {
          service.map((data,index)=>(<div className='flex justify-center items-center max-lg:mt-8'><ServiceCard key={index} data={data}></ServiceCard></div>))
         }
      </motion.div>
    </div>
      </AnimatePresence>
  )
}

export default Service
