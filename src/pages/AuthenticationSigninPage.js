import Login from "../components/Login";
import { verifyToken } from "../api/auth";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import store from "../redux/store/store";
import { userActionTypes } from "../redux/constant/userAction.types";
import userActionObjectGenerator from "../redux/action/userAction.geneartor";

function AuthenticationSigninPage(props) {
  const [isSignIn, setIsSignIn] = useState(store.getState().isLogin);
  useEffect(() => {
    if (isSignIn === undefined) {
      checkLogin();
    }

    // eslint-disable-next-line
  });

  const checkLogin = () => {
    if (Cookies.get("blog")) {
      verifyToken()
        .then((data) => {
          if (data.verified) {
            setIsSignIn(data.verified);

            const payload = {
              isLogin: data.verified,
              jwt: Cookies.get("blog"),
            };
            store.dispatch(
              userActionObjectGenerator(userActionTypes.LOGIN, payload)
            );
          }
        })
        .catch((err) => {
          setIsSignIn(false);
          console.log(err.message);
          Cookies.remove("blog", { path: "" });
          store.dispatch(
            userActionObjectGenerator(userActionTypes.LOGIN, {
              isLogin: false,
              jwt: "",
            })
          );
        });
    } else {
      store.dispatch(
        userActionObjectGenerator(userActionTypes.LOGIN, {
          isLogin: false,
          jwt: "",
        })
      );
      setIsSignIn(false);
    }
  };

  return isSignIn === undefined ? (
    <h1> Loading </h1>
  ) : isSignIn ? (
    <Redirect to="/dashboard" />
  ) : (
    <Login />
  );
}

export default AuthenticationSigninPage;
