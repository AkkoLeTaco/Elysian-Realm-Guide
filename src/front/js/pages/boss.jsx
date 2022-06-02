import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Login } from "./login.jsx";
import "../../styles/boss.css";

export const Boss = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.user ? (
        <>
          <div className="jumbotron jumbotron-fluid bg-dark m-0">
            <img
              src="https://i.ibb.co/GVxfq71/giguzxrg6pv81.png"
              className="card-img-top"
              alt="..."
            />
            <div className="no container text-light">
              <h1 className="change-color display-4">Bosses</h1>
              <p className="change-color lead m-0">
                You will encounter them in your journey eventually, let's get to
                know them.
              </p>
            </div>
          </div>
          <div className="card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.ytimg.com/vi/LdEhUWa-UWg/maxresdefault.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="mobi-color card-body">
                  <h3 className="display-4">Mobius</h3>
                  <h5 className="lead m-0">
                    Mobius is a MANTIS and a scientist of the Previous Era,
                    being behind the creation of the stigmata, MANTISes and
                    other projects. Among The Thirteen Flame-Chasers, she is
                    numbered tenth with the codename "Infinity".
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="yes card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.ibb.co/nksDvNL/appy.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-light">
                  <h3 className="display-4">Aponia</h3>
                  <h5 className="lead m-0">
                    Aponia is a very soft-spoken woman. She somehow manages to
                    stay that way even when she is upset. Despite her calm
                    demeanor, she is someone who shouldn't be messed with. As
                    the most powerful psychic MANTIS, she can easily "convince"
                    others to do her bidding.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="yes card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://c.tenor.com/ZFl7-b8NhAIAAAAC/kalpas-raiden-mei.gif"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-danger">
                  <h3 className="display-4">Kalpas</h3>
                  <h5 className="lead m-0">
                    Kalpas is a member of The Thirteen Flame-Chasers. He is
                    ranked sixth, with the codename "Decimation". Kalpas is an
                    aggressive and emotionally unstable person. He is always
                    looking to fight, maim, or kill something.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="yes card mb-3 bg-dark">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://staticg.sportskeeda.com/editor/2022/05/16498-16524944730411-1920.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body change-color">
                  <h3 className="display-4">Elysia</h3>
                  <h5 className="lead m-0">
                    Elysia is the co-leader of The Thirteen Flame-Chasers. She
                    is ranked second amongst the thirteen. Her codename is
                    "Ego".
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
