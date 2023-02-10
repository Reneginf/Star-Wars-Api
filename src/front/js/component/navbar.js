import React from "react";
import { Link } from "react-router-dom";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="container">
      <header className="blog-header 1h-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <Link to="/" className="nav-link text-light text-uppercase fw-bold fs-6">Home</Link>
          </div>
          <div className="col-4 text-center">
            <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" height="80" width="185" />
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <button className="btn btn-warning text-uppercase fw-bold fs-6">Favorites <FontAwesomeIcon icon={faHeart} /></button>
          </div>
        </div>
      </header>
      <div className="nav-scroller py-1 mt-5 mb-2">
        <nav className="nav d-flex justify-content-between text-uppercase p-2 fs-4">
          <Link to="/people" className="text-secondary nav-link">People</Link>
          <Link to="/films" className="text-secondary nav-link">Films</Link>
          <Link to="/starships" className="text-secondary nav-link">Starships</Link>
          <Link to="/vehicles" className="text-secondary nav-link">Vehicles</Link>
          <Link to="/species" className="text-secondary nav-link">Species</Link>
          <Link to="/planets" className="text-secondary nav-link">Planets</Link>
        </nav>
      </div>
    </div>
  );
};
