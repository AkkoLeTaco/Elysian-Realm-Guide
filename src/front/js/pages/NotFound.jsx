import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/NF.css";
import PageNotFound from "../../img/raiden404.png";

const NotFound = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      {store.user ? (
        <div className="error">
          <img src={PageNotFound} className="center" />
          <h5 className="text-light texti" style={{ textAlign: "center" }}>
            The thing you seek is not here...<br></br>
            This is also known as a "404".<br></br>
            <Link to="/">Go Home </Link>
          </h5>
        </div>
      ) : (
        <div className="error">
          <img src={PageNotFound} className="center" />
          <h5 className="text-light texti" style={{ textAlign: "center" }}>
            The thing you seek is not here...<br></br>
            This is also known as a "500".<br></br>
            <Link to="/">Go Home </Link>
          </h5>
        </div>
      )}
    </div>
  );
};
export default NotFound;
