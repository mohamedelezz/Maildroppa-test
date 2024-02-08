import { Home } from "@/src/components";

export const getServerSideProps = async () => {
  // api async 
  const products: string[] = ['lklllllllllllllll'];

  return {
    props: {
      products,
    },
  };
};

export default Home;
