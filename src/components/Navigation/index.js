import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assests/logo/logo.png";
import Image from "../common/Image";

import styles from "./navigation.module.scss";

function Navigation(props) {
  const signin = () => {
    return (
      <>
        <li className={styles["nav-item"]}>
          <Link to="/">Login</Link>
        </li>
        <li className={styles["nav-item"]}>
          <Link to="/signup">Signup</Link>
        </li>
      </>
    );
  };

  const logout = () => {
    return (
      <>
        <li className={styles["nav-item"]}>
          <Link to="/logout">Logout</Link>
        </li>
      </>
    );
  };
  // props.isLogin===undefined?<h1>loading..</h1>:
  //   props.isLogin && props.jwt.length!=0? :
  return (
    <div className={styles["navigation-sec"]}>
      <div className={styles["image-logo"]}>
        <Image src={logo} alt={"logo"} />
      </div>
      <nav className={styles["navigation-tab"]}>
        <ul className={styles["nav-container"]}>
          {props.isLogin === undefined ? (
            <h1>...</h1>
          ) : props.isLogin && props.jwt.length !== 0 ? (
            logout()
          ) : (
            signin()
          )}
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jwt: state.authReducer.jwt,
    isLogin: state.authReducer.isLogin,
  };
};
export default connect(mapStateToProps)(Navigation);
