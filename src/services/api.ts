
import { Track, Playlist, Artist } from '../types/music';
import { mockTracks, mockPlaylists, mockArtists } from '../data/mockMusic';

export class MusicAPI {
  static async getFeaturedPlaylists(): Promise<Playlist[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPlaylists);
      }, 500);
    });
  }

  static async getTrendingTracks(): Promise<Track[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTracks);
      }, 500);
    });
  }

  static async getPopularArtists(): Promise<Artist[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockArtists);
      }, 500);
    });
  }

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

  static async getTrackById(id: string): Promise<Track | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const track = mockTracks.find(t => t.id === id) || null;
        resolve(track);
      }, 200);
    });
  }

  static async getPlaylistById(id: string): Promise<Playlist | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const playlist = mockPlaylists.find(p => p.id === id) || null;
        resolve(playlist);
      }, 200);
    });
  }
}
