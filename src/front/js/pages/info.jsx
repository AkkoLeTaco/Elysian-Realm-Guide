import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login.jsx";

export const Info = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.user ? (
        <>
          <div class="card mb-3">
            <img
              src="https://i.ibb.co/FhCCvFL/tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540.jpg"
              alt="tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540"
              border="0"
            />
            <div class="card-body">
              <h5 class="card-title">Welcome Captain!</h5>
              <p class="card-text">
                This is the Elysian Realm Guide! Here, you will learn about the
                best characters, weapons, and signets that will aid you in your
                success! There are many layers and difficulties ones will face,
                and to be prepared you research. In this guide, you will read
                about three Valkyries, multiples and their abilities, a handful
                of signets, and the fearsome bosses.
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
