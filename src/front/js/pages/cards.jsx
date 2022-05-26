import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
export const Cards = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div className="card-group">
      {store.list &&
        store.list.map((ele, index) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img src={ele.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <p className="card-text">{ele.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
