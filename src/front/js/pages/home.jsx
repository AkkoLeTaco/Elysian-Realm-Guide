import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ElysiaImageUrl from "../../img/RaidenElysia.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./cards.jsx";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.user ? (
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
          <div className="border-color card d-flex justify-content-center bg-dark">
            <div className="card-body border h-50 d-inline-block">
              <blockquote className="blockquote mb-0 text-light text-center">
                <p className="change-color">
                  "Knowledge without wisdom is no different than a curse."
                </p>
                <footer className="quote-color blockquote-footer">
                  Elysia,{" "}
                  <cite title="Source Title text-center">
                    Honkai Impact 3rd
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
