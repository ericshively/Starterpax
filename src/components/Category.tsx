export default function Category({ categoryName }: { categoryName: string }) {
    return (
      <div className="bg-gray-500 min-w-20 rounded text-center p-4">
        {categoryName}
      </div>
    )
  }