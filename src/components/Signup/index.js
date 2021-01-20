import Button from "../common/Button";
import Input from "../common/Input";
import Label from "../common/Label";
import { useState } from "react";
import { SignupSchema } from "../../model/signupSchema";
import { signup } from "../../api/auth";
import styles from "./signup.module.scss";
function Signup() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPswd = (event) => {
    setPswd(event.target.value);
  };

  const inputConfirmPswd = (event) => {
    setConfirmPswd(event.target.value);
  };

  const signupSubmit = (event) => {
    const signupCredential = new SignupSchema({
      email: email,
      password: pswd,
      confirmPassword: confirmPswd,
    });

    signup(signupCredential)
      .then((response) => {
        alert(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setEmail("");
    setConfirmPswd("");
    setPswd("");
    event.preventDefault();
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["signup-container"]}>
        <form onSubmit={signupSubmit}>
          <Label>Signup</Label>
          <br />
          <br />
          <Input
            type="email"
            className=""
            name="signup-field"
            id="signup-filed"
            placeholder="email"
            value={email}
            onChange={inputEmail}
          />
          <br />
          <br />
          <Input
            type="password"
            className=""
            name="pswd"
            id="pswd"
            placeholder="Password"
            onChange={inputPswd}
            value={pswd}
          />
          <br />
          <br />
          <Input
            type="password"
            className=""
            name="confirm-pswd"
            id="confirm-pswd"
            placeholder="confirm password"
            onChange={inputConfirmPswd}
            value={confirmPswd}
          />
          <br />
          <br />
          <Button type="submit">signup</Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
