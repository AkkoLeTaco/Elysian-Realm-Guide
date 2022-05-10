import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EdenImageUrl from "../../img/Eden.jpg";
import Cards from "./cards.jsx";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="carousel-inner">
          <img
            className="card-img-top"
            src={EdenImageUrl}
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
      <div class="card d-flex justify-content-center">
        <div class="card-body border border-success h-50 d-inline-block">
          <blockquote class="blockquote mb-0 text-center">
            <p>
              "Knowing the ugliness of evolution I also can say that I know the
              beauty of life"
            </p>
            <footer class="blockquote-footer">
              Mobius,{" "}
              <cite title="Source Title text-center">Honkai Impact 3rd</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};
