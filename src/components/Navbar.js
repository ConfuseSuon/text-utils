import React from "react";
import PropTypes from "prop-types";

export default function Navbar({mode, setMode, title, aboutText}) {

  return (
    <nav
      className={`navbar navbar-expand-lg navbar  ${mode ? "bg-black-200 " : ""} `}
      
    >
      <div className="container-fluid">
        <a className={`navbar-brand ${mode ? "text-white" : ""}  `} href="/" >
          {title}
        </a>
        <button
          className={`navbar-toggler ${mode ? "bg-white" : ""} `}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <a className={`nav-link active ${mode ? "text-white" : ""} `} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${mode ? "text-white" : ""} `} href="/">
                {aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" >
            <button className={`btn btn-outline-primary ${mode? "bg-white text-secondary" : "bg-black bg-white"} `} type="button" onClick={() => {
              setMode(!mode)
            }}>
              {mode ? 'Light' : 'Dark'}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Title goes here",
  aboutText: "About goes here",
};
