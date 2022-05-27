import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login.jsx";

export const Info = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.user ? (
        <>
          <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.ibb.co/FhCCvFL/tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540.jpg"
                  alt="Card image cap"
                  border="0"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
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
