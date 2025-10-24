import MusicCard from './MusicCard';
import { Track } from '../types/music';

interface SearchResultsProps {
  results: Track[] | null;
  onClearSearch: () => void;
}

const SearchResults = ({ results, onClearSearch }: SearchResultsProps) => {
  if (!results) return null;

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-digital text-white">Search Results</h2>
        <button 
          onClick={onClearSearch}
          className="text-xs text-white/70 hover:text-white underline"
        >
          Clear
        </button>
      </div>
      
      {results.length === 0 ? (
        <p className="text-white/70 text-center py-10">No results found. Try a different search term.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {results.map(track => (
            <MusicCard key={track.id} item={track} type="track" />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResults;
