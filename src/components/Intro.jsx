import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import ParticlePortrait from "./ParticlePortrait";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-simulation">
        <ParticlePortrait />
      </div>
      <div className="intro-block">
        <div className="intro-title">
          {"hi, "}
          <span className="intro-name">
            <TypeAnimation
              sequence={["gazi"]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          {" here."}
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection>
          <div className="intro-desc">
            Software engineer and artist in New York City. I build ML models at
            Google by day and make strange little projects at the intersection
            of tech and art by night. Occasionally both happen at the same time.
          </div>
          <a href="mailto:gazijarin@gmail.com" className="intro-contact">
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;
