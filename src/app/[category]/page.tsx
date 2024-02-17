import ItemList from "../../components/ItemList";
import Description from "@/components/Description";
import { CategoryFriendlyNames } from "@/data/categoryTypes";
import categoryFriendlyNames from "@/data/categoryFriendlyNames.json";

export async function generateStaticParams() {
    const categories = [
        "homebar",
        "whiskey",
        "weightlifting",
        "skateboard",
        "coffee",
        "boardgames",
        "pc",
        "skincare",
        "hometools",
        "mensfashion",
      ]
   
    return categories.map((category) => ({
      slug: category,
    }))
  }

export default function CategoryPage({ params }: { params: { category: string } }) {
    return (
      <div>
        <h1 className="text-center text-md lg:text-xl p-2 lg:p-4"> {(categoryFriendlyNames as CategoryFriendlyNames)[params.category]} Starter Pack </h1>
        <ItemList categoryName={params.category}/>
        <Description description={params.category}/>
      </div>
    )
}