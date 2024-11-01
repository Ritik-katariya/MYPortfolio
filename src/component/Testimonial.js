import React from "react";
import TestimonialTemplate from "./TestimonialTemplate";
import data from "./TestimonialData";
import { easeInOut, motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function Testimonial() {
  return (
    <div className="   flex  justify-center items-center flex-col gap-7 mt-24">
<motion.div 
initial={{y:-100,opacity:0,scale:.9}}
whileInView={{y:0,opacity:1,scale:1}}
transition={{duration:1,ease:easeInOut}}
className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-col3 font-bold font-rubiq flex flex-col">Testimonial
  <span className="h-1 border-2 border-col5 bg-col5 w-full mt-2 shadow-xl shadow-col5 mb-12"></span>
</motion.div>

     <div className="flex 2xl:w-[1400px] 2xl:h-[600px] xl:w-[1250px] xl:h-[550px] lg:w-[1000px] lg:h-[500px] md:w-[740px] md:h-[430px] sm:w-[600px] sm:h-[400px] w-[340px] h-[200px]">
     <Marquee pauseOnHover speed={100} autoFill>
        {data.map((data) => {
          return <TestimonialTemplate data={data} />;
        })}
      </Marquee>
     </div>
    </div>
  );
}

export default Testimonial;
