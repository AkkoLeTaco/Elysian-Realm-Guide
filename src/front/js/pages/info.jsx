import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login.jsx";

export const Info = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.user ? (
        <>
          <div className="jumbotron jumbotron-fluid">
            <div className="carousel-inner">
              <img
                className="card-img-top"
                src="https://i.ibb.co/FhCCvFL/tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540.jpg"
                alt="tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="carousel-caption d-flex h-75 align-item left justify-content-left">
                  Welcome Captain!
                </h5>
                <p className="lead carousel-caption d-flex h-50 align-items-left justify-content-left">
                  This is the Elysian Realm Guide! Here, you will learn about
                  the best characters, weapons, and signets that will aid you in
                  your success! There are many layers and difficulties ones will
                  face, and to be prepared you research. In this guide, you will
                  read about three Valkyries, multiples and their abilities, and
                  a handful of signets and their properties.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
