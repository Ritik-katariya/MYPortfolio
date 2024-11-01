import React from "react";
import ProjectEffect from "./ProjectEffect";
import { data1, data2 } from "./ProjectData";

import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import ProjectC from "./ProjectC";


function Project() {

  
  const [Effect, setEffect] = useState(true);
const [page, setpage] = useState(1)
  
const data=page===1?data1:data2;
console.log(data);

  return (
    <div className="flex flex-col w-full  justify-around items-center mt-20 gap-20" id="Project">
      <motion.div
      initial={{y:-100,opacity:0,scale:.9}}
      whileInView={{y:0,opacity:1,scale:1}}
      transition={{duration:1,ease:easeInOut,when:"afterChildren"}}
      className="h-32 w-full flex flex-col justify-center items-center gap-2 text-center">
        <motion.span
        initial={{y:-100,opacity:0,scale:.9}}
        whileInView={{y:0,opacity:1,scale:1}}
        transition={{duration:1,ease:easeInOut}}
        className="lg:text-5xl md:text-3xl sm:text-2xl text-lg text-col3 font-bold font-rubiq uppercase">
          my project
        </motion.span>
        <motion.span className="text-2xl text-col5 font-semibold font-mono">
          my work
        </motion.span>
      </motion.div>

      <motion.div 
      initial={{opacity:0,scale:.8}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:1,ease:easeInOut}}
      onClick={()=>{setEffect(false)}} >
        {Effect ? (
          <ProjectEffect Effect={Effect} ></ProjectEffect>
        ) : (
          <div className="">
            <ProjectC setpage={setpage} data={data}/>
          </div>
        )}
      </motion.div>
      
    </div>
  );
}

export default Project;
