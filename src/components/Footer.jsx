import React from "react";

const Footer = () => {
  const iconStyle = {
    color: "#757575",
    fontSize: "20px",
    marginRight: "8px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  return (
    <footer>
      <div className="row justify-content-center mt-5 g-0 ">
        <div className="col col-6">
          <div className="row g-0">
            <div className="col mb-2 text-start" style={{ fontSize: 16 }}>
              {" "}
              <i
                className="bi bi-facebook"
                style={iconStyle}
                onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                onMouseOut={(e) => (e.target.style.color = "#757575")}
              ></i>
              <i
                className="bi bi-instagram"
                style={iconStyle}
                onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                onMouseOut={(e) => (e.target.style.color = "#757575")}
              ></i>
              <i
                className="bi bi-twitter"
                style={iconStyle}
                onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                onMouseOut={(e) => (e.target.style.color = "#757575")}
              ></i>
              <i
                className="bi bi-youtube"
                style={iconStyle}
                onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                onMouseOut={(e) => (e.target.style.color = "#757575")}
              ></i>
            </div>
          </div>

          <FooterLinks />

          <div className="row g-0">
            <div className="col mb-2 text-start">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3"
                style={{
                  backgroundColor: "#141414",
                  color: "#757575",
                  border: "1px solid #757575",
                  fontSize: "12px",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.color = "#141414";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#141414";
                  e.target.style.color = "#757575";
                }}
              >
                Service Code
              </button>
            </div>
          </div>

          <div className="row g-0">
            <div className="col mb-2 mt-2 text-start">
              <p style={{ color: "#757575", fontSize: "12px" }}>
                {" "}
                © 1997-2023 Netflix, Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = () => (
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-0 mt-3">
    {[
      ["Audio and Subtitles", "Media Center", "Privacy", "Contact us"],
      ["Audio Description", "Investor Relations", "Legal Notices"],
      ["Help Center", "Jobs", "Cookie Preferences"],
      ["Gift Cards", "Terms of Use", "Corporate Information"],
    ].map((col, index) => (
      <div key={index} className="col">
        <div className="row g-0">
          <div className="col">
            {col.map((link, i) => (
              <p key={i} style={{ fontSize: "12px", marginBottom: "0.5rem" }}>
                {" "}
                ={" "}
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#757575",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                  onMouseOut={(e) => (e.target.style.color = "#757575")}
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Footer;
