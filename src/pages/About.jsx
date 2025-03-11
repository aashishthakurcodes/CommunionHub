import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      
   
      <Header />

      
      <main className="flex-grow flex flex-col items-center text-center px-6 pt-24">
        
       
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            About <span className="text-yellow-300">CommunionHub</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/90">
            CommunionHub is dedicated to bringing people together through meaningful events and community engagement. 
            We believe in the power of connection to create positive change in the world.
          </p>
        </motion.div>

        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {[
            { title: "🌎 Community Focused", desc: "We bring people together to share experiences and grow." },
            { title: "📅 Event Organization", desc: "Easily create and join events that matter to you." },
            { title: "💡 Inspiring Change", desc: "Connecting faiths and interests to build a better world." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-white/90">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </main>

    
      <Footer />
    </div>
  );
};

export default About;
