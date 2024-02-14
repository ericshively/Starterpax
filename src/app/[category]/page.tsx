import ItemList from "../../components/ItemList";
import Description from "@/components/Description";

// export async function generateStaticParams() {
//     const categories = [
//         "bar",
//         "whiskey",
//         "lifting",
//         "skateboard",
//         "cooking",
//         "coffee",
//         "snowboarding",
//         "boardgames",
//         "pc",
//         "mensfashion",
//         "skincare",
//         "homeimprovement",
//       ]
   
//     return categories.map((category) => ({
//       slug: category,
//     }))
//   }

export default function CategoryPage({ params }: { params: { category: string } }) {
    return (
      <div>
        <ItemList categoryName={params.category}/>
        <Description description={params.category}/>
      </div>
    )
}