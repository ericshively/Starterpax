export default function Category({ categoryName }: { categoryName: string }) {
    return (
      <div className="bg-gray-500 min-w-20 rounded text-center p-4 hover:border-2 hover:border-green-500">
        {categoryName}
      </div>
    )
  }