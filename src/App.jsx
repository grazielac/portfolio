import Hero2 from "./components/Hero";
import Projects from "./components/Projects";
import About2 from "./components/About";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Graziela C | Software Developer";
  }, []);

  return (
    <div>
      <Hero2 />
      <Projects />
      <About2 />
    </div>
  );
}

export default App;
