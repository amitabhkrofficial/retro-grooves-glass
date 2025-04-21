
import { Home, Radio, Disc, LayoutList, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="glassmorphism-dark w-16 md:w-52 h-full flex flex-col py-6">
      <div className="mb-8 px-4 hidden md:block">
        <h2 className="font-pixel text-xs text-white/80 tracking-wider">RETROGROOVES</h2>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          <li>
            <Link to="/" className="flex items-center p-2 rounded hover:bg-white/10 transition-colors group">
              <Home size={20} className="text-white/70 group-hover:text-retro-neon" />
              <span className="ml-3 text-white/70 group-hover:text-white hidden md:inline">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/explore" className="flex items-center p-2 rounded hover:bg-white/10 transition-colors group">
              <Radio size={20} className="text-white/70 group-hover:text-retro-neon" />
              <span className="ml-3 text-white/70 group-hover:text-white hidden md:inline">Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/albums" className="flex items-center p-2 rounded hover:bg-white/10 transition-colors group">
              <Disc size={20} className="text-white/70 group-hover:text-retro-neon" />
              <span className="ml-3 text-white/70 group-hover:text-white hidden md:inline">Albums</span>
            </Link>
          </li>
          <li>
            <Link to="/playlists" className="flex items-center p-2 rounded hover:bg-white/10 transition-colors group">
              <LayoutList size={20} className="text-white/70 group-hover:text-retro-neon" />
              <span className="ml-3 text-white/70 group-hover:text-white hidden md:inline">Playlists</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="flex items-center p-2 rounded hover:bg-white/10 transition-colors group">
              <Heart size={20} className="text-white/70 group-hover:text-retro-neon" />
              <span className="ml-3 text-white/70 group-hover:text-white hidden md:inline">Favorites</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="mt-auto px-4">
        <div className="retro-border rounded-md p-3 bg-gradient-to-br from-retro-purple/20 to-retro-teal/20 hidden md:block">
          <p className="text-xs text-white/70 mb-2 font-pixel">Upgrade to Pro</p>
          <p className="text-[10px] text-white/50">Get unlimited access to premium tracks</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
