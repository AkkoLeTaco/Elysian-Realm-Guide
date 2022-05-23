import { element } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
export const Cards = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.CharacterCards.results &&
        store.CharacterCards.results.map((ele, index) => {
          return (
            <div
              key={index}
              className="row row-cols-1 row-cols-md-9 g-1 mx-2 mb-3"
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={store.img + ele.uid + ".jpg"}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">Gender: {ele.gender}</p>
                  <Link to={"/details/" + ele.uid}>
                    <button
                      className="btn btn-primary px-2.5"
                      onClick={() => {
                        actions.loadDetails(ele.uid);
                      }}
                    >
                      Learn more
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      duplicate(ele);
                    }}
                    type="button"
                    className="btn btn-outline-warning mx-5"
                  >
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
