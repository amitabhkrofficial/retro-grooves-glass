
import { Play, ListPlus } from 'lucide-react';
import { Track, Playlist } from '../types/music';
import { useAudio } from '../context/AudioContext';
import { toast } from 'sonner';

interface MusicCardProps {
  item: Track | Playlist;
  type: 'track' | 'playlist';
}

const MusicCard = ({ item, type }: MusicCardProps) => {
  const { playTrack, currentTrack, isPlaying, pauseTrack, resumeTrack, addToQueue } = useAudio();
  
  const handlePlay = () => {
    if (type === 'track') {
      const track = item as Track;
      if (currentTrack?.id === track.id) {
        isPlaying ? pauseTrack() : resumeTrack();
      } else {
        playTrack(track);
      }
    } else if (type === 'playlist') {
      const playlist = item as Playlist;
      if (playlist.tracks.length > 0) {
        playTrack(playlist.tracks[0]);
        // Add the rest of the tracks to the queue
        playlist.tracks.slice(1).forEach(track => {
          addToQueue(track);
        });
        toast.success(`Playing playlist: ${playlist.name}`);
      }
    }
  };

  const handleAddToQueue = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (type === 'track') {
      addToQueue(item as Track);
    } else if (type === 'playlist') {
      const playlist = item as Playlist;
      playlist.tracks.forEach(track => {
        addToQueue(track);
      });
      toast.success(`Added ${playlist.name} to queue`);
    }
  };
  
  const isCurrentlyPlaying = type === 'track' && currentTrack?.id === item.id && isPlaying;
  
  const image = type === 'track' 
    ? (item as Track).albumArt 
    : (item as Playlist).coverArt;
    
  const title = type === 'track' 
    ? (item as Track).name 
    : (item as Playlist).name;
    
  const subtitle = type === 'track' 
    ? (item as Track).artist
    : `${(item as Playlist).tracks.length} tracks`;

  return (
    <div className="glassmorphism rounded-lg overflow-hidden transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-retro-neon/10 group">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-square object-cover" 
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={handlePlay}
            className="w-12 h-12 rounded-full bg-retro-neon/80 flex items-center justify-center shadow-lg hover:bg-retro-neon transition-colors"
          >
            {isCurrentlyPlaying ? (
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-1 h-4 bg-black mx-0.5 animate-pulse"></div>
                <div className="w-1 h-4 bg-black mx-0.5 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            ) : (
              <Play size={20} className="text-black ml-1" />
            )}
          </button>
          <button
            onClick={handleAddToQueue}
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center hover:bg-retro-purple/80 transition-colors"
          >
            <ListPlus size={16} className="text-white" />
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-digital text-white truncate">{title}</h3>
        <p className="text-xs text-white/60 truncate">{subtitle}</p>
      </div>
    </div>
  );
};

export default MusicCard;
