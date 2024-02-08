import { Products } from "..";

export const Home = ({ products }: { products: string[] }) => {
  console.log(products);

  return (
    <div className="flex-1 container mx-auto">
      <Products />

    </div>
  );
};
