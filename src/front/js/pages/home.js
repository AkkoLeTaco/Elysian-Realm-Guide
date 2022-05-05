import React, { useContext } from "react";
import { Context } from "../store/appContext";
import EdenImageUrl from "../../img/Eden.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img
          class="card-img-top"
          src={EdenImageUrl}
          style={{ height: "200" }}
          alt="Card image cap"
        />
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
  );
};
