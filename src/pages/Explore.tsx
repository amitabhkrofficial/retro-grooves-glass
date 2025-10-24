
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import MusicCard from '../components/MusicCard';
import NowPlaying from '../components/NowPlaying';
import SearchResults from '../components/SearchResults';
import { Track } from '../types/music';
import { MusicAPI } from '../services/api';

const Explore = () => {
  const [searchResults, setSearchResults] = useState<Track[] | null>(null);
  
  const { data: artists, isLoading } = useQuery({
    queryKey: ['artists'],
    queryFn: MusicAPI.getPopularArtists,
  });
  
  const { data: tracks } = useQuery({
    queryKey: ['trending-tracks'],
    queryFn: MusicAPI.getTrendingTracks,
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
              <SearchResults results={searchResults} onClearSearch={clearSearch} />
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-xl font-digital text-retro-neon mb-4">Explore New Music</h2>
                  <div className="glassmorphism-dark p-6 rounded-lg">
                    <p className="text-white mb-4">Discover new music across different genres and eras</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {['Synthwave', 'Retrowave', 'Chillwave', 'Vaporwave'].map((genre) => (
                        <div key={genre} className="aspect-square relative overflow-hidden rounded-lg glassmorphism-light hover-scale cursor-pointer group">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="font-pixel text-white text-center p-4 z-10">{genre}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-digital text-white mb-4">Popular Artists</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {artists?.map((artist) => (
                      <div key={artist.id} className="glassmorphism rounded-lg overflow-hidden transition-all hover:translate-y-[-5px] group">
                        <div className="relative">
                          <img 
                            src={artist.image} 
                            alt={artist.name} 
                            className="w-full aspect-square object-cover" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        </div>
                        <div className="p-3">
                          <h3 className="text-sm font-digital text-white truncate">{artist.name}</h3>
                          <p className="text-xs text-white/60 truncate">{artist.genres.join(', ')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {tracks && (
                  <div className="mb-8">
                    <h2 className="text-xl font-digital text-white mb-4">Trending Right Now</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                      {tracks.slice(0, 6).map((track) => (
                        <MusicCard key={track.id} item={track} type="track" />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <NowPlaying />
    </div>
  );
};

export default Explore;
