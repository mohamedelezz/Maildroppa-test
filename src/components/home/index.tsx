import Image from "next/image";

export const Home = ({ products }: { products: string[] }) => {
  console.log(products);

  return (
    <div>
      <Image
        width={500}
        height={500}
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
      />
    </div>
  );
};
