"use client";

import categories from "@/data/categories.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Category from "./Category";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <Link href="/">
        <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-2 lg:p-4">
          {" "}
          Starter Pax{" "}
        </h1>
      </Link>
      <div className="flex flex-wrap justify-center">
        {Object.keys(categories).map((category) => (
          <Link key={category} href={category}>
            <Category
              categoryName={category}
              currentlySelected={pathname === "/" + category}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
