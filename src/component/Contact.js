import React from "react";
import ContactForm from "./ContactForm";
import ContactAddress from "./ContactAddress";
import Data from "./ContactData";
import { easeInOut, motion } from "framer-motion";
function Contact() {
  return (
    <div
      className="flex  flex-col justify-center items-center gap-8 w-full mt-12 bg-col1  overflow-hidde"
      id="Contact"
    >
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.9 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="flex flex-col w-full  justify-center "
      >
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold font-rubiq text-col3 text-center w-full"
        >
          Contanct With Me
        </motion.div>
        <motion.span
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          className="lg:text-lg md:text-base sm:text-sm text-xs font-bold font-mono text-col5 text-center"
        >
          Let's Chat About Innovations and Ideas
        </motion.span>
      </motion.div>
      <div className="xl:flex justify-center p-12 items-center w-full">
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          className="xl:w-[600px] w-full "
        >
          {Data.map((data, index) => (
            <ContactAddress data={data} key={index} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          className="xl:w-[600px] w-full "
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
