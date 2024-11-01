import React from "react";
import dp from "../image/dp.png";
import "../App.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
function Herro() {
  const [text] = useTypewriter({
    words: ["Student at NIT", "Web developer", "Web designer"],
    loop: 0,
  });
  return (
    <div className=" lg:mt-20 lg:p-10 p-2 lg:flex lg:gap-5 lg:text-start w-full h-[850px]">
      <motion.div
        id="Home"
        className="flex flex-col    gap-2 lg:gap-4 lg:p-8 p-2 font-rubiq relative  "
      >
        <span className="lg:text-2xl text-xs text-col3 md:text-2xl font-bold max-lg:text-center  ">
          HELLO WORLD!{" "}
          <span className="ml-4 text-col5 text-lg    ">MY NAME IS </span>
        </span>
        <h1 className="xl:text-[100px] lg:text-8xl md:text-6xl max-lg:text-center text-3xl font-bold">
          RITIK <span className="text-col3">KUMAR</span>
        </h1>
        <div className="text-lg lg:text-5xl font-semibold italic font-mono max-lg:text-center w-full">
          I AM{" "}
          <span className="text-col3">
            {text}
            <Cursor />
          </span>
        </div>
        <p className=" text-col4 opacity-60 text-center lg:mr-14 font-sans">
          I'm an MCA student (batch of 2026) at NIT Agartala, specializing in
          frontend web development with React. I excel in crafting dynamic user
          interfaces and solving complex problems, leveraging my technical
          expertise to deliver seamless and efficient web solutions.
        </p>
        <span className="flex gap-6 text-3xl justify-center">
         <Link to={"https://github.com/Ritik-katariya"}> <BsGithub /></Link>
          <Link to={"https://www.instagram.com/ritik_katariya__/"}><FaInstagram /></Link>
          <Link to={"https://www.linkedin.com/in/ritik-kumar-113177284/"}><FaLinkedin /></Link>
         <Link to={"https://leetcode.com/u/Matrix2808/"}> <SiLeetcode /></Link>
        </span>
        <div className=" flex justify-center">
          
            <Link to={"https://drive.google.com/file/d/1v14RJJspFLwRU5L8UBy_kVDzmQP_7Pxn/view?usp=drive_link"}><button className="m-3 text-2xl font-semibold text-col5 bg-col1 hover:border-2 rounded-lg hover:border-col3 w-56 p-1">
            DOWNLOAD CV
          </button></Link>
          
        </div>
      </motion.div>
      <motion.div>
        <div className="w-full flex justify-center items-center">
          <div className="anime bg-col3 xl:w-[650px] xl:h-[670px] lg:w-[500px] lg:h-[450px] md:w-[350px] md:h-[400px] sm:w-96 sm:h-96 h-72 w-72 overflow-hidden ml-6 ">
            {" "}
            <img
              src={dp}
              alt="my"
              className="lg:h-[500px] xl:h-[670px]  md:h-[400px] sm:h-96  h-72 lg:ml-12 ml-6 right-14  "
            />{" "}
          </div>
          <div></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Herro;
