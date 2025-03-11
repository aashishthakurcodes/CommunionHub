import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg py-4 z-50">
      <nav className="flex justify-between items-center px-4 sm:px-8 max-w-6xl mx-auto">
        
      
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">🌍 CommunionHub</h1>

        
        <div className="hidden md:flex space-x-6">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/events">Events</Link>
          <Link className="nav-link" to="/about">About</Link>
        </div>

        {/* {//mobile screen btn} */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white/20 backdrop-blur-lg py-6 absolute top-full left-0 w-full">
          <Link className="nav-link-mobile" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="nav-link-mobile" to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link className="nav-link-mobile" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
