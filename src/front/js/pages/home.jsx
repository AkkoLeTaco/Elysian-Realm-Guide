import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ElysiaImageUrl from "../../img/RaidenElysia.png";
import Cards from "./cards.jsx";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="carousel-inner">
          <img
            className="card-img-top"
            src={ElysiaImageUrl}
            alt="Card image cap"
          />
          <h1 className="carousel-caption d-flex h-100 align-items-center justify-content-center">
            Elysian Realm Guide
          </h1>
          <p className="lead carousel-caption d-flex h-75 align-items-center justify-content-center">
            Your source in Elysian Realm information.
          </p>
        </div>
      </div>
      <div className="card d-flex justify-content-center bg-dark">
        <div className="card-body border border-success h-50 d-inline-block">
          <blockquote className="blockquote mb-0 text-light text-center">
            <p>
              "Knowing the ugliness of evolution, I also can say that I know the
              beauty of life."
            </p>
            <footer className="blockquote-footer text-success">
              Mobius,{" "}
              <cite title="Source Title text-center">Honkai Impact 3rd</cite>
            </footer>
          </blockquote>
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
              </div>
            );
          })}
      </div>
    </>
  );
};
