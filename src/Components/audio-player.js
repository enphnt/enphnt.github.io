import React, { useState, useEffect } from 'react';

const pad = (n) => (n < 10 ? "0" : "") + n;
const formatTime = (timeInSeconds) => {
  const date = new Date(timeInSeconds * 1000);
  const minutes = date.getUTCMinutes();
  const seconds = date.getSeconds();
  return `${pad(minutes)}:${pad(seconds)}`;
};

const AudioPlayer = ({ src, songName = '', artist = '', image }) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [hover, setHover] = useState(false);
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    bigContainer: {
      flex: "3 1 400px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      flexDirection: 'column',
      marginLeft: 8,
      marginRight: 8,
    },
    paper: {
      padding: 16,
      margin: '1.5em 0px',
      display: 'flex',
      flexWrap: "wrap",
      alignItems: 'center',
      background: "var(--clr-grey-10)",
      borderRadius: 15,
      justifyContent: 'center',
      boxShadow:
        '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    },
    playButton: {
      normal: {
        transition: "all .1s ease-in",
        fontSize: '100px',
        width: 250,
        height: 250,
        borderRadius: 10,
        textAlign: "right",
        margin: 10,
        overflow: "hidden",
        background: "transparent",
        padding: "40px 20px 0 10px",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        color: "white",
        transform: "rotate(-2deg)",
        border: "solid .5mm black",
        boxShadow:
          `0px 3px 1px -3px rgba(0,0,0,0.2),
           0px 2px 2px 0px rgba(0,0,0,0.14),
           0px 1px 5px 0px rgba(0,0,0,0.12)`,
      },
      hover: {
        transform: "scale(1.02)",
        fontSize: 102,
        boxShadow: "none",
      }
    },
    slider: {
      WebkitAppearance: "none",
      width: "100%",
      height: "16px",
      border: "solid 3px var(--clr-grey-4)",
      backgroundColor: "#fff",
      color: "black",
      borderRadius: "7px",
      outline: "none",
      opacity: "0.7",
      transition: "opacity .2s",
      cursor: "pointer"
    },
    sliderSml: {
      WebkitAppearance: "none",
      width: "100%",
      maxWidth: 180,
      height: "10px",
      backgroundColor: "#777",
      border: "solid 1px black",
      borderRadius: "7px",
      outline: "none",
      opacity: "0.7",
      transition: "opacity .2s",
      cursor: "pointer",
      marginBottom: 16
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAudio(new Audio(src));
    }
  }, [src]);

  const handlePlaybackRateChange = (e) => {
    setPlaybackRate(e.target.value);
    audio.playbackRate = e.target.value;
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audio.volume = e.target.value;
  };

  const togglePlay = () => {
    setDuration(audio.duration);

    if (audio.paused) {
      audio.play();
      setPlaying(true);
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      return;
    }
    audio.pause();
    setPlaying(false);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.paper}>
        <div style={styles.container}>
          <div>
            <button
              onClick={togglePlay}
              onMouseEnter={() => {
                setHover("play");
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              style={{
                ...styles.playButton.normal,
                ...(hover === "play" || playing ?
                  styles.playButton.hover
                  : null)
              }}
            >
              {playing ? '⍿⍿' : '▷'}
            </button>
          </div>
          <h5>Playback Speed: ({playbackRate}x)</h5>
          <input
            type="range"
            min="0.15"
            max="7.5"
            step="0.01"
            value={playbackRate}
            onChange={handlePlaybackRateChange}
            style={styles.sliderSml}
          />
        </div>
        <div style={styles.bigContainer}>
          {
            playing ?
              /* eslint-disable jsx-a11y/no-distracting-elements */
              <marquee> <h1>{songName}</h1></marquee>
              /* eslint-enable jsx-a11y/no-distracting-elements */
              : <h1>{songName}</h1>
          }
          <h3>{artist}</h3>
          <h2>{" "}</h2>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) => {
              setCurrentTime(e.target.value);
              audio.currentTime = e.target.value;
            }}
            style={styles.slider}
          />
          <span style={{ alignSelf: "end", paddingBottom: 16 }}>
            {
              formatTime(currentTime)
            } /{' '}
            {
              formatTime(duration - currentTime)
            }
          </span>
          <div style={{ alignSelf: "end" }}>
            <h5>Volume:</h5>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              style={styles.sliderSml}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
