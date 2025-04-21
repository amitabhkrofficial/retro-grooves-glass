
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Track } from '../types/music';

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  queue: Track[];
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
  resumeTrack: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seekTo: (time: number) => void;
  setVolume: (volume: number) => void;
  addToQueue: (track: Track) => void;
  clearQueue: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}

interface AudioProviderProps {
  children: ReactNode;
}

export function AudioProvider({ children }: AudioProviderProps) {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [queue, setQueue] = useState<Track[]>([]);

  useEffect(() => {
    const audio = new Audio();
    setAudioElement(audio);

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('ended', () => {
      if (queue.length > 0) {
        nextTrack();
      } else {
        setIsPlaying(false);
      }
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (audioElement) {
      audioElement.volume = volume;
    }
  }, [volume, audioElement]);

  const playTrack = (track: Track) => {
    if (audioElement) {
      setCurrentTrack(track);
      audioElement.src = track.audioUrl;
      audioElement.play().catch(error => console.error("Playback failed:", error));
      setIsPlaying(true);
    }
  };

  const pauseTrack = () => {
    if (audioElement && isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  const resumeTrack = () => {
    if (audioElement && currentTrack && !isPlaying) {
      audioElement.play().catch(error => console.error("Resume failed:", error));
      setIsPlaying(true);
    }
  };

  const seekTo = (time: number) => {
    if (audioElement) {
      audioElement.currentTime = time;
      setCurrentTime(time);
    }
  };

  const addToQueue = (track: Track) => {
    setQueue(prevQueue => [...prevQueue, track]);
  };

  const clearQueue = () => {
    setQueue([]);
  };

  const nextTrack = () => {
    if (queue.length > 0) {
      const nextTrack = queue[0];
      setQueue(prevQueue => prevQueue.slice(1));
      playTrack(nextTrack);
    }
  };

  const prevTrack = () => {
    // This would ideally go back to the previous track
    // For simplicity, just restart the current track
    if (audioElement) {
      audioElement.currentTime = 0;
      setCurrentTime(0);
    }
  };

  const value = {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    queue,
    playTrack,
    pauseTrack,
    resumeTrack,
    nextTrack,
    prevTrack,
    seekTo,
    setVolume,
    addToQueue,
    clearQueue
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}
