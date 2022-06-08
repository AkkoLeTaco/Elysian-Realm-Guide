import React, { useContext } from "react";
import "../../styles/cards.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Cards = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  console.log(store);
  return (
    <>
      <div className="jumbotron jumbotron-fluid bg-dark m-0">
        <img
          src="https://i.ibb.co/TBGgjcr/elysia-realm-wallpaper-by-ziyee2007-derwira.png"
          className="card-img-top"
          alt="..."
        />
        <div className="no container text-light">
          <h1 className="change-color display-4">Characters</h1>
          <p className="change-color lead m-0">
            This is where the journey begins. choose a Character you wish to
            learn about.
          </p>
        </div>
      </div>
      <div className="row row-cols-3 row-cols-md-3 bg-dark">
        {store.list &&
          store.list.map((ele, index) => {
            return (
              <div className="col">
                <div key={index} className="card bg-dark">
                  <span
                    type="button"
                    onClick={() => {
                      actions.loadDetails(ele.id);
                      history.push("/characters/" + ele.id);
                    }}
                  >
                    <img
                      src={ele.image}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "30rem", height: "34rem" }}
                    />
                  </span>
                  <div className="card-body">
                    <h2 className="name fw-normal">{ele.name}</h2>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
