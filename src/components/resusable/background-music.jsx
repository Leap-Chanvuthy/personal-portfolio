import React, { useRef, useState, useEffect } from 'react';
import { FaVolumeMute } from 'react-icons/fa';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/sounds/chill-guy.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={togglePlay}
        className={`${
          isPlaying ? "bg-dark" : "bg-primary"
        } fixed bottom-4 right-4 z-50 p-3 rounded-full text-white shadow-lg transition-colors`}
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <img
            src="/assets/chill-guy.png"
            className="w-10 h-10 animate-spin"
            alt="Playing music"
          />
        ) : (
          <FaVolumeMute size={24} />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
