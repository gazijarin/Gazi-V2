import React from "react";
import "../styles/Art.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";

const Art = () => {
  const topArt = [
    { src: "/assets/art/fishy.jpg", title: "fish" },
    { src: "/assets/art/dali.jpg", title: "dali" },
    { src: "/assets/art/japan.jpg", title: "japan" },
    { src: "/assets/art/space.jpg", title: "space" },
    { src: "/assets/art/11th_grade.jpg", title: "11th grade" },
    { src: "/assets/art/cordyceps.jpg", title: "cordyceps" }
  ];

  return (
    <div id="art">
      <div className="section-header">
        <span className="section-title">/ art</span>
      </div>
      <FadeInSection delay="200ms">
        <div className="art-description">
          A collection of my digital and traditional artwork, exploring different styles and mediums.
        </div>
      </FadeInSection>
      <div className="art-container">
        <div className="art-grid">
          {topArt.map((art, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div className="art-card">
                <img src={art.src} alt={art.title} className="art-image" />
              </div>
            </FadeInSection>
          ))}
        </div>
        <div className="see-more-container">
          <Link to="/art" className="see-more-button">
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Art;
