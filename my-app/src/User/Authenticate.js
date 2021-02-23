import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import "./Authenticate.css";
import { authenticateUser } from "./userEffects";
import logo from '../assets/logo.png'
import loadingGif from '../assets/loading.gif';

export const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [canSignIn, setCanSignIn] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  const history = useHistory();
  const { from } = useLocation().state || { from: { pathname: "/" } };
  const signInSuccess = () => {
    history.replace(from);
  };
  useEffect(() => {
    // Verify email format is correct
    let emailIsValid = false;
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      emailIsValid = true;
    }
    // Verify password format is correct
    let passwordIsValid = false;
    if (password.length >= 6) {
      passwordIsValid = true;
    }
    setCanSignIn(emailIsValid && passwordIsValid);
  }, [email, password]);
  useEffect(() => {
    if (isAuthenticated) history.replace("/");
  }, [isAuthenticated, history]);
  return (
    <div className="auth-root">
        <img src={logo} width="150" height="150" alt="logo" />
        <p>Sign In</p>
      {isLoading ? (
        <img
          src={loadingGif}
          alt="Loading animation"
          style={{ height: "200px" }}
        />
      ) : (
        <div className="auth-form">
          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <button
            onClick={() =>
              dispatch(
                authenticateUser(email, password, signInSuccess)
              )
            }
            disabled={!canSignIn}
          >
            Go
          </button>
        </div>
      )}
    </div>
  );
};
