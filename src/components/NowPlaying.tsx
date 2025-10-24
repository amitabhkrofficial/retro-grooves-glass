
import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

const NowPlaying = () => {
  const { 
    currentTrack, 
    isPlaying, 
    currentTime,
    duration,
    volume,
    pauseTrack, 
    resumeTrack, 
    nextTrack,
    prevTrack,
    seekTo,
    setVolume
  } = useAudio();
  
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);
  
  // Format time from seconds to MM:SS
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      resumeTrack();
    }
  };
  
  // Toggle mute
  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };
  
  // Handle seeking
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekTo(parseFloat(e.target.value));
  };
  
  // If no track is playing, show a placeholder
  if (!currentTrack) {
    return (
      <div className="glassmorphism-dark fixed bottom-0 left-0 right-0 h-20 flex items-center justify-center">
        <p className="text-white/50 font-retro text-sm">Select a track to start playing</p>
      </div>
    );
  }
  
  return (
    <div className="glassmorphism-dark fixed bottom-0 left-0 right-0 p-4 flex flex-col">
      {/* Progress bar */}
      <div className="w-full mb-2">
        <input 
          type="range" 
          min="0" 
          max={duration || 100} 
          value={currentTime} 
          onChange={handleSeek}
          className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-retro-neon"
        />
      </div>
      
      {/* Controls and info */}
      <div className="flex items-center justify-between">
        {/* Track info */}
        <div className="flex items-center w-1/4">
          <div className="w-12 h-12 rounded mr-3 overflow-hidden retro-border">
            <img 
              src={currentTrack.albumArt} 
              alt={`${currentTrack.album} cover`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-digital text-white text-sm truncate">{currentTrack.name}</p>
            <p className="text-white/60 text-xs truncate">{currentTrack.artist}</p>
          </div>
        </div>
        
        {/* Play controls */}
        <div className="flex items-center">
          <button 
            onClick={prevTrack}
            className="mx-2 p-2 rounded-full hover:bg-white/10"
          >
            <SkipBack size={18} className="text-white/80" />
          </button>
          
          <button 
            onClick={togglePlayPause}
            className="mx-2 p-2 w-10 h-10 rounded-full bg-retro-neon/80 flex items-center justify-center"
          >
            {isPlaying ? (
              <Pause size={18} className="text-black" />
            ) : (
              <Play size={18} className="text-black ml-0.5" />
            )}
          </button>
          
          <button 
            onClick={nextTrack}
            className="mx-2 p-2 rounded-full hover:bg-white/10"
          >
            <SkipForward size={18} className="text-white/80" />
          </button>
        </div>
        
        {/* Volume and time */}
        <div className="flex items-center w-1/4 justify-end">
          <div className="text-xs text-white/70 mr-3 hidden sm:block">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          
          <button 
            onClick={toggleMute}
            className="p-2 rounded-full hover:bg-white/10"
          >
            {isMuted ? (
              <VolumeX size={16} className="text-white/70" />
            ) : (
              <Volume2 size={16} className="text-white/70" />
            )}
          </button>
          
          <div className="w-20 ml-1 hidden sm:block">
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
