
import { useState } from 'react';
import { Search } from 'lucide-react';
import { MusicAPI } from '../services/api';
import { Track } from '../types/music';
import { useAudio } from '../context/AudioContext';

interface TopBarProps {
  onSearchResults: (tracks: Track[]) => void;
}

const TopBar = ({ onSearchResults }: TopBarProps) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { currentTrack } = useAudio();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsSearching(true);
    try {
      const results = await MusicAPI.searchTracks(query);
      onSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="glassmorphism-dark sticky top-0 z-10 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-digital text-retro-neon animate-pulse-glow mr-4">RetroGrooves</h1>
        {currentTrack && (
          <div className="hidden md:flex items-center">
            <div className="w-8 h-8 rounded-sm overflow-hidden mr-2">
              <img 
                src={currentTrack.albumArt} 
                alt={`${currentTrack.album} cover`}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-sm">
              <p className="font-digital text-white truncate max-w-[150px]">{currentTrack.name}</p>
              <p className="text-xs text-white/60 truncate max-w-[150px]">{currentTrack.artist}</p>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSearch} className="relative w-full max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tracks, artists..."
            className="w-full py-2 px-4 pl-10 rounded bg-black/30 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-retro-neon"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={16} className="text-white/40" />
          </div>
        </div>
        <button 
          type="submit" 
          disabled={isSearching}
          className="hidden"
        >
          Search
        </button>
      </form>
      
      <div className="flex items-center">
        <button className="retro-button text-sm">Login</button>
      </div>
    </div>
  );
};

export default TopBar;
