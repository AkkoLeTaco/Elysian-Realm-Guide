import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login.jsx";
import "../../styles/info.css";

export const Info = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.user ? (
        <>
          <div className="jumbotron jumbotron-fluid">
            <div className="carousel-inner">
              <img
                className="card-img-top"
                src="https://i.ibb.co/FhCCvFL/tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540.jpg"
                alt="tumblr-3d1ccf3836410d8c14452691a5485a10-6d0d8cbe-540"
              />
              <h1 className="carousel-caption d-flex text-md-right h-75 w-25 align-item-center ">
                Welcome Captain!
              </h1>
              <p className="lead carousel-caption d-flex h-50 w-25 align-items-left justify-content-left">
                This is the Elysian Realm Guide! Here, you will learn about the
                best characters, weapons, and signets that will aid you in your
                success! There are many layers and difficulties one will face,
                and to be prepared, you need to research. In this guide, you
                will read about three Valkyries, multiples weapons and their
                abilities, and a handful of signets and their properties.
              </p>
            </div>
          </div>
          <div className="jumbotron jumbotron-fluid bg-dark m-0">
            <div className="no container text-light">
              <h1 className="change-color display-4">
                What is the Elysian Realm?
              </h1>
            </div>
          </div>
          <ul class="list-unstyled bg-dark">
            <li class="media">
              <img src="..." class="mr-3" alt="..." />
              <div class="media-body text-light">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p>
                  All my girls vintage Chanel baby. So you can have your cake.
                  Tonight, tonight, tonight, I'm walking on air. Slowly
                  swallowing down my fear, yeah yeah. Growing fast into a bolt
                  of lightning. So hot and heavy, 'Til dawn. That fairy tale
                  ending with a knight in shining armor. Heavy is the head that
                  wears the crown.
                </p>
              </div>
            </li>
            <li class="media my-4">
              <img src="..." class="mr-3" alt="..." />
              <div class="media-body text-light">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p>
                  Maybe a reason why all the doors are closed. Cause once you’re
                  mine, once you’re mine. Be your teenage dream tonight. Heavy
                  is the head that wears the crown. It's not even a holiday,
                  nothing to celebrate. A perfect storm, perfect storm.
                </p>
              </div>
            </li>
            <li class="media">
              <img src="..." class="mr-3" alt="..." />
              <div class="media-body text-light">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                <p>
                  Are you brave enough to let me see your peacock? There’s no
                  going back. This is the last time you say, after the last line
                  you break. At the eh-end of it all.
                </p>
              </div>
            </li>
          </ul>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
