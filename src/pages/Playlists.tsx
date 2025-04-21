
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import MusicCard from '../components/MusicCard';
import NowPlaying from '../components/NowPlaying';
import { Track, Playlist } from '../types/music';
import { MusicAPI } from '../services/api';

const Playlists = () => {
  const [searchResults, setSearchResults] = useState<Track[] | null>(null);
  
  const { data: playlists, isLoading } = useQuery({
    queryKey: ['playlists'],
    queryFn: MusicAPI.getFeaturedPlaylists,
  });

  const handleSearchResults = (results: Track[]) => {
    setSearchResults(results);
  };

  const clearSearch = () => {
    setSearchResults(null);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-retro-dark via-retro-purple/20 to-retro-dark">
      <div className="flex flex-1 overflow-hidden">
        <div className="h-full">
          <SideBar />
        </div>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar onSearchResults={handleSearchResults} />
          
          <div className="flex-1 overflow-y-auto px-6 py-4 pb-24 no-scrollbar">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-pulse text-white font-retro">Loading...</div>
              </div>
            ) : searchResults ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-digital text-white">Search Results</h2>
                  <button 
                    onClick={clearSearch}
                    className="text-xs text-white/70 hover:text-white underline"
                  >
                    Clear
                  </button>
                </div>
                
                {searchResults.length === 0 ? (
                  <p className="text-white/70 text-center py-10">No results found. Try a different search term.</p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {searchResults.map(track => (
                      <MusicCard key={track.id} item={track} type="track" />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-digital text-retro-neon mb-4">Your Playlists</h2>
                  <div className="glassmorphism-dark p-6 rounded-lg mb-8">
                    <div className="flex items-center justify-center h-32">
                      <div className="text-center">
                        <p className="text-white mb-4">Create your own custom playlists</p>
                        <button className="retro-button border-retro-neon/30 hover:border-retro-neon">
                          + Create New Playlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-digital text-white mb-4">Featured Playlists</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {playlists?.map((playlist) => (
                      <MusicCard key={playlist.id} item={playlist} type="playlist" />
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-digital text-white mb-4">Recommended For You</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {playlists?.slice().reverse().map((playlist) => (
                      <MusicCard key={playlist.id} item={playlist} type="playlist" />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <NowPlaying />
    </div>
  );
};

export default Playlists;
