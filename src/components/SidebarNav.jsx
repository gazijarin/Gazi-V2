import React from "react";

import "../styles/SidebarNav.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

const SidebarNav = () => {
  const links = [
    <a key="1" href="/#intro">/home</a>,
    <a key="2" href="/#about">/about</a>,
    <a key="3" href="/#experience">/experience</a>,
    <a key="4" href="/#projects">/software-creations</a>,
    <a key="5" href="/#art">/art</a>
  ];

  return (
    <div className="sidebar-nav">
      {!isMobile && (
        <div className="sidebar-links">
          {links.map((link, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div>{link}</div>
            </FadeInSection>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarNav;
