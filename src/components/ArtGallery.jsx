import React from "react";
import "../styles/ArtGallery.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const ArtGallery = () => {
  const allArt = [
    { src: "/assets/art/11th_grade.jpg", title: "11th grade" },
    { src: "/assets/art/anatomy.jpg", title: "anatomy" },
    { src: "/assets/art/animal.jpg", title: "animal" },
    { src: "/assets/art/cordyceps.jpg", title: "cordyceps" },
    { src: "/assets/art/dali.jpg", title: "dali" },
    { src: "/assets/art/dna.jpg", title: "dna" },
    { src: "/assets/art/elephant.jpg", title: "elephant" },
    { src: "/assets/art/fetus.jpg", title: "fetus" },
    { src: "/assets/art/fishy.jpg", title: "fish" },
    { src: "/assets/art/hands.jpg", title: "hands" },
    { src: "/assets/art/japan.jpg", title: "japan" },
    { src: "/assets/art/monolith.jpg", title: "monolith" },
    { src: "/assets/art/narcissus.jpg", title: "narcissus" },
    { src: "/assets/art/recursion.jpg", title: "recursion" },
    { src: "/assets/art/sachiel.jpg", title: "sachiel" },
    { src: "/assets/art/shoelaces.jpg", title: "shoelaces" },
    { src: "/assets/art/space.jpg", title: "space" }
  ];

  return (
    <div className="art-gallery-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">/ art gallery</span>
      </div>
      <FadeInSection delay="200ms">
        <div className="gallery-description">
          A collection of my digital and traditional artwork, exploring different styles and mediums.
        </div>
      </FadeInSection>
      <div className="gallery-grid">
        {allArt.map((art, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="gallery-card">
              <img src={art.src} alt={art.title} className="gallery-image" />
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
