import BlogItem from "./BlogItem";
import styles from "./blogList.module.scss";

const BlogList = ({ blogs }: any) => {
  console.log("blogs:", blogs);
  return (
    <div className={styles.grid}>
      {blogs.map((blog: any, index: number) => (
        <BlogItem blog={blog} key={index} />
      ))}
    </div>
  );
};
export default BlogList;
