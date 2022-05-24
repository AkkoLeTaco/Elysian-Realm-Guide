import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import ElysiaSignet from "../../img/Elysia_Signet.png";
import ElysiaShow from "../../img/ElyShow.jpg";
import "../../styles/home.css";

export const Login = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const history = useHistory();
  return (
    <div className="Signin-form bg-dark">
      <div className="Log-Img">
        <img
          className="card-img-top Log-Img"
          src={ElysiaShow}
          alt="Card image cap"
        />
      </div>
      <div className="Signin mx-auto">
        <span ClassName="SignTitle">
          <h1>Welcome back, Captain!</h1>
          <h3 className="subtext text-center">Sign in here!</h3>
        </span>
        <form>
          {errors}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group form-check"></div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              if (email == "" && password == "") {
                setErrors("email or password cannot be empty.");
              } else {
                e.preventDefault();
                actions.logId(email, password);
                history.push("/home");
              }
            }}
          >
            Submit
          </button>
          <img
            src={ElysiaSignet}
            alt=""
            width="330"
            height="324"
            className="imageE"
          />
        </form>
      </div>
    </div>
  );
};
