import { Product } from "@/typs";
import { ProductCard } from ".";
import Link from "next/link";

export const Products = ({ products }: { products: Product[] }) => {
  return (
    <section className="pt-14">
      <h1 className="text-[#343d63] text-4xl mb-20 font-bold text-center">
        Our Products
      </h1>
      <div className="max-md:px-5 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {products?.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} key={product.id} />
          </Link>
        ))}
      </div>
    </section>
  );
};
