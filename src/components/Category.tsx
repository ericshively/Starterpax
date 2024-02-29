import categoryFriendlyNames from '@/data/categoryFriendlyNames.json'
import { CategoryFriendlyNames } from '@/data/categoryTypes'

export default function Category({ categoryName, currentlySelected }: { categoryName: string, currentlySelected: boolean }) {
    return (
      <div className={`m-1 bg-gray-700 min-w-20 rounded-lg text-center text-sm md:text-md lg:text-lg xl:text-xl p-2 md:p-4 lg:p-6 border-2
                      ${currentlySelected ? 'border-blue-500' : 'border-black hover:border-green-500'} `}>
        {(categoryFriendlyNames as CategoryFriendlyNames)[categoryName]}
      </div>
    )
  }