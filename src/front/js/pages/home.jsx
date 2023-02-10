import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Import MVC Dependencies
import { Context } from "../store/appContext";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const { store } = useContext(Context);

  const addFavorites = (item) => {
    store.favorites.push(item);
  };

  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">SWAPI: The New, <strong>NEW</strong> Hope</h1>
          <p className="lead my-3 text-uppercase">All of your Star Wars Favorites <br />Now on This Blog</p>
          <p className="lead mb-0">
            <a href="https://swapi.dev" target="_blank" className="text-white fw-bold">SWAPI Docs...</a>
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">Featured Character</h3>
              <div className="mb-1 text-muted">Feb 7</div>
              <p className="card-text mb-auto">Description: {"Add Desc object"}</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-warning">
                  <Link to="/people/:id" className="text-decoration-none text-uppercase fw-bold text-muted">Read More</Link>
                </button>
                <button onClick={() => {addFavorites(people)}} className="btn btn-outline-warning">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src="https://lumiere-a.akamaihd.net/v1/images/cid-main_4501723a.jpeg?region=369%2C0%2C542%2C542" height="219" width="219" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">Featured Character</h3>
                <div className="mb-1 text-muted">Feb 7</div>
                <p className="card-text mb-auto">Description: {"Add Desc object"}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-warning">
                    <Link to="/people/:id" className="text-decoration-none text-uppercase fw-bold text-muted">Read More</Link>
                  </button>
                  <button onClick={""} className="btn btn-outline-warning">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://lumiere-a.akamaihd.net/v1/images/omega-s2-a-main_0216f1de.jpeg?region=280%2C0%2C720%2C720" height="219" width="219" />
              </div>
            </div>
          </div>
      </div>
    </main>
  );
};
