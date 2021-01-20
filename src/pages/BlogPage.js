import Blog from "../components/Blog";
import { getBlogById } from "../api/blogs";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

function BlogPage(props) {
  const [blog, setBlog] = useState();
  useEffect(() => {
    if (props.isLogin && props.jwt.length !== 0) {
      if (blog === undefined) {
        getBlogById(props.match.params.id)
          .then((data) => {
            if (data.data) {
              alert(data.data);
              props.history.push("/dashboard");
            } else {
              setBlog(data);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else if (props.match.params.id !== blog.id) {
        getBlogById(props.match.params.id)
          .then((data) => {
            if (data.data) {
              alert(data.data);
              props.history.push("/dasborad");
            } else {
              setBlog(data);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    } else {
      if (props.isLogin !== undefined) {
        props.history.push("/");
      }
    }
    // eslint-disable-next-line
  });
  // console.log("blog-->", blog);
  return blog === undefined ? (
    <h1> Loading..</h1>
  ) : props.isLogin ? (
    <Blog blog={blog} />
  ) : (
    <Redirect to="/" />
  );
  // return <h1> Loading..</h1>;
}

const mapStateToProps = (state) => {
  return {
    jwt: state.authReducer.jwt,
    isLogin: state.authReducer.isLogin,
  };
};

export default connect(mapStateToProps)(BlogPage);
