import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Art from "./components/Art";
import ArtGallery from "./components/ArtGallery";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import SidebarNav from "./components/SidebarNav";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import "./styles/Global.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <NavBar />
      <SidebarNav />
      <div id="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <About />
                <Experience />
                <Projects />
                <Art />
                <Credits />
              </>
            }
          />
          <Route path="/art" element={<ArtGallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
