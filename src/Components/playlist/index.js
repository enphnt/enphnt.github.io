import React, { useState } from 'react';
import AppleMusic from './apple-music';
import SpotifyPlaylist from './spotify-playlist';
import YouTubePlaylist from './youtube-playlist';

const TabbedContent = ({ tabs, title }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTabIndex, setHoveredTabIndex] = useState(null);

  const tabButtonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const tabButtonStyle = {
    wordWrap: "none",
    flex: '0 1 15px',
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    margin: 2,
    padding: '10px 10px',
    fontSize: 14,
    borderRadius: 8,
    boxSizing: "border-box",
    border: 'none',
    backgroundColor: 'white',
    boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.3)',
    transition: 'flex 0.3s ease-in-out',
    opacity: .95
  };

  const hoveredTabButtonStyle = {
    ...tabButtonStyle,
    backgroundColor: "rgb(46, 107, 77)",
    color: "white"
  };

  const activeTabButtonStyle = {
    ...tabButtonStyle,
    flex: '2 0 70px',
    backgroundColor: 'white',
    cursor: 'default',
    boxShadow: 'rgba(0, 0, 0, 0.09) 2px 3px 5px inset',
  };

  const tabContentStyle = {
    margin: '0px',
    padding: 20,
    backgroundColor: '#ffcc00',
    borderRadius: 20,
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div>
      <div style={tabContentStyle}>
        <sub style={{ fontWeight: 600 }}>P L A Y L I S T:</sub>
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
const Playlist = ({ apple, youtube, spotify, title }) => {
  const tabs = [
    { label: 'Apple Music', content: <AppleMusic src={apple} title={title} /> },
    { label: 'Spotify', content: <SpotifyPlaylist src={spotify} title={title} /> },
    { label: 'YouTube', content: <YouTubePlaylist src={youtube} title={title} /> },
  ];

  console.log("title", title);

  return (
    <div style={{ padding: 8 }}>
      <br />
      <TabbedContent tabs={tabs} title={title} />
    </div>
  );
};

export default Playlist;
