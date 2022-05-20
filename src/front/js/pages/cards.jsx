import { element } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Cards = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="list-group-horizontal row row-cols-1 row-cols-md-9 g-1 mx-2 mb-3">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="list-group">
        {store.list &&
          store.list.map((item, index) => {
            return (
              <div key={index}>
                <div>{item.name}</div>
                <div>
                  <img
                    src="https://i.ibb.co/1KwRggx/falu-red-color-solid-background-1920x1080.png"
                    alt="falu-red-color-solid-background-1920x1080"
                    border="0"
                  />
                </div>
                <div {...item.desciption}></div>
                <div {...item.best_signets}></div>
                <div {...item.best_weapon}></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
