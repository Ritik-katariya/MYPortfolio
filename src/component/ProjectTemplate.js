import React from 'react'
import { Link } from 'react-router-dom';
function ProjectTemplate(props) {
   const data=props.data;
   const togel=props.togel;
  return (
    <div className='w-full flex  justify-center items-center'>
      {
       !togel?(

        <div className='flex  justify-center'>
          <div className='flex flex-col justify-center gap-4 w-3/5 xl:p-8'>
           <h1 className='lg:text-3xl md:text-2xl sm:text-lg text-sm text-col5 font-semibold font-rubiq text-center'>{data.name}</h1>
           <p className='lg:text-lg md:text-base text-xs text-col4 font-semibold font-rubiq text-center '>{data.description}</p>
        </div>
         <div>
         <Link to={props.data.link} target="_blank"> <img src={data.image} alt="project"  className='w-[330px] sm:w-[390px] h-[350px] object-contain cursor-pointer hover:scale-110  '/></Link>
         </div>
        </div>
      
        ):(

        <div className='flex  justify-center'>
          <div >
             <Link to={props.data.link} target="_blank"> <img src={data.image} alt="project"  className='w-[330px] sm:w-[390px] h-[350px] object-contain cursor-pointer hover:scale-110  '/></Link>
            </div>
           <div className='flex flex-col justify-center gap-4 w-3/5 xl:p-8'>
             <h1 className='lg:text-3xl md:text-2xl text:text-lg text-col5 font-semibold font-rubiq text-center'>{ data.name}</h1>
             <p className='lg:text-xl md:text-lg text-xs text-col4 font-semibold font-rubiq text-center '>{data.description}</p>
           </div>
        </div>)
      }
    </div>
  )
}

export default ProjectTemplate
