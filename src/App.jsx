import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#221f1f" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
