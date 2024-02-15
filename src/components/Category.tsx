import categoryFriendlyNames from '@/data/categoryFriendlyNames.json'
import { CategoryFriendlyNames } from '@/data/categoryTypes'

export default function Category({ categoryName }: { categoryName: string }) {
    return (
      <div className="bg-gray-500 min-w-20 rounded text-center text-sm md:text-md lg:text-lg xl:text-xl p-2 md:p-4 lg:p-6 hover:border-2 hover:border-green-500">
        {(categoryFriendlyNames as CategoryFriendlyNames)[categoryName]}
      </div>
    )
  }