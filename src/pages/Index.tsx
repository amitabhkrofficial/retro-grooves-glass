
import { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import NowPlaying from '../components/NowPlaying';
import MusicCard from '../components/MusicCard';
import Visualizer from '../components/Visualizer';
import { MusicAPI } from '../services/api';
import { Track, Playlist } from '../types/music';

const Index = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [searchResults, setSearchResults] = useState<Track[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [playlistsData, tracksData] = await Promise.all([
          MusicAPI.getFeaturedPlaylists(),
          MusicAPI.getTrendingTracks()
        ]);
        
        setPlaylists(playlistsData);
        setTracks(tracksData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  // Handle search results
  const handleSearchResults = (results: Track[]) => {
    setSearchResults(results);
  };

  // Clear search results
  const clearSearch = () => {
    setSearchResults(null);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-retro-dark via-retro-purple/20 to-retro-dark">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="h-full">
          <SideBar />
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar onSearchResults={handleSearchResults} />
          
          <div className="flex-1 overflow-y-auto px-6 py-4 pb-24 no-scrollbar">
            {loading ? (
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
                {/* Visualizer */}
                <div className="mb-8">
                  <Visualizer />
                </div>
                
                {/* Featured Playlists */}
                <div className="mb-8">
                  <h2 className="text-xl font-digital text-white mb-4">Featured Playlists</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {playlists.map(playlist => (
                      <MusicCard key={playlist.id} item={playlist} type="playlist" />
                    ))}
                  </div>
                </div>
                
                {/* Trending Tracks */}
                <div>
                  <h2 className="text-xl font-digital text-white mb-4">Trending Tracks</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {tracks.map(track => (
                      <MusicCard key={track.id} item={track} type="track" />
                    ))}
                  </div>
                </div>

                {/* Retro vibe section */}
                <div className="mt-12 retro-border rounded-lg p-6 glassmorphism-light">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
                      <h2 className="font-pixel text-lg text-white mb-4">RETRO VIBES COLLECTION</h2>
                      <p className="text-white/70 mb-4">Explore our curated collection of synthwave, vaporwave, and retro electronic music that captures the essence of the 80s and early web aesthetics.</p>
                      <button className="retro-button border-retro-neon/30 hover:border-retro-neon">
                        Explore Collection
                      </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className="w-60 h-60 bg-gradient-to-br from-retro-purple via-retro-teal to-retro-pink rounded-lg rotate-3 animate-pulse-glow"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img src="https://images.unsplash.com/photo-1614149162883-504ce46d48a9?q=80&w=300&auto=format&fit=crop" alt="Retro cassette" className="w-48 rounded shadow-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Now Playing Bar - fixed at bottom */}
      <NowPlaying />
    </div>
  );
};

export default Index;
