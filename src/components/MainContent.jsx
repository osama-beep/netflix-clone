import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const API_KEY = "6e36dee6";
const MainContent = () => {
  return (
    <div className="container-fluid px-4 py-0">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-light">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <i
            className="bi bi-grid icons text-white me-3"
            style={{ fontSize: "1.5rem" }}
          ></i>
          <i
            className="bi bi-grid-3x3 icons text-white me-3"
            style={{ fontSize: "1.5rem" }}
          ></i>
        </div>
      </div>

      <MovieGallery title="Disney" searchTerm="Disney" />
      <MovieGallery title="Marvel Cinematic Universe" searchTerm="Marvel " />
      <MovieGallery title="Attack on Titan" searchTerm="Attack on Titan" />
      <MovieGallery title="Star Wars" searchTerm="Star Wars" />
      <MovieGallery title="Interstellar" searchTerm="Space" />
      <MovieGallery title="Harry Potter" searchTerm="Harry Potter" />
    </div>
  );
};

const MovieGallery = ({ title, searchTerm }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
        );
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return <Section title={title} movies={movies} />;
};

MovieGallery.propTypes = {
  title: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

const Section = ({ title, movies }) => (
  <>
    <h4 className="text-light">{title}</h4>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col mb-2 text-center px-1">
          <Link
            to={`/movie-details/${movie.imdbID}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                transition: "all 0.18s ease-in-out",
                position: "relative",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.07) translateZ(20px)";
                e.currentTarget.style.zIndex = "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateZ(0)";
                e.currentTarget.style.zIndex = "1";
              }}
            >
              <img
                className="img-fluid"
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450.png?text=No+Poster"
                }
                alt={movie.Title}
                style={{
                  backfaceVisibility: "hidden",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainContent;
