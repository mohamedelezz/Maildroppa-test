import { SingleProduct } from ".";

export const Products = () => {
  return <section className="pt-20 px-6">
    <h1 className="mb-6 text-[#343d63] text-2xl font-bold text-center">Products</h1>
    <div className="grid grid-cols-3 gap-2 mb-6">
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
    </div>

  </section>;
};
