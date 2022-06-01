import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Signup } from "./pages/signup.jsx";
import { Login } from "./pages/login.jsx";
import { Home } from "./pages/home.jsx";
import { Cards } from "./pages/cards.jsx";
import { Info } from "./pages/info.jsx";
import { Details } from "./pages/details.jsx";
import NotFound from "./pages/NotFound.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Boss } from "./pages/boss.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/characters">
              <Cards />
            </Route>
            <Route exact path="/characters/:theid">
              <Details />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route exact path="/bosses">
              <Boss />
            </Route>
            <Route path="*" component={NotFound} element={<NotFound />} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
