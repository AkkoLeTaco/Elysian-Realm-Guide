import React from "react";
import { Link } from "react-router-dom";
import ElysiaSignet from "../../img/Elysia_Signet.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light text-dark bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={ElysiaSignet}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Elysian Realm Guide
        </a>
      </div>
    </nav>
  );
};
