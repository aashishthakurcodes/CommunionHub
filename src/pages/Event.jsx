import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Drive", date: "2025-03-15", category: "Charity", location: "New York" },
    { id: 2, title: "Interfaith Gathering", date: "2025-03-20", category: "Religious", location: "Los Angeles" },
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "" });
  const [filter, setFilter] = useState("All");

  //state to show/hide fomr
  const [showForm, setShowForm] = useState(false); 

  const handleAddEvent = (e) => {
    e.preventDefault(); 

    if (newEvent.title && newEvent.date && newEvent.category && newEvent.location) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ title: "", date: "", category: "", location: "" }); 
      setShowForm(false); 
    }
  };

  // Filter events based on category
  const filteredEvents = filter === "All" ? events : events.filter((event) => event.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      
      
      <Header />

     
      <main className="flex-grow flex flex-col items-center text-center px-4 pt-24">
        
       
        <h2 className="text-3xl sm:text-4xl font-extrabold">📅 Event Listings</h2>

        {/* Filter Section */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {["All", "Religious", "Social", "Charity"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full font-bold transition ${
                filter === cat ? "bg-yellow-400 text-black shadow-lg" : "bg-white/20 hover:bg-yellow-300 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Show Form Button */}
        <button 
          onClick={() => setShowForm(!showForm)}
          className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold text-lg rounded-full shadow-lg hover:bg-yellow-500 transition"
        >
          {showForm ? "✖ Close Form" : "➕ Add Event"}
        </button>

        
        {showForm && (
          <motion.form 
            onSubmit={handleAddEvent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 w-full max-w-2xl bg-white/20 backdrop-blur-lg p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-center mb-4">📝 Add New Event</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="px-4 py-2 border rounded-md text-black"
                required
              />
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="px-4 py-2 border rounded-md text-black"
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                className="px-4 py-2 border rounded-md text-black"
                required
              />
              <select
                value={newEvent.category}
                onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                className="px-4 py-2 border rounded-md text-black"
                required
              >
                <option value="">Select Category</option>
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </select>
            </div>
            <button 
              type="submit"
              className="mt-4 w-full py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition"
            >
              ✅ Submit Event
            </button>
          </motion.form>
        )}

        {/* Event List */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-5 sm:p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-bold">{event.title}</h3>
                <p className="mt-2 text-lg">{event.date} - {event.location}</p>
                <span className="mt-2 inline-block px-3 py-1 rounded-md text-sm bg-gray-200 text-black">{event.category}</span>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-lg col-span-full">🚫 No events found in this category.</p>
          )}
        </div>
      </main>

      
      <Footer />
    </div>
  );
};

export default Events;
