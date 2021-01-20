// import "../redux/store"
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { getAllBlogs } from "../api/blogs";
function HomePage(props) {
  const [blog, setBlog] = useState();
  useEffect(() => {
    if (props.isLogin && props.jwt.length !== 0) {
      getAllBlogs()
        .then((data) => {
          setBlog([...data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (props.isLogin !== undefined) {
        props.history.push("/");
      }
    }
    // eslint-disable-next-line
  }, []);
  // return (
  //   <>
  //     {" "}
  //     <Dashboard />
  //   </>
  // );
  return props.isLogin === undefined ? (
    <Redirect to="/" />
  ) : props.isLogin === true ? (
    <div>
      <Dashboard blog={blog} />{" "}
    </div>
  ) : (
    <Redirect to="/" />
  );
}

const mapStateToProps = (state) => {
  return {
    jwt: state.authReducer.jwt,
    isLogin: state.authReducer.isLogin,
  };
};

export default connect(mapStateToProps)(HomePage);
