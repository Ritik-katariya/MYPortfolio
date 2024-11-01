import React from "react";
import { useState } from "react";
function ContactForm() {
    const [formData, setFormData] = useState({
        Name:"",Email:"",Subject:"",Message:""
    })

    function clickhandler(val) {
        const {value,name}=val.target;
        setFormData((pre)=>{return {
            ...pre,[name]:value
        }})
    }
    function Submit(e) {
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div className="w-full text-col5 font-mono">
      <form action="https://formspree.io/f/mdoqqqqw" method="POST" >
        <div className="flex max-xl:flex-col justify-center md:text-3xl sm:text-2xl text-xl text-col3 font-bold p-4">
          <label>
           
            Your Full Name<sup>*</sup><br />
            <input type="text" placeholder="Enter Full Name" onChange={clickhandler} value={formData.Name} name="Name" required className="text-xl text-col5 text-center bg-col4 xl:w-[280px]  w-full h-14 rounded-xl  mt-2 mb-4 placeholder-gray-200" />
          </label>
          <label>
           
            Email Address<sup>*</sup><br />
            <input type="email" placeholder="Enter Email" onChange={clickhandler} value={formData.Email} name="Email" required className="text-xl text-col5 text-center bg-col4 xl:w-[280px] w-full ml-2 h-14 rounded-xl  mt-2 mb-4 placeholder-gray-200" />
          </label>
        </div>
        <div className="flex max-xl:flex-col justify-around md:text-3xl text-xl text-col3 font-bold w-full">
          <label>
            
            Subject<sup>*</sup><br />
            <input type="text" placeholder="Enter Subject" onChange={clickhandler} value={formData.Subject} name="Subject" required className="text-xl text-col5 text-center bg-col4 xl:w-[580px] w-full h-14 rounded-xl mr-2 mt-2 mb-4 placeholder-gray-200" />
          </label>
        </div>
        <div className="flex max-xl:flex-col justify-around md:text-3xl text-xl text-col3 font-bold w-full">
        <label>
            
            Your Message<sup>*</sup><br />
            <textarea name="Message" onChange={clickhandler} value={formData.Message} placeholder="Enter Your Message " required className="text-xl text-col5 text-center bg-col4  xl:w-[580px] w-full h-32 rounded-xl mr-2 mt-2 mb-4  placeholder-gray-200"  ></textarea>
          </label>
            
        </div>
      <button  className="m-4 text-2xl text-col5 border-2 border-col4 hover:text-col3 hover:scale-[1.001] w-[250px] h-14 rounded-xl hover:border-col3" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
