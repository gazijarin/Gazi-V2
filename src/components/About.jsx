import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am currently a <b>Software Engineer</b> at
      <a href="https://www.ads.google.com/"> Google</a>, where I help build
      autobidder models that make Google Search money. Previously, I was at{" "}
      <a href="https://www.aboutamazon.com/"> Amazon</a> and{" "}
      <a href="https://newsroom.pinterest.com/company/"> Pinterest.</a>
    </p>
  );
  const two = (
    <p>
      In my free time, I love making weird techy and artsy (sometimes both)
      things. I’m also nerdy about tech gadgets, love literary fiction, and
      play way too many battle royale games.
    </p>
  );

  const techStack = [
    "Machine Learning",
    "Python",
    "Typescript",
    "React.js",
    "Java",
    "Javascript ES6+",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Gazi Jarin" src={"/assets/me2.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
