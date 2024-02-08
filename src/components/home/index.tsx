import { Products } from "..";

export const Home = ({ products }: { products: string[] }) => {
  console.log(products);

  return (
    <div>
      <Products />

    </div>
  );
};
