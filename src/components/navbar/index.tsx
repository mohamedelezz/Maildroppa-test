import { links } from "@/constants/NavLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const path = usePathname();
  
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="#" className="flex">
          <Image
            width={50}
            height={50}
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
            className="h-8 w-auto mr-3 ml-2"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            Maildroppa
          </span>
        </Link>
        <div className=" w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col   mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium gap-2 ">
            {links.map(({ id, href, label }) => (
              <Link
                key={id}
                href={href}
                className={`
                block py-2 pr-4 pl-3  rounded   md:p-0 
                ${path===href && 'bg-blue-700 md:text-blue-700 md:bg-transparent '}
                `}
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
