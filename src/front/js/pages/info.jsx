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
              <h1 className="carousel-caption d-flex text-md-right h-75 w-25 align-item-center ">
                Welcome Captain!
              </h1>
              <p className="lead carousel-caption d-flex h-50 w-25 align-items-left justify-content-left">
                This is the Elysian Realm Guide! Here, you will learn about the
                best characters, weapons, and signets that will aid you in your
                success! There are many layers and difficulties one will face,
                and to be prepared, you need to research. In this guide, you
                will read about three Valkyries, multiples weapons and their
                abilities, and a handful of signets and their properties.
              </p>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
