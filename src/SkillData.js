import html from "./image/html.png"
import CSS from "./image/css.png"
import js from "./image/javascript.png"
import c from "./image/c.png"
import cpp from "./image/cpp.png"
import MongoDB from "./image/mongodb.png"
import express from "./image/express.png"
import react from "./image/react.png"

import node from "./image/node-js.png"
import tailwind from "./image/tailwind-css.png";
import git from "./image/git.png"
import postman from "./image/postman.png"
import photoshop from "./image/photoshop.png"
import { PiFileCpp } from "react-icons/pi";
import { SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

const logo=[
html,CSS,js,c,cpp,MongoDB,express,react,node,tailwind
,git,postman,photoshop
]
const iconTab=[
    {
        title:"Rect Js",
        progress:76,
        logo:<GrReactjs />,

    },
    {
        title:"Tailwind CSS",
        progress:85,
        logo:<SiTailwindcss />
        ,

    },
    {
        title:"CPP(OOPS and DSA)",
        progress:60,
        logo:<PiFileCpp />
        ,

    }
]
export {iconTab,logo} ;