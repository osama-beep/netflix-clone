import React from "react";

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

      <Section title="Trending Now" images={[1, 2, 3, 4, 5, 6]} />
      <Section title="Watch it Again" images={[7, 8, 9, 10, 11, 12]} />
      <Section title="New Releases" images={[13, 14, 15, 16, 17, 18]} />
    </div>
  );
};

const Section = ({ title, images }) => (
  <>
    <h4 className="text-light">{title}</h4>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {images.map((img) => (
        <div key={img} className="col mb-2 text-center px-1">
          <img
            className="img-fluid"
            src={`src/assets/${img}.png`}
            alt="movie picture"
          />
        </div>
      ))}
    </div>
  </>
);

export default MainContent;
