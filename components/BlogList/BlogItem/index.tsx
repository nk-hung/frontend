import Image from "next/image";
import Link from "next/link";
import styles from "./blogItem.module.scss";

const BlogItem = ({ blog }: any) => {
  return (
    <Link href={"/blogs/[id]"} as={`/blogs/${blog.id}`}>
      <a className={styles.card}>
        <h2>{blog.title}</h2>
        <img src={blog.url} alt='Picture' width={"100"} height={"100"} />
      </a>
    </Link>
  );
};

export default BlogItem;
