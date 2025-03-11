import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
      
      
      <Header />

      
      <motion.main 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-24"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Connecting People Across  
          <br />
          <span className="text-yellow-300">Faiths & Interests</span>
        </h2>
        <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl leading-relaxed text-white/90">
          Bringing communities together through meaningful events, shared experiences, and strong connections.
        </p>
        <Link to="/events">
          <motion.button 
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }} 
            whileTap={{ scale: 0.9 }} 
            className="mt-5 sm:mt-6 md:mt-8 px-5 sm:px-6 md:px-10 py-3 sm:py-3.5 bg-white/20 backdrop-blur-lg text-white font-bold text-sm sm:text-lg rounded-full shadow-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            🌟 Explore Events
          </motion.button>
        </Link>
      </motion.main>

      
      <Footer />
    </div>
  );
};

export default Home;
