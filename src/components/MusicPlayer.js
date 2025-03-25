import React, { useState, useRef } from "react";
import "./MusicPlayer.css";
import songs from "../data";

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const prevSongHandler = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(false);
  };

  return (
    <div className="music-player">
      <div className="cover">
        <img src={currentSong.cover} alt={currentSong.title} />
      </div>
      <h2>{currentSong.title}</h2>
      <h4>{currentSong.artist}</h4>

      <audio ref={audioRef} src={currentSong.src} />

      <div className="controls">
        <button onClick={prevSongHandler}>
          <i className="fas fa-backward"></i>
        </button>
        <button onClick={playPauseHandler}>
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
        <button onClick={nextSongHandler}>
          <i className="fas fa-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
