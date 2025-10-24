import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { Track } from '../types/music';
import { toast } from "sonner";

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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.7);
  const [queue, setQueue] = useState<Track[]>([]);
  
  // Use ref to store latest queue value to avoid stale closures
  const queueRef = useRef<Track[]>([]);
  
  useEffect(() => {
    queueRef.current = queue;
  }, [queue]);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
      console.log("Audio metadata loaded, duration:", audio.duration);
    });

    audio.addEventListener('ended', () => {
      // Use ref to get latest queue value
      if (queueRef.current.length > 0) {
        const nextTrack = queueRef.current[0];
        setQueue(queueRef.current.slice(1));
        // Play the next track
        if (audioRef.current) {
          audioRef.current.src = nextTrack.audioUrl;
          audioRef.current.load();
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              setCurrentTrack(nextTrack);
              setIsPlaying(true);
            }).catch(error => {
              console.error("Auto-play next track failed:", error);
              setIsPlaying(false);
            });
          }
        }
      } else {
        setIsPlaying(false);
      }
    });

    audio.addEventListener('error', (e) => {
      const error = e.target as HTMLAudioElement;
      console.error("Audio error:", error.error);
      toast.error("Failed to play track. Please try another.");
      setIsPlaying(false);
    });

    audio.addEventListener('canplay', () => {
      console.log("Audio can play now");
    });

    audio.addEventListener('playing', () => {
      console.log("Audio is now playing");
      setIsPlaying(true);
    });

    return () => {
      audio.pause();
      audio.src = '';
      audio.remove();
    };
  }, []);

  const playTrack = (track: Track) => {
    if (audioRef.current) {
      console.log("Attempting to play track:", track.name, "URL:", track.audioUrl);
      
      // Stop any current playback first
      audioRef.current.pause();
      
      // Set the source
      audioRef.current.src = track.audioUrl;
      
      // Set volume before playing
      audioRef.current.volume = volume;
      
      // Pre-load the audio
      audioRef.current.load();
      
      // Try to play after a short delay to allow loading
      setTimeout(() => {
        const playPromise = audioRef.current?.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setCurrentTrack(track);
            setIsPlaying(true);
            toast.success(`Now playing: ${track.name}`);
          }).catch(error => {
            console.error("Playback failed:", error);
            toast.error("Couldn't play this track. Try another one.");
          });
        }
      }, 100);
    }
  };

  const pauseTrack = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resumeTrack = () => {
    if (audioRef.current && currentTrack && !isPlaying) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error("Resume failed:", error);
          toast.error("Failed to resume playback.");
        });
      }
    }
  };

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const addToQueue = (track: Track) => {
    setQueue(prevQueue => [...prevQueue, track]);
    toast.success(`Added ${track.name} to queue`);
  };

  const clearQueue = () => {
    setQueue([]);
    toast.info("Queue cleared");
  };

  const nextTrack = () => {
    if (queue.length > 0) {
      const nextTrack = queue[0];
      setQueue(prevQueue => prevQueue.slice(1));
      playTrack(nextTrack);
    }
  };

  const prevTrack = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
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
