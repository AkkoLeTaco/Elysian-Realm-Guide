import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-light text-dark bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Elysian Realm Guide
        </a>
      </div>
    </nav>
  );
};
