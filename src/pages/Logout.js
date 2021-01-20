import Cookies from "js-cookie";
import store from "../redux/store/store";
import userActionObjectGenerator from "../redux/action/userAction.geneartor";
import { userActionTypes } from "../redux/constant/userAction.types";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../api/auth";

function Logout(props) {
  useEffect(() => {
    if (props.isLogin && props.jwt.length !== 0) {
      logout()
        .then((data) => {
          Cookies.remove("blog", { path: "/" });
          store.dispatch(
            userActionObjectGenerator(userActionTypes.LOGIN, {
              isLogin: false,
              jwt: "",
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Cookies.remove("blog", { path: "/" });
      props.history.push("/");
    }
    // eslint-disable-next-line
  });

  return props.isLogin === undefined ? <h1>Loading </h1> : <Redirect to="/" />;
}
const mapStateToProps = (state) => {
  return {
    jwt: state.authReducer.jwt,
    isLogin: state.authReducer.isLogin,
  };
};

export default connect(mapStateToProps)(Logout);
