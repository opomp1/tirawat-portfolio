import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar2 from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
// import ProjectsVideo from "./components/ProjectsVideo";
import Certification from "./components/Certification";
import Footer from "./components/Footer";

function App() {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark"))
  );

  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);

  return (
    <div data-theme={isdark ? "dark" : "light"}>
      <Navbar2 theme={isdark} toggleTheme={setIsdark} />
      <Home />
      <Project />
      {/* <ProjectsVideo /> */}
      <Skills />
      <Certification />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
