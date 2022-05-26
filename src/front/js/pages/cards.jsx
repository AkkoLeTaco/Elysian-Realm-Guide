import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cards = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div className="card-group">
      {store.list &&
        store.list.map((ele, index) => {
          return (
            <Link to="/characters/:theid">
              <div className="card" style={{ width: "18rem" }}>
                <img src={ele.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 class="fw-normal">{ele.name}</h2>
                  <p className="card-text">{ele.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
