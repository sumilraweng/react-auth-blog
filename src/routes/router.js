import Signup from "../pages/AuthenticationSignupPage";
import Login from "../pages/AuthenticationSigninPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
function Router() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTE_BASENAME}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
