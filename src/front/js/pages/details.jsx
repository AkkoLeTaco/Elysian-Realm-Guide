import { element } from "prop-types";
import React, { useContext, useEffect } from "react";
import "../../styles/details.css";
import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characterDescription);

  return (
    <>
      {store.characterDescription.character ? (
        <>
          <div className="row featurette bg-dark">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                <span className="display-6 text-white">
                  {store.characterDescription.character.description}
                </span>
              </h2>
            </div>
            <div className="col-md-5">
              <img
                src={store.characterDescription.character.image}
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

          <div className="row featurette bg-dark">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                <span className="text-white">
                  {store.characterDescription.character.best_weapon}
                </span>
              </h2>
              <h2 className="display-6 text-white">
                {store.characterDescription.weapon.weapon_description}
              </h2>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                src={store.characterDescription.weapon.weapon_image}
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

          <div className="row featurette bg-dark">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                <span className="text-white">
                  {store.characterDescription.character.best_signets}
                </span>
              </h2>
              <h3 className="display-6 text-white">
                {store.characterDescription.signet.signet_description}
              </h3>
            </div>
            <div className="col-md-5">
              <img
                src={store.characterDescription.signet.signet_image}
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
        </>
      ) : (
        <h1 className="waitscreen text-center">Loading</h1>
      )}
    </>
  );
};
