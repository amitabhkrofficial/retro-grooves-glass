
import { Track, Playlist, Artist } from '../types/music';

// Placeholder images and mock data since we're using a fake API
// In a real implementation, these would come from the actual API
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

// We'll use Jamendo API for this project - generating mock data first
// In a real implementation, we'd fetch this data from Jamendo API endpoints

const mockAudioUrls = [
  'https://cdn.freesound.org/previews/624/624642_13710561-lq.mp3',
  'https://cdn.freesound.org/previews/624/624693_13710561-lq.mp3',
  'https://cdn.freesound.org/previews/624/624717_13710561-lq.mp3',
  'https://cdn.freesound.org/previews/659/659599_12829118-lq.mp3',
  'https://cdn.freesound.org/previews/678/678883_5674468-lq.mp3',
  'https://cdn.freesound.org/previews/670/670053_1089955-lq.mp3'
];

// Mock data for development and testing
const mockTracks: Track[] = [
  {
    id: '1',
    name: 'Retro Synth Wave',
    artist: 'Neon Dreams',
    album: 'Digital Sunset',
    albumArt: mockAlbumCovers[0],
    audioUrl: mockAudioUrls[0],
    duration: 185
  },
  {
    id: '2',
    name: 'Pixel Rain',
    artist: 'Arcade Heroes',
    album: '8-Bit Memories',
    albumArt: mockAlbumCovers[1],
    audioUrl: mockAudioUrls[1],
    duration: 221
  },
  {
    id: '3',
    name: 'Midnight Drive',
    artist: 'Neon Dreams',
    album: 'Digital Sunset',
    albumArt: mockAlbumCovers[0],
    audioUrl: mockAudioUrls[2],
    duration: 197
  },
  {
    id: '4',
    name: 'Lost Signals',
    artist: 'Data Flow',
    album: 'Transmission',
    albumArt: mockAlbumCovers[2],
    audioUrl: mockAudioUrls[3],
    duration: 210
  },
  {
    id: '5',
    name: 'Cassette Dreams',
    artist: 'Analog Wave',
    album: 'Rewind',
    albumArt: mockAlbumCovers[3],
    audioUrl: mockAudioUrls[4],
    duration: 245
  },
  {
    id: '6',
    name: 'Static Memories',
    artist: 'The Glitchers',
    album: 'Broken Code',
    albumArt: mockAlbumCovers[4],
    audioUrl: mockAudioUrls[5],
    duration: 178
  },
  {
    id: '7',
    name: 'CRT Glow',
    artist: 'Arcade Heroes',
    album: '8-Bit Memories',
    albumArt: mockAlbumCovers[1],
    audioUrl: mockAudioUrls[2],
    duration: 203
  },
  {
    id: '8',
    name: 'Space Highway',
    artist: 'Neon Dreams',
    album: 'Digital Sunset',
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
