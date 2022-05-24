import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import ElysiaSignet from "../../img/Elysia_Signet.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="/">
        <img
          src={ElysiaSignet}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />{" "}
        <span className="title-color">Elysian Realm Guide</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/info">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/characters">
              Characters
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bosses">
              Boss Info
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
