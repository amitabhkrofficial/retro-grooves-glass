
// Types for the music application

export interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  audioUrl: string;
  duration: number;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverArt: string;
  tracks: Track[];
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
}
