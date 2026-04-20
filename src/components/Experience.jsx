import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
