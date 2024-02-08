import Image from "next/image";
import Link from "next/link";

export const SingleProduct = () => {
  return (
    <Link href="/products/1">
      <div className="w-full max-w-96 border-[1px] border-solid  border-gray-300 bg-white rounded-lg mx-auto">
        <div className="w-full max-h-40 overflow-hidden">
          <Image
            width={400}
            height={400}
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-1 px-3 py-4">
          <h3 className="text-md font-medium text-[#343d63]">
            The Startup’s Guide to the GDPR
          </h3>
          <p className="text-[#676c85] font-light text-sm">this is the desc</p>
        </div>
      </div>
    </Link>
  );
};
