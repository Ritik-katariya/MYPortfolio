import "./App.css";
import Header from "./component/Header";
import Herro from "./component/Herro";
import Slide from "./component/Slide";
import Service from "./component/Service";
import Skills from "./Skills";
import ArcReactor from "./component/ArcReactor";
import Project from "./component/Project";
import Resume from "./component/Resume";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { Cursor } from "react-simple-typewriter";
import CircleFollower from "./component/FireTail";

function App() {
  return (
    <div className="w-full  text-col5 bg-col1  flex flex-col items-center  m-0 p-0 cursor-fancy">
      <div className="m-0 p-0  ">
        <Header></Header>
        <Herro />
        <ArcReactor></ArcReactor>
        <Slide></Slide>
        <Service />
        <Skills/>
        <Project/>
        <Resume/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <CircleFollower />
      </div>
    </div>
  );
}
export default App;
