import { CategoryData } from "@/data/categoryTypes";
import Link from "next/link";
import Image from "next/image";

export default function Item({ item }: { item: CategoryData }) {
  return (
    <div className="m-1 flex max-w-96 flex-col justify-between rounded border-2 border-black hover:border-green-500 lg:m-4">
      <Link href={item.link}>
        <Image
          className="sm:w-26 sm:h-26 h-20 w-20 object-fill md:h-32 md:w-32 lg:h-44 lg:w-44"
          src={`/images/` + item.image}
          alt={""}
          width={176}
          height={176}
        />
      </Link>
      <center className="sm:w-26 lg:text-md w-20 text-xs md:w-32 md:text-sm lg:w-44">
        {" "}
        {item.name}{" "}
      </center>
    </div>
  );
}
