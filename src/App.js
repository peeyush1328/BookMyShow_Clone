import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// pages
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import Playpage from "./pages/Playpage";
import Movie from "./pages/Movie";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_KEY;
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies/:id" element={<Moviepage />} />
      <Route path="/plays" element={<Playpage />} />
      <Route path="/movies" element={<Movie />} />
    </Routes>
  );
}

export default App;
