import { Track, Playlist, Artist } from '../types/music';

// Updated audio sources using the Free Music Archive API samples
const mockAudioUrls = [
  'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
  'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
  'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3',
  'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Solo_Guitar.mp3',
  'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_07_-_Downfall.mp3',
  'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Creative_Commons/Ketsa/Raising_Frequency/Ketsa_-_08_-_Multiverse.mp3'
];

// Placeholder images and mock data
const mockAlbumCovers = [
  'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200&auto=format&fit=crop'
];

const artistImages = [
  'https://images.unsplash.com/photo-1549213783-8284d0336c4f?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593697972672-b1c1909be7f9?q=80&w=200&auto=format&fit=crop'
];

// Mock data with updated audio sources
const mockTracks: Track[] = [
  {
    id: '1',
    name: 'Night Owl',
    artist: 'Broke For Free',
    album: 'Directionless EP',
    albumArt: mockAlbumCovers[0],
    audioUrl: mockAudioUrls[0],
    duration: 185
  },
  {
    id: '2',
    name: 'Enthusiast',
    artist: 'Tours',
    album: 'Enthusiast',
    albumArt: mockAlbumCovers[1],
    audioUrl: mockAudioUrls[1],
    duration: 221
  },
  {
    id: '3',
    name: 'Shipping Lanes',
    artist: 'Chad Crouch',
    album: 'Arps',
    albumArt: mockAlbumCovers[2],
    audioUrl: mockAudioUrls[2],
    duration: 197
  },
  {
    id: '4',
    name: 'Solo Guitar',
    artist: 'Podington Bear',
    album: 'Solo Instruments',
    albumArt: mockAlbumCovers[3],
    audioUrl: mockAudioUrls[3],
    duration: 210
  },
  {
    id: '5',
    name: 'Downfall',
    artist: 'Kai Engel',
    album: 'Satin',
    albumArt: mockAlbumCovers[4],
    audioUrl: mockAudioUrls[4],
    duration: 245
  },
  {
    id: '6',
    name: 'Multiverse',
    artist: 'Ketsa',
    album: 'Raising Frequency',
    albumArt: mockAlbumCovers[5],
    audioUrl: mockAudioUrls[5],
    duration: 178
  },
  {
    id: '7',
    name: 'Enthusiast (Remix)',
    artist: 'Tours',
    album: 'Enthusiast',
    albumArt: mockAlbumCovers[1],
    audioUrl: mockAudioUrls[1],
    duration: 203
  },
  {
    id: '8',
    name: 'Night Owl (Extended)',
    artist: 'Broke For Free',
    album: 'Directionless EP',
    albumArt: mockAlbumCovers[0],
    audioUrl: mockAudioUrls[0],
    duration: 192
  }
];

const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Retro Gaming Mix',
    description: 'Perfect tracks for your gaming sessions',
    coverArt: mockAlbumCovers[0],
    tracks: mockTracks.slice(0, 4)
  },
  {
    id: '2',
    name: 'Synthwave Classics',
    description: 'The best of retro-futuristic sounds',
    coverArt: mockAlbumCovers[1],
    tracks: mockTracks.slice(2, 6)
  },
  {
    id: '3',
    name: 'Pixel Nostalgia',
    description: '8-bit inspired tracks',
    coverArt: mockAlbumCovers[2],
    tracks: mockTracks.slice(1, 5)
  }
];

const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Neon Dreams',
    image: artistImages[0],
    genres: ['Synthwave', 'Electronic']
  },
  {
    id: '2',
    name: 'Arcade Heroes',
    image: artistImages[1],
    genres: ['Chiptune', '8-bit']
  },
  {
    id: '3',
    name: 'Data Flow',
    image: artistImages[2],
    genres: ['Ambient', 'Electronic']
  },
  {
    id: '4',
    name: 'Analog Wave',
    image: artistImages[3],
    genres: ['Synthpop', 'Retrowave']
  }
];

// API service class
export class MusicAPI {
  // Get featured playlists
  static async getFeaturedPlaylists(): Promise<Playlist[]> {
    // In a real app, this would fetch from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPlaylists);
      }, 500);
    });
  }

  // Get trending tracks
  static async getTrendingTracks(): Promise<Track[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTracks);
      }, 500);
    });
  }

  // Get popular artists
  static async getPopularArtists(): Promise<Artist[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockArtists);
      }, 500);
    });
  }

  // Search tracks
  static async searchTracks(query: string): Promise<Track[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = mockTracks.filter(track => 
          track.name.toLowerCase().includes(query.toLowerCase()) || 
          track.artist.toLowerCase().includes(query.toLowerCase()) ||
          track.album.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filtered);
      }, 300);
    });
  }

  // Get track by id
  static async getTrackById(id: string): Promise<Track | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const track = mockTracks.find(t => t.id === id) || null;
        resolve(track);
      }, 200);
    });
  }

  // Get playlist by id
  static async getPlaylistById(id: string): Promise<Playlist | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const playlist = mockPlaylists.find(p => p.id === id) || null;
        resolve(playlist);
      }, 200);
    });
  }
}
