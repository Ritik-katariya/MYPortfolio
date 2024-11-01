import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex items-center flex-col w-full h-56 text-xl font-rubiq text-col5 text-center gap-4 uppercase'>
        <hr className='border-1 border-col5 w-full mb-8' />
        <div className='md:text-3xl sm:text-2xl text-base font-bold font-rubiq text-col3 '>Ritik Katariya</div>
        <div className='flex md:text-xl sm:text-base text-xs font-semibold gap-3 font-mono '> Made with  <FaHeart  color='red' className='mt-2'/> . Developed by Ritik Kumar
        </div>
        <div className='flex gap-8'> <FaLinkedinIn  className='text-sky-400'/>
        <FaGithub />
        <FaInstagram  className='text-pink-700'/>

        </div>
    </div>
  )
}

export default Footer
