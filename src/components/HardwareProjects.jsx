import React from "react";
import "../styles/Projects.css";
import "../styles/HardwareProjects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";

const hardwareProjects = {
  "Custom Build PC": {
    desc: "A high-performance white-themed PC build inspired by Rei Ayanami from Neon Genesis Evangelion.",
    techStack: "AMD Ryzen 7 5800X, RTX 4070 Ti, NZXT N7 B550, HYTE Y60",
    link: "/hardware/pc",
    image: "/assets/hardware/pc/images/cover.png"
  },
  "LED Sound Reactive Bracelet": {
    desc: "A wearable, sound-reactive LED bracelet that pulses to music in real-time, designed for music festivals.",
    techStack: "RP2040, WS2812B, MAX4466, LiPo",
    link: "/hardware/led-bracelet",
    image: "/assets/hardware/led-bracelet/cover.PNG"
  }
};

const HardwareProjects = () => {
  return (
    <div id="hardware-projects">
      <div className="section-header">
        <span className="section-title">/ hardware</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(hardwareProjects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <Link to={hardwareProjects[key]["link"]} className="project-card-link">
                <li className={`projects-card ${key === "Custom Build PC" || key === "LED Sound Reactive Bracelet" ? "transparent-card" : ""}`}>
                  {hardwareProjects[key]["image"] && (
                    <div className="project-image-container">
                      <img src={hardwareProjects[key]["image"]} alt={key} className="project-image" />
                    </div>
                  )}
                  {!hardwareProjects[key]["image"] && (
                    <div className="card-header">
                      <div className="folder-icon">
                        <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                      </div>
                    </div>
                  )}
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{hardwareProjects[key]["desc"]}</div>
                  <div className="full-log-link">Full project log</div>
                  <div className="card-tech">{hardwareProjects[key]["techStack"]}</div>
                </li>
              </Link>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HardwareProjects;
