import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EdenImageUrl from "../../img/Eden.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="carousel-inner">
        <img className="card-img-top" src={EdenImageUrl} alt="Card image cap" />
        <h1 className="carousel-caption d-flex h-100 align-items-center justify-content-center">
          Fluid jumbotron
        </h1>
        <p className="lead carousel-caption d-flex h-75 align-items-center justify-content-center">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
  );
};
