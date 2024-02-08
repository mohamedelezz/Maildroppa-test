import { SingleProduct } from "@/src/components";

export const getServerSideProps = async (cts) => {
  // api async
  const singleProduct: string[] = ["lklllllllllllllll"];

  return {
    props: {
      singleProduct,
    },
  };
};

export default SingleProduct;
