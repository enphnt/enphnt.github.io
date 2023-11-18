import React from 'react';
import AppleMusic from './apple-music';
import SpotifyPlaylist from './spotify-playlist';
import YouTubePlaylist from './youtube-playlist';
import TabbedContent from '../tabbed-content';

const Playlist = ({ apple, youtube, spotify, title }) => {
  const tabs = [
    { label: 'Apple Music', content: <AppleMusic src={apple} title={title} /> },
    { label: 'Spotify', content: <SpotifyPlaylist src={spotify} title={title} /> },
    { label: 'YouTube', content: <YouTubePlaylist src={youtube} title={title} /> },
  ];

  return (
    <div style={{ padding: 8 }}>
      <br />
      <TabbedContent heading="P L A Y L I S T:" tabs={tabs} title={title} />
    </div>
  );
};

export default Playlist;
