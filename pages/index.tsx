import { Home } from "@/src/components";
import { Blogs } from "@/typs";
import axios from "axios";

export const getStaticProps = async () => {
  // api async 
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const Products: Blogs[] = res?.data;

  return {
    props: {
      Products,
    },
  };
};

export default Home;
