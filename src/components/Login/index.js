import { useState } from "react";
import { signin } from "../../api/auth";
import Button from "../common/Button";
import Input from "../common/Input";
import Label from "../common/Label";
import Cookies from "js-cookie";
import { SigninSchema } from "../../model/signinSchema";
import { withRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { userActionTypes } from "../../redux/constant/userAction.types";
import userActionObjectGenerator from "../../redux/action/userAction.geneartor";
import styles from "./signin.module.scss";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = (event) => {
    setEmail(event.target.value);
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    const loginCredential = new SigninSchema({
      email: email,
      password: password,
    });
    signin(loginCredential)
      .then((data) => {
        const [{ jwt }] = data;
        Cookies.set("blog", jwt);
        const payload = {
          isLogin: data.verified,
          jwt: Cookies.get("blog"),
        };
        store.dispatch(
          userActionObjectGenerator(userActionTypes.LOGIN, payload)
        );

        setEmail("");
        setPassword("");
        props.history.push("/dashboard");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["signin-container"]}>
        <form onSubmit={loginSubmit}>
          <Label>login</Label>
          <br />
          <br />
          <Input
            type="email"
            className=""
            name="login-field"
            id="login-filed"
            placeholder="email"
            onChange={emailInput}
            value={email}
          />
          <br />
          <br />
          <Input
            type="password"
            className=""
            name="pswd"
            id="pswd"
            placeholder="Password"
            onChange={passwordInput}
            value={password}
          />
          <br />
          <br />
          <Button type="submit">login</Button>
        </form>
      </div>
    </div>
  );
}
export default withRouter(Login);
