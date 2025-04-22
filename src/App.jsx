import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar2 from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

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
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
