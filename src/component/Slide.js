import { easeInOut, motion } from "framer-motion"
import Marquee from "react-fast-marquee"




function Slide() {  
  
    
  
  return (
    <motion.div 
    
    className='lg:w-full  lg:h-14 flex flex-col bg-col3 justify-center gap-8 overflow-hidden items-center ' >
     

      <div className="2xl:w-[1400px] xl:w-[1200px] lg:w-[980px] md:w-[750px] sm:w-[600px] w-[350px]">
      <Marquee  autoFill pauseOnHover speed={100}>
        <span className="flex m-1 mr-16 text-white hover:text-[#09101a] overflow-hidden lg:text-5xl font-bold font-rubiq uppercase text-center cursor-pointer "> # mern</span>
        <span className="flex m-1 mr-16 text-white hover:text-[#09101a] overflow-hidden lg:text-5xl font-bold font-rubiq uppercase text-center cursor-pointer "> WEB</span>
        <span className="flex m-1 mr-16 text-white hover:text-[#09101a] overflow-hidden lg:text-5xl font-bold font-rubiq uppercase text-center cursor-pointer "> developer</span>
        <span className="flex m-1 mr-16 text-white hover:text-[#09101a] overflow-hidden lg:text-5xl font-bold font-rubiq uppercase text-center cursor-pointer "> problem</span>
        <span className="flex m-1 mr-16 text-white hover:text-[#09101a] overflow-hidden lg:text-5xl font-bold font-rubiq uppercase text-center cursor-pointer "> solver</span>
       
       
       
      </Marquee>
      </div>
   
    </motion.div>
      
  )
}

export default Slide
