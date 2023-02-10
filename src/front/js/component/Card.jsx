import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Import MVC Dependencies
import { Context } from "../store/appContext";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Card = () => {
  const { store, actions } = useContext(Context);

  const addFavorites = (item) => {
    store.favorites.push(item);
  };

  // .results? is a non-null assertion operator, meaning if the data store is null or undefined, the code will stop and return undefined
  let peopleCards = store.people.results?.map((people, index) => {
    return (
        <div className="col">
          <div className="card" key={index}>
          {/* <img
              src="..."
              className="card-img-top"
              alt="..."
            /> */}
            <div className="card-body">
              <h5 className="text-dark">{people.name}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Gender: {people.gender}</li>
                <li className="list-group-item">Hair Color: {people.hair_color}</li>
                <li className="list-group-item">Eye Color: {people.eye_color}</li>
              </ul>
              <Link to={`/people/${people.uid}`} className="btn btn-primary mt-3">
                Details
              </Link>
              <button
                className="btn btn-outline-warning float-end mt-3"
                onClick={() => {
                  addFavorites(people);
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
    );
  });

  return (
    <div className="container mt-5">
      <div className="row row-cols-4 g-2">{peopleCards}</div>
    </div>
  );
};
