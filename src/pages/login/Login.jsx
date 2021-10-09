// NPM Packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Project files
import { authentication } from "../../scripts/firebase/authentication-firebase";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Methods
  function signIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        history.push("/");
        const user = userCredential.user;
      })
      .catch((error) => alert(error.message));
  }

  function signUp(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(authentication, email, password)
      .then((authentication) => {
        // it successfully created a new user with email and password
        if (authentication) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h2>Sign-in</h2>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to FIREUP's conditions of Use & Sale. Please
          read more of our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={signUp}>
          Create your FireUp Account
        </button>
      </div>
    </div>
  );
}
