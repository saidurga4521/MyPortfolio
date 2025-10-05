import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/skills";
import Experince from "./pages/Experince";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Connect from "./pages/Connect";
import Navbar from "./pages/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <div id="experience">
        <Experince />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Skills />
      <div id="education">
        <Education />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="connect">
        <Connect />
      </div>
    </>
  );
}

export default App;
