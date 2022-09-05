import ShoeList from "../../components/Shop/ShoeList";

const Shop = ({ data }: any) => {
  console.log("data:", data);
  return (
    <div>
      <ShoeList data={data} />
    </div>
  );
};

export default Shop;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/shop/all");
  console.log("res:", res);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

// SSR
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/random.php"
//   );

//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
