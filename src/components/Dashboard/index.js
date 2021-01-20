import Card from "../Card";
import styles from "./dashboard.module.scss";
import "../../api/blogs";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import Heading from "../common/Heading";

function Dashboard(props) {
  return props.blog === undefined ? (
    <h1>Loading..</h1>
  ) : (
    <div className={styles["blog-cards"]}>
      {props.blog.map((blogElement) => (
        <Link
          key={blogElement.id}
          className={styles["blog-link"]}
          to={`/blog/${blogElement.id}`}
        >
          <Card
            src={blogElement.imageUrl}
            alt={blogElement.author}
            title={blogElement.title}
          />
        </Link>
      ))}
    </div>
  );
}
export default Dashboard;
