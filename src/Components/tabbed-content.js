import React, { useState } from 'react';

const TabbedContent = ({ tabs, title, heading }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTabIndex, setHoveredTabIndex] = useState(null);

  const tabButtonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const tabButtonStyle = {
    wordWrap: "none",
    flex: '0 0 40px',
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    margin: 2,
    padding: '10px 10px',
    fontSize: 14,
    borderRadius: 8,
    boxSizing: "border-box",
    border: 'none',
    backgroundColor: 'white',
    transition: 'flex 0.3s ease-in-out',
    opacity: .95
  };

  const hoveredTabButtonStyle = {
    ...tabButtonStyle,
    backgroundColor: "rgb(46, 107, 77)",
    color: "white",
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.3)',

  };

  const activeTabButtonStyle = {
    ...tabButtonStyle,
    flex: '2 0 70px',
    cursor: 'default',
    backgroundColor: "rgba(1, 151, 88, 0.32)",
    boxShadow: 'rgba(0, 0, 37, 0.6) 2px 2px 5px inset',
  };

  const tabContentStyle = {
    margin: '0px',
    padding: 20,
    backgroundColor: 'gainsboro',
    borderRadius: 2,
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div>
      <div style={tabContentStyle}>
        <sub style={{ fontWeight: 600 }}>{heading}</sub>
        <h1 style={{ marginTop: -2, paddingTop: 0 }}>{title}</h1>
        <br />
        <div style={tabButtonsStyle}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              onMouseEnter={() => setHoveredTabIndex(index)}
              onMouseLeave={() => setHoveredTabIndex(null)}
              style={
                index === activeTab
                  ? activeTabButtonStyle
                  : index === hoveredTabIndex
                    ? hoveredTabButtonStyle
                    : tabButtonStyle
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
        {tabs[activeTab].content}</div>
    </div>
  );
};

/* example usage:
  const Playlist = ({ apple, youtube, spotify, title }) => {
    const tabs = [
      { label: 'Apple Music', content: <AppleMusic src={apple} title={title} /> },
      { label: 'Spotify', content: <SpotifyPlaylist src={spotify} title={title} /> },
      { label: 'YouTube', content: <YouTubePlaylist src={youtube} title={title} /> },
    ];

    return (
      <div style={{ padding: 8 }}>
        <br />
        <TabbedContent tabs={tabs} title={title} />
      </div>
    );
  };
*/

export default TabbedContent;
