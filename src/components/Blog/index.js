import Image from "../common/Image";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { Link } from "react-router-dom";
import styles from "./blog.module.scss";
function Blog(props) {
  return (
    <div className={styles["blog"]}>
      <div className={styles["blog-container"]}>
        <div className={styles["blog-tite"]}>
          <Heading>{props.blog.title}</Heading>
        </div>
        <div className={styles["blog-image"]}>
          <Image src={props.blog.imageUrl} alt={props.blog.title} />
        </div>
        <div className={styles["blog-content"]}>
          <Paragraph data={props.blog.content} />{" "}
        </div>
      </div>
      <div className={styles["releated-links"]}>
        <ul>
          {props.blog.links.map((link, index) => {
            return (
              <li key={`${link.id}-${index}`}>
                <Link to={`/blog/${link.id}`}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Blog;
