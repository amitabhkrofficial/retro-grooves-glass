
import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import MusicCard from '../components/MusicCard';
import NowPlaying from '../components/NowPlaying';
import SearchResults from '../components/SearchResults';
import { Track } from '../types/music';
import { MusicAPI } from '../services/api';

const Favorites = () => {
  const [searchResults, setSearchResults] = useState<Track[] | null>(null);
  const [favorites, setFavorites] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch some mock favorite data
  useEffect(() => {
    async function fetchFavorites() {
      try {
        setLoading(true);
        // In a real app, this would fetch user's favorites
        // For mock purposes, we'll use a subset of trending tracks
        const tracks = await MusicAPI.getTrendingTracks();
        setFavorites(tracks.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchFavorites();
  }, []);

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
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-pulse text-white font-retro">Loading...</div>
              </div>
            ) : searchResults ? (
              <SearchResults results={searchResults} onClearSearch={clearSearch} />
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-digital text-retro-neon mb-4">Your Favorite Tracks</h2>
                  {favorites.length === 0 ? (
                    <div className="glassmorphism-dark p-6 rounded-lg">
                      <p className="text-white text-center">You haven't added any favorites yet.</p>
                      <p className="text-white/70 text-center mt-2">Play some tracks and heart them to add to your favorites!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                      {favorites.map(track => (
                        <MusicCard key={track.id} item={track} type="track" />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-digital text-white mb-4">Recently Played</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {favorites.slice().reverse().map(track => (
                      <MusicCard key={track.id} item={track} type="track" />
                    ))}
                  </div>
                </div>

                <div className="retro-border rounded-lg p-6 glassmorphism-light mt-8">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
                      <h2 className="font-pixel text-lg text-white mb-4">CREATE YOUR COLLECTION</h2>
                      <p className="text-white/70 mb-4">Build your perfect music collection by adding your favorite tracks. Discover new music based on your listening habits.</p>
                      <button className="retro-button border-retro-neon/30 hover:border-retro-neon">
                        Browse Recommended
                      </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="w-60 h-60 retro-border overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-retro-purple via-retro-neon to-retro-pink animate-pulse-slow"></div>
                      </div>
                    </div>
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

export default Favorites;
