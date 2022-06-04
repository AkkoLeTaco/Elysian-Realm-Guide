import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ReactPlayer from "react-player";
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
                Backstory of the Elysian Realm
              </h1>
              <p className="change-color lead m-0">
                The memories of the last thirteen Flame-Chasers of the Previous
                Era rest in this underworld. From a corner of World Serpent's
                sacrificial ground, a lightless corridor meandered out, reaching
                into a colossal facility buried in the ground. It was where
                every agent of World Serpent was baptized to enter a new life.
                The memories of the last thirteen Flame-Chasers of the Previous
                Era rest in this underworld.
              </p>
            </div>
            <ReactPlayer
              className="vid"
              controls
              url="https://www.youtube.com/watch?v=Ofg2_qN3MrQ"
            />
          </div>
          <div className="card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.ibb.co/XCBj3ZY/chara.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="textColor card-body">
                  <h3 className="display-4">Characters</h3>
                  <h5 className="lead m-0">
                    In the Elysian Realm, Captains can deploy their own
                    Valkyries and choose different signet buffs to tackle
                    challenges. Buffs will enhance Valkyries' abilities and even
                    alter their skill mechanics to freshen up the experience.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="yes card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.ibb.co/DLfqBVH/Signet.gif"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="textColor card-body">
                  <h3 className="display-4">Signets</h3>
                  <h5 className="lead m-0">
                    Signets are blessings given by each of the Thirteen
                    Flamechasers that will aid you through the Elysian Realm.
                    each one has it's own buffs and abilities and not all will
                    be usable on the same character. each one is good for each
                    character.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="yes card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <ReactPlayer
                  controls
                  url="https://www.youtube.com/watch?v=Ofg2_qN3MrQ"
                />
              </div>
              <div className="col-md-8">
                <div className="mov-text textColor card-body">
                  <h3 className="display-4">Specifics</h3>
                  <h5 className="lead m-0">
                    If you are interested in the Specifics of the Elysian Realm,
                    here is a detailed video on the Elysian Realm
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
