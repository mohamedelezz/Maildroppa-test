// footer component

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white border-t-[1px] border-[#d9ddf5]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Image
                width={50}
                height={50}
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-700">
              © 2020 Workflow. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-700">
              Made with ❤️ by <a href="https://twitter.com/vercel">Vercel</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
