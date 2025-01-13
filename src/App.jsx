import { useState } from "react";
import "./App.css";
import Nav from "../src/components/nav/nav";
import Hero from "../src/components/hero/hero";
import AboutMe from "./components/about/aboutMe";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Index from "./components/projects/projectDetails";
import Feedback from "./components/feedback/feedback";
import Goals from "./components/goals/goals";
import Contact from "./components/contact/contact";
function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      {/* <div className="wrapper"> */}
      <Skills />
      {/* </div> */}
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Feedback />
      <Goals />
      <Contact />
      {openModal.state && (
        <Index openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
}

export default App;
