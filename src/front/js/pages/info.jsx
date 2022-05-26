import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login.jsx";

export const Info = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.user ? (
        <>
          <div className="card mb-3">
            <img
              src="https://i.ibb.co/Y0PR9py/0473aff9e8a10ed9f3e01159a538e9ee-2171723955283249678.png"
              alt="0473aff9e8a10ed9f3e01159a538e9ee-2171723955283249678"
              border="0"
            />
            <div className="card-body">
              <h5 className="card-title">Welcome Captain,</h5>
              <p className="card-text">
                To the Elysian Realm Guide! Here, we will instruct you on the
                best characters, signets, and weapons that will aid you in your
                success!
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
