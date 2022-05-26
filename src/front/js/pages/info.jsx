import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login.jsx";

export const Info = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.user ? (
        <>
          <div className="jumbotron jumbotron-fluid">
            <div className="carousel-inner">
              <img
                src="https://i.ibb.co/FhCCvFL/tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540.jpg"
                alt="tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540"
                border="0"
              />
              <h1 className="carousel-caption d-flex h-100 align-items-center justify-content-center">
                Welcome Captian!
              </h1>
              <p className="lead carousel-caption d-flex h-75 align-items-center justify-content-center">
                To the Elysian Realm Guide. Here, you will about the best
                weapons, characters, and signets that will help you on your
                quest!
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
