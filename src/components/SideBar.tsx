
import { Home, Search, Disc, LayoutList, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper to determine if a link is active
  const isActive = (path: string) => {
    return currentPath === path;
  };

  // Helper to get the appropriate classes for a nav item
  const getNavItemClasses = (path: string) => {
    const baseClasses = "flex items-center p-2 rounded hover:bg-white/10 transition-colors group";
    return isActive(path) 
      ? `${baseClasses} bg-white/10` 
      : baseClasses;
  };
  
  // Helper to get the appropriate classes for an icon
  const getIconClasses = (path: string) => {
    const baseClasses = "group-hover:text-retro-neon";
    return isActive(path) 
      ? `text-retro-neon ${baseClasses}` 
      : `text-white/70 ${baseClasses}`;
  };

  // Helper to get the appropriate classes for text
  const getTextClasses = (path: string) => {
    const baseClasses = "ml-3 group-hover:text-white hidden md:inline";
    return isActive(path) 
      ? `text-white ${baseClasses}` 
      : `text-white/70 ${baseClasses}`;
  };

  return (
    <div className="glassmorphism-dark w-16 md:w-52 h-full flex flex-col py-6">
      <div className="mb-8 px-4 hidden md:block">
        <h2 className="font-pixel text-xs text-white/80 tracking-wider">RETROGROOVES</h2>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          <li>
            <Link to="/" className={getNavItemClasses("/")}>
              <Home size={20} className={getIconClasses("/")} />
              <span className={getTextClasses("/")}>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/explore" className={getNavItemClasses("/explore")}>
              <Search size={20} className={getIconClasses("/explore")} />
              <span className={getTextClasses("/explore")}>Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/albums" className={getNavItemClasses("/albums")}>
              <Disc size={20} className={getIconClasses("/albums")} />
              <span className={getTextClasses("/albums")}>Albums</span>
            </Link>
          </li>
          <li>
            <Link to="/playlists" className={getNavItemClasses("/playlists")}>
              <LayoutList size={20} className={getIconClasses("/playlists")} />
              <span className={getTextClasses("/playlists")}>Playlists</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={getNavItemClasses("/favorites")}>
              <Heart size={20} className={getIconClasses("/favorites")} />
              <span className={getTextClasses("/favorites")}>Favorites</span>
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
