import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-lg shadow-lg text-white py-4 text-center">
      <p className="text-sm text-white/70">&copy; {new Date().getFullYear()} CommunionHub</p>
      
      <div className="flex justify-center space-x-3 mt-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-yellow-300">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-yellow-300">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-yellow-300">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
