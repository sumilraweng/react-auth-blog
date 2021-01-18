import { useState } from "react";
import { signin } from "../../api/auth";
import Button from "../common/Button";
import Input from "../common/Input";
import Label from "../common/Label";
import Cookies from "js-cookie";
function Login() {
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
    const loginCredential = {
      email: email,
      password: password,
    };
    signin(loginCredential)
      .then((data) => {
        const [{ jwt }] = data;
        Cookies.set("blog", jwt);
        console.log(Cookies.get("blog"));
      })
      .catch((err) => {
        console.log(Cookies.get("blog"));
        // console.log("sign-->", err.message);
        alert(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={loginSubmit}>
        <Label>login</Label>
        <br />
        <br />
        <Input
          type="text"
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
  );
}
export default Login;
