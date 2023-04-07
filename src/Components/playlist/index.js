import React, { useState } from 'react';
import AppleMusic from './apple-music';
import YouTubePlaylist from './youtube-playlist';

const TabbedContent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTabIndex, setHoveredTabIndex] = useState(null);

  const tabButtonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const tabButtonStyle = {
    wordWrap: "none",
    flex: '1 0 100px',
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    margin: '5px 7px',
    padding: '10px 10px',
    fontSize: '16px',
    borderRadius: '8px',
    boxSizing: "border-box",
    border: 'none',
    backgroundColor: 'lightgray',
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
    flex: '2 0 200px',
    backgroundColor: '#ffcc00',
    cursor: 'default',
    boxShadow: 'rgba(0, 0, 0, 0.09) 2px 3px 5px inset',
  };

  const tabContentStyle = {
    margin: '20px',
    padding: '20px',
    backgroundColor: '#ffcc00',
    borderRadius: '20px',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div>
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
      <div style={tabContentStyle}>{tabs[activeTab].content}</div>
    </div>
  );
};
const Playlist = ({ apple, youtube, title }) => {
  const tabs = [
    { label: 'Apple Music Playlist', content: <AppleMusic src={apple} title={title} /> },
    { label: 'YouTube Playlist', content: <YouTubePlaylist src={youtube} title={title} /> },
  ];

  return (
    <div>
      <sub style={{ fontWeight: 600 }}>P L A Y L I S T:</sub>
      <h2 style={{ marginTop: -4, paddingTop: 0 }}>{title}</h2>
      <TabbedContent tabs={tabs} />
    </div>
  );
};

export default Playlist;
