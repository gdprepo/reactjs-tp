/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import { Navbar, Loadingscreen } from "../components";
import { Home } from "../components";

// import { Players } from "../Players/Players";
// import { Questions } from "../Questions/Questions";
// import { Stats } from "../Stats/Stats";
import { Authenticate } from "../User/Authenticate";
import { launchSequence } from "./appEffects";
import { Game } from "../components";
import { Profile } from "../components";


import "./Navigation.css";
// import loadingGif from '../assets/loading.gif';
import api from "../api";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Navigation = () => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  const player = useSelector((state) => state.user.player);
  const isLoading = useSelector((state) => state.app.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(launchSequence());
  }, [dispatch]);
  return isLoading ? (
    <Loadingscreen />
  ) : ( 
  <Router>
      {isAuthenticated ? <Navbar isAuth={isAuthenticated}/> : undefined}
        <Switch>
          <Route path="/auth">
            <Authenticate />
          </Route>

          <PrivateRoute path="/profile">
            <Profile props={player} />
          </PrivateRoute>

          <PrivateRoute path="/game">
            <Game />
          </PrivateRoute>

          <PrivateRoute path="/">
            <Home props={player} />
          </PrivateRoute>
        </Switch>
      </Router>
    )
  }

export default Navigation;