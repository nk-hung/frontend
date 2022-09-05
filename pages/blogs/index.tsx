import BlogList from "../../components/BlogList";

const Blogs = ({ blogs }: any) => {
  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=10"
  );
  const blogs = await result.json();

  return {
    props: {
      blogs,
    },
  };
};
