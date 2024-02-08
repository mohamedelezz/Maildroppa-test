import { SingleProduct } from ".";

export const Products = () => {
  return <section className="pt-14">
    <h1 className="mb-6 text-[#343d63] text-2xl font-bold text-center">Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-6">
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
    </div>

  </section>;
};
