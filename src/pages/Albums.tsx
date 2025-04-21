
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import NowPlaying from '../components/NowPlaying';
import MusicCard from '../components/MusicCard';
import { Track, Playlist } from '../types/music';
import { MusicAPI } from '../services/api';

// Create mock albums from our existing data
const generateAlbums = (tracks: Track[]): Playlist[] => {
  const albumMap = new Map<string, Track[]>();
  
  tracks.forEach(track => {
    if (!albumMap.has(track.album)) {
      albumMap.set(track.album, []);
    }
    albumMap.get(track.album)?.push(track);
  });
  
  const albums: Playlist[] = [];
  let id = 1;
  
  albumMap.forEach((tracks, albumName) => {
    if (tracks.length > 0) {
      albums.push({
        id: `album-${id++}`,
        name: albumName,
        description: `By ${tracks[0].artist}`,
        coverArt: tracks[0].albumArt,
        tracks: tracks
      });
    }
  });
  
  return albums;
};

const Albums = () => {
  const [searchResults, setSearchResults] = useState<Track[] | null>(null);
  const [albums, setAlbums] = useState<Playlist[]>([]);
  
  const { data: tracks, isLoading } = useQuery({
    queryKey: ['all-tracks'],
    queryFn: MusicAPI.getTrendingTracks,
  });
  
  useEffect(() => {
    if (tracks) {
      setAlbums(generateAlbums(tracks));
    }
  }, [tracks]);

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
                  <h2 className="text-xl font-digital text-retro-neon mb-4">Recently Added</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {albums.slice(0, 4).map((album) => (
                      <MusicCard key={album.id} item={album} type="playlist" />
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-digital text-white mb-4">All Albums</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {albums.map((album) => (
                      <MusicCard key={album.id} item={album} type="playlist" />
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

export default Albums;
