import React, { useContext } from "react";
import "../../styles/cards.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cards = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <>
      <div className="jumbotron jumbotron-fluid bg-dark m-0">
        <img src="..." className="card-img-top" alt="..." />
        <div className="container text-light">
          <h1 className="change-color display-4">Characters</h1>
          <p className="change-color lead m-0">
            This is where the journey begins. choose a Character you wish to
            learn about.
          </p>
        </div>
      </div>
      <div className="card-group m-0 bg-dark">
        {store.list &&
          store.list.map((ele, index) => {
            return (
              <div
                key={index}
                className="card bg-dark"
                style={{ width: "18rem" }}
              >
                <Link to="/characters/:theid">
                  <img src={ele.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <h2 className="name fw-normal">{ele.name}</h2>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
