import React, { useEffect } from "react";
import image from "../image/logo.png";
import image2 from "../image/logo-2.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  const nav=[
    "Home","Service","Skills","Project","Resume","Contact"
  ];
  const [mode, setmode] = useState(true);
  const [menu, setmenu] = useState(true);
  useEffect(() => {
    document.body.className = mode ? "darkTheme" : "lightTheme";
  }, [mode]);
  return (
    <div className="  sticky top-0 hover:shadow-col3 shadow-md bg-col1 z-[10] w-full overflow-hidde">
      <div className="w-full h-14   justify-around bg-col1  text-col5 text-3xl font-rubiq font-semibold hidden lg:flex  ">
        <div className="flex h-full cursor-pointer bg-col1">
          <img
            src={mode ? image : image2}
            alt="logo"
            className="w-13 p-1 ml-2 bg-col1 "
          />
          <span className="h-full p-2 bg-gradient-to-r from-col5 via-col2 to-col3 bg-clip-text text-transparent flex text-xl mt-2 ">
            Ritik <span className="ml-2">Kumar</span>
          </span>
        </div>
        <div>
          <ul className="flex h-full  p-2 pt-3 text-lg gap-2 ">
          {
                  nav.map(
                    (item,index)=>(
                      <Link to={`#${item}`} smooth>
                      <li key={index} className={`cursor-pointer  ${!mode?"hover:border hover:border-[#160e2e] hover:shadow-[#160e2e] ":" hover:text-col3 "} hover:shadow-sm  text-center  w-[90px] p-1`}>{item}</li>
                      </Link>
                    )
                  )
                }
          </ul>
        </div>

        <div
          className="mt-3 cursor-pointer"
          onClick={() => {
            setmode(!mode);
          }}
        >
          {mode ? <MdLightMode /> : <MdDarkMode />}
        </div>
      </div>

      <div className="">
        <div className="w-full h-12   justify-between bg-col1  text-col5 text-xl font-rubiq font-semibold flex lg:hidden">
          <div className=" flex h-full cursor-pointer">
            <img
              src={mode ? image : image2}
              alt="logo"
              className="w-11 h-11 p-1  ml-2 "
            />
            <span className="h-full p-2 bg-gradient-to-r from-col5 via-col2 to-col3 bg-clip-text text-transparent flex ">
              Ritik <span className="ml-2">Kumar</span>
            </span>
          </div>

          <div className="flex justify-between mr-6 gap-8">
            <div
              className="mt-3 cursor-pointer "
              onClick={() => {
                setmode(!mode);
              }}
            >
              {mode ? <MdLightMode  className="hover:bg-gradient-to-t from-col1 to-col3 rounded-full"/> : <MdDarkMode />}
            </div>
            <div className=" mt-3  cursor-pointer">
              {menu ? (
                <FiMenu
                  onClick={() => {
                    setmenu(!menu);
                  }}
                />
              ) : (
                <BiX
                  onClick={() => {
                    setmenu(!menu);
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className={` bg-col1 ${menu && "hidden"} relative`}>
          <div className="absolute top-1 right-2 bg-col1 text-col5 h-80 w-32 border bottom-2 sm:text-xl md:h-[700px] md:w-64 md:text-2xl sm:h-96 sm:w-44 text-sm border-col5  ">
            {!menu && (
              <ul className="p-4 ">
                {
                  nav.map(
                    (item)=>( <Link to={`#${item}`} smooth>
                      <li className={`cursor-pointer  ${!mode?"hover:border hover:border-[#160e2e] hover:shadow-[#160e2e] ":"hover:border hover:border-col3 hover:shadow-col3"} hover:shadow-sm    w-[100px] p-1`}>{item}</li></Link>
                    )
                  )
                }
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
