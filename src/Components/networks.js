import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGitlab } from "@fortawesome/free-brands-svg-icons";

const Networks = ({ alignRight }) => {
  const iconStyles = alignRight ?
    { color: "#111" }
    : { mixBlendMode: "normal", color: "rgb(73, 73, 73)" };
  const social = () => [
    {
      name: "github",
      url: "http://github.com/enphnt",
      icon: <FontAwesomeIcon style={iconStyles} inverse size="lg" spinReverse={true} icon={faGithub} />
    },
    {
      name: "linkedin",
      url: "https://au.linkedin.com/in/enphnt",
      icon: <FontAwesomeIcon style={iconStyles} inverse size="lg" spinReverse={true} icon={faLinkedin} />
    },
    {
      name: "gitlab",
      url: "http://gitlab.com/enphnt",
      icon: <FontAwesomeIcon style={iconStyles} inverse size="lg" spinReverse={true} icon={faGitlab} />
    }
  ];

  const style = {
    display: "flex",
    justifyContent: alignRight ? "start" : "center",
    alignItems: "start",
    margin: "10px 0",
    padding: "10px 0",
  };

  const networks = social().map(network =>
    <a aria-label={network.url} href={network.url} key={network.name} style={{ paddingRight: 12, color: "#222", width: "48px", }}>
      <div style={{ padding: 10 }}>
        {network.icon}
      </div>
    </a>
  );

  return <div style={style}>
    {networks}
  </div>;
};

export default Networks;
