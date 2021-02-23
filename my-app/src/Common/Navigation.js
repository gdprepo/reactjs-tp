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
// import { Players } from "../Players/Players";
// import { Questions } from "../Questions/Questions";
// import { Stats } from "../Stats/Stats";
import { Authenticate } from "../User/Authenticate";
import { launchSequence } from "./appEffects";
import "./Navigation.css";
// import loadingGif from '../assets/loading.gif';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
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
  // FIXME I redirect to auth and have isLoading to false
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(launchSequence());
  }, [dispatch]);
  return isLoading ? (
    <Loadingscreen />
  ) : (
    <Router>
      {isAuthenticated ? (
        <Navbar isAuth={isAuthenticated}/>
      ) : (
        <Switch>
          <Route path="/auth">
            <Authenticate />
          </Route>
          <PrivateRoute path="/questions">
            <p>Link</p>
          </PrivateRoute>
          <PrivateRoute path="/players/:playerId">
            <p>Link</p>
          </PrivateRoute>
          <PrivateRoute path="/players">
            <p>Link</p>
          </PrivateRoute>
          <PrivateRoute path="/">
            <img src="https://www.memesmonkey.com/images/memesmonkey/1a/1a710d5c9ac9c4135ebfccaee2484022.jpeg" alt="Home sweet home" width="400"></img>
          </PrivateRoute>
        </Switch>
      )}
      </Router>
    );
  };

export default Navigation;