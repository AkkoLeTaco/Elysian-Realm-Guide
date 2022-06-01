import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NF.css";
import PageNotFound from "../../img/raiden404.png";
const NotFound = () => {
  return (
    <div className="error">
      <img src={PageNotFound} className="center" />
      <h5 className="text-light texti" style={{ textAlign: "center" }}>
        The thing you seek is not here...<br></br>
        This is also known as a "404".<br></br>
        <Link to="/">Go Home </Link>
      </h5>
    </div>
  );
};
export default NotFound;
