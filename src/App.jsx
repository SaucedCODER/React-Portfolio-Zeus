import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LogoRotating from "./components/LogoRotating";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <LogoRotating />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
