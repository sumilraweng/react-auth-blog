import Signup from "../pages/AuthenticationSignupPage";
import Login from "../pages/AuthenticationSigninPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import Cookies from "js-cookie";
import store from "../redux/store/store";
import { userActionTypes } from "../redux/constant/userAction.types";
import userActionObjectGenerator from "../redux/action/userAction.geneartor";
import { verifyToken } from "../api/auth";
import { useEffect } from "react";
import Logout from "../pages/Logout";
import Navigation from "../components/Navigation";

function Router(props) {
  useEffect(() => {
    if (Cookies.get("blog")) {
      verifyToken()
        .then((data) => {
          if (data.verified) {
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
    }
  }, []);
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTE_BASENAME}>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={HomePage} />
        <Route path="/blog/:id" exact component={BlogPage}></Route>
        <Route path="/logout" exact component={Logout}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
