
import { Track, Playlist, Artist } from '../types/music';
import { mockAudioUrls, mockAlbumCovers, artistImages } from './mockData';

export const mockTracks: Track[] = [
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

export const mockPlaylists: Playlist[] = [
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

export const mockArtists: Artist[] = [
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
