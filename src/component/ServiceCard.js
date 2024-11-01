import React from "react";
import { motion } from "framer-motion";
function ServiceCard(props) {
  return (
    <motion.div className="sm:text-3xl text-2xl   text-col3 font-rubiq font-bold xl:w-[500px]  xl:h-[400px] lg:w-[400px]  lg:h-[300px] sm:w-[500px] sm:h-[350px] w-[350px] h-[300px] border-[4px] border-gray-500 p-4 relative lg:mt-20 mt-12">
      <div className="lg:text-9xl max-lg:text-8xl max-sm:text-7xl  max-sm:top-[-50px] max-sm:left-36 max-lg:top-[-60px] max-lg:left-48 absolute top-[-95px] xl:left-48 lg:left-36 text-col3 bg-col1">
        {props.data.logo}
      </div>
      <div className="text-col5 text-center font-semibold xl:text-2xl lg:mt-10 mt-8 ">
        {props.data.title}
      </div>
      <div className="text-col4 opacity-60 text-center xl:text-xl lg:text-base max-lg:font-normal max-lg:text-xl max-sm:text-sm mt-8">
        {props.data.description}
      </div>
    </motion.div>
  );
}

export default ServiceCard;
