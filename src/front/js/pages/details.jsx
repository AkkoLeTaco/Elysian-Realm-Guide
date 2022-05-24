import React, { useContext } from "react";
import "../../styles/details.css";
import { Context } from "../store/appContext";

export const Details = () => {
  const { store, actions } = useContext(Context);
  console.log(store);

  return (
    <>
      {store.user ? (
        <>
          <div></div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
