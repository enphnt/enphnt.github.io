import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGitlab } from "@fortawesome/free-brands-svg-icons";



const Networks = ({ alignRight }) => {
  const iconStyles = alignRight ?
    { color: "#ccc", mixBlendMode: "difference" }
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
    margin: alignRight ? "60px 0" : "10px 0",
    padding: alignRight ? "60px 0" : "10px 0",
  };

  const networks = social().map(network =>
    <a href={network.url} key={network.name} style={{ padding: 2, color: "#222", width: "50px", }}>
      {network.icon}
    </a>
  );

  return <div style={style}>
    {networks}
  </div>;
};

export default Networks;
