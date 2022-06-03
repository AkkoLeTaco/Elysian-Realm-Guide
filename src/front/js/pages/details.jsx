import { element } from "prop-types";
import React, { useContext } from "react";
import "../../styles/details.css";
import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characterDescription);

  return (
    <>
      {store.characterDescription.id ? (
        <>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                {store.characterDescription.name}
                <span className="text-muted">
                  {store.characterDescription.description}
                </span>
              </h2>
              <p className="lead">{store.characterDescription.best_weapon}</p>
            </div>
            <div className="col-md-5">
              <img
                src={store.characterDescription.image}
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                <span className="text-muted">
                  {store.characterDescription.weapon_name}
                </span>
              </h2>
              <p className="lead">
                {store.characterDescription.weapon_description}
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                src={store.characterDescription.weapon_image}
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                <span className="text-muted">
                  {store.characterDescription.signet_name}
                </span>
              </h2>
              <p className="lead">
                {store.characterDescription.best_used},{" "}
                {store.characterDescription.signet_description},
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={store.characterDescription.signet_image}
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
        </>
      ) : (
        <h1 className="waitscreen text-center">Loading</h1>
      )}
    </>
  );
};
