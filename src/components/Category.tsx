import categoryFriendlyNames from "@/data/categoryFriendlyNames.json";
import { CategoryFriendlyNames } from "@/data/categoryTypes";

export default function Category({
  categoryName,
  currentlySelected,
}: {
  categoryName: string;
  currentlySelected: boolean;
}) {
  return (
    <div
      className={`md:text-md lg:text-md min-w-20 rounded-lg border-2 bg-gray-700 p-2 text-center text-xs sm:text-sm md:m-1 md:p-4 lg:p-6 xl:text-lg
                      ${currentlySelected ? "border-blue-500" : "border-black hover:border-green-500"} `}
    >
      {(categoryFriendlyNames as CategoryFriendlyNames)[categoryName]}
    </div>
  );
}
