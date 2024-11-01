import React from "react";

function SkillTemp(props) {
  return (
    <div className="flex flex-col lg:rp-4 lg:mr-8 w-full" >
      <div className="flex justify-between items-cente " >
        <div className="flex lg:gap-12  "><span className="lg:text-7xl xl:text-8xl md:text-6xl text-7xl  max-sm:text-5xl  text-col3">{props.data.logo}</span>
        <span className="lg:text-lg xl:text-2xl  text-col2 xl:mt-8  lg:mt-3 max-sm:mb-8">{props.data.title}</span></div>
        <span  className="text-lg font-mono text-green-600 xl:mt-8 lg:text-lg xl:text-xl lg:mt-4">{props.data.progress} <span className="text-[#c47123]">%</span></span>
      </div>
      <div className="relative ">
        <div className={`${props.data.progress===60&&"w-1/2"}  h-2  ${props.data.progress===85&&"w-4/6"} z-[1]  ${props.data.progress===76&&"w-3/5"}   bg-[#c47123] absolute top-[-28px] rounded-full  max-sm:left-14 left-24`}></div>
        <div className="w-4/5   h-2 bg-gray-400 z-[0] absolute top-[-28px]  rounded-full  max-sm:left-14 left-24"></div>
      </div>
    </div>
  );
}

export default SkillTemp;
