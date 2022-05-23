import { element } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
export const Cards = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <>
      {store.list &&
        store.list.map((ele, index) => {
          return <div>{ele.name}</div>;
        })}
    </>
  );
};
