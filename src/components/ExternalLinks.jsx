import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const ExternalLinks = ({ githubLink, openLink }) => {
  return (
    <span className="external-links">
      {githubLink && (
        <a className="github-icon" href={githubLink}>
          <GitHubIcon
            sx={{
              fontSize: 20,
              color: "inherit"
            }}
          />
        </a>
      )}
      {openLink && (
        <a className="open-icon" href={openLink}>
          <OpenInBrowserIcon
            sx={{
              fontSize: 25,
              color: "inherit"
            }}
          />
        </a>
      )}
    </span>
  );
};

export default ExternalLinks;
