import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";

const Blog = ({ blog }: any) => {
  console.log("blog iiiiii:", blog);
  return (
    <div>
      <h2>{blog.title}</h2>
      <Image
        src={blog.url}
        alt='anh'
        width={100}
        height={100}
        layout='responsive'
      />
    </div>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context?.params?.id}`
  );

  const blog = await result.json();

  return {
    props: {
      blog,
    },
  };
};
