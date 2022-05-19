import React from "react";
import { Link } from "react-router-dom";
import ElysiaSignet from "../../img/Elysia_Signet.png";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="#">
        <img
          src={ElysiaSignet}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />{" "}
        Elysian Realm Guide
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Characters
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Boss Info
            </a>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="navbar navbar-light text-dark bg-secondary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       <img
    //         src={ElysiaSignet}
    //         alt=""
    //         width="30"
    //         height="24"
    //         className="d-inline-block align-text-top"
    //       />
    //       Elysian Realm Guide
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item active">
    //           <a class="nav-link" href="#">
    //             Home <span class="sr-only">(current)</span>
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link disabled" href="#">
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
