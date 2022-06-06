import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ElysiaSignet from "../../img/Elysia_Signet.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link to="/">
        <span className="navbar-brand">
          <img
            src={ElysiaSignet}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />{" "}
          <span className="title-color">Elysian Realm Guide</span>
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        {store.user ? (
          <>
            <ul className="navbar-nav">
              <Link to="/info">
                <li className="nav-item nav-link">About</li>
              </Link>
              <Link to="/characters">
                <li className="nav-item nav-link">Characters</li>
              </Link>
              <Link to="/bosses">
                <li className="nav-item nav-link">Boss Info</li>
              </Link>
              <li className="outLog nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    actions.logout();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="navbar-nav">
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
          </>
        )}
      </div>
    </nav>
  );
};
