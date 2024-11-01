import React from "react";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
function Resume() {
  const [edu, setedu] = useState(false);
  const [exp, setexp] = useState(false);
  const [ach, setach] = useState(false);
  const [rai, setrai] = useState(false);
  return (
    <div
      className="flex flex-col  items-center w-full gap-16 mt-32 "
      id="Resume"
    >
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeInOut, when: "beforeChildren" }}
        className="lg:text-5xl md:text-3xl sm:text-xl text:lg flex flex-col text-col3 font-bold font-rubiq text-center gap-[-6px]"
      >
        <motion.span
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          Resume
        </motion.span>
        <motion.span
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          className="lg:text-2xl sm:text-xl text-sm text-col5 font-semibold text-center font-mono underline"
        >
          My Story
        </motion.span>
      </motion.div>
      <div className="lg:flex justify-around xl:gap-4 relative">
        <div
          className={`lg:flex justify-around flex-col gap-4   items-center text-4xl text-col3  font-bold font-rubiq text-center   ${
            (!edu && !rai && !exp && !ach) || "blur-sm"
          }`}
        >
          <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="hover:text-col5 border-[4px] border-col4 md:h-[300px] h-[240px]  w-[300px] md:w-[500px]  flex justify-center items-center cursor-pointer"
            onClick={() => {
              setedu(!edu);
              setach(false);
              setexp(false);
              setrai(false);
            }}
          >
            <span
              onClick={() => {
                setedu(!edu);
                setach(false);
                setexp(false);
                setrai(false);
              }}
            >
              {" "}
              Education
            </span>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="hover:text-col5 border-[4px] border-col4 md:h-[300px] h-[240px]  w-[300px] md:w-[500px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              setedu(false);
              setach(false);
              setexp(!exp);
              setrai(false);
            }}
          >
            <span
              onClick={() => {
                setedu(false);
                setach(false);
                setexp(!exp);
                setrai(false);
              }}
            >
              {" "}
              Experience
            </span>
          </motion.div>
        </div>
        <div
          className={`lg:flex justify-around flex-col gap-4  items-center text-4xl text-col3 text-center font-bold font-rubiq cursor-pointer  ${
            (!edu && !rai && !exp && !ach) || "blur-sm"
          }`}
        >
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="hover:text-col5 border-[4px] border-col4 md:h-[300px] h-[240px]  w-[300px] md:w-[500px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              setedu(false);
              setach(!ach);
              setexp(false);
              setrai(false);
            }}
          >
            <span
              onClick={() => {
                setedu(false);
                setach(!ach);
                setexp(false);
                setrai(false);
              }}
            >
              Achivment{" "}
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="hover:text-col5 border-[4px] border-col4 md:h-[300px] h-[240px]  w-[300px] md:w-[500px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              setedu(false);
              setach(false);
              setexp(false);
              setrai(!rai);
            }}
          >
            <span
              onClick={() => {
                setedu(false);
                setach(false);
                setexp(false);
                setrai(!rai);
              }}
            >
              Technical Rating{" "}
            </span>
          </motion.div>
        </div>

        <div
          className={`absolute border-[4px] border-col4 bg-[#02020585] lg:w-[700px] lg:h-[350px] md:w-[600px] md:h-[300px] sm:w-[550px] sm:h-[250px] w-[360px] h-[200px]  flex justify-center items-center top-28 max-md:left-[-100px] max-sm:left-[-30px] z-[4] ${
            !edu && !rai && !exp && !ach && "hidden"
          }`}
        >
          {edu && <Education></Education>}
          {ach && <Achivment />}
          {rai && <TechnicalRating />}
          {exp && <Experience />}
        </div>
      </div>
    </div>
  );
}

export default Resume;

function Education() {
  return (
    <div
      className="flex flex-col justify-center gap-4 lg:w-[600px] lg:h-[300px] "
      id="Resume"
    >
      <div className="flex flex-col justify-center lg:gap-2">
        <div className="flex justify-between">
          <h1 className="lg:text-xl md:text-base sm:text-sm text-xs text-col3 font-semibold font-mono">
            National Institute of Technology Agartala
          </h1>
          <span className="lg:text-sm text-xs">2023-26</span>
        </div>
        <span className="lg:text-md md:text-base sm:text-sm text-xs text-col5 font-mono">
          Master of Computer Application (CGPA 8.61<sup>*</sup>)
        </span>
      </div>

      <div className="flex flex-col justify-center lg:gap-2">
        <div className="flex justify-between">
          <h1 className="lg:text-xl md:text-base sm:text-sm  text-xs text-col3 font-semibold font-mono">
            KLDAV PG COLLEGE ROORKEE
          </h1>
          <span className="lg:text-sm text-xs">2019-22</span>
        </div>
        <span className="lg:text-md md:text-base text-xs text-col5 font-mono">
          Bachelor of Science (PCM) HNBG University
        </span>
      </div>

      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-between">
          <h1 className="lg:text-xl md:text-base sm:text-sm  text-xs text-col3 font-semibold font-mono">
            RMPPV INTER COLLEGE GURUKUL NARSAN
          </h1>
          <span className="lg:text-sm text-xs">2028-19</span>
        </div>
        <span className="lg:text-md text-xs text-col5 font-mono">UK Board</span>
      </div>

      <div className="flex flex-col justify-center lg:gap-2">
        <div className="flex justify-between">
          <h1 className="lg:text-xl md:text-base sm:text-sm  text-xs text-col3 font-semibold font-mono">
            GHSS NAGLA SALAROO
          </h1>
          <span className="lg:text-sm text-xs">2016-17</span>
        </div>
        <span className="lg:text-md text-xs text-col5 font-mono">UK Board</span>
      </div>
    </div>
  );
}
function Experience() {
  return (
    <div className="text-col3  text-4xl font-mono font-bold text-center flex flex-col gap-8">
      <h1>Experience</h1>
      <span className="text-col5">Software Engineer Intern at Cloud Play Solutions </span>
    </div>
  );
}
function Achivment() {
  return (
    <div className="text-col3  text-4xl font-bold font-mono text-center flex flex-col gap-8">
      <h1>Achivment</h1>
      <span className="text-col5">learning phase</span>
    </div>
  );
}
function TechnicalRating() {
  return (
    <div className="flex flex-col gap-8  md:text-3xl sm:text-base lg:text-4xl font-bold font-mono text-center text-col3">
      <h1>Technical Rating</h1>
      <div className="flex lg:text-3xl text-col5 justify-around gap-8">
        <span className="text-orange-400">LeetCode</span>
        <span>130+ question solve</span>
      </div>
    </div>
  );
}
