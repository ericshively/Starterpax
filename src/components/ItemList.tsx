import categories from '@/data/categories.json'
import Item from './Item'
import { Categories } from '@/data/categoryTypes'


export default function ItemList({ categoryName }: { categoryName: string }) {
    return (
      <div className="flex flex-wrap justify-center">
        {
          (categories as Categories)[categoryName].map((item) => (
            <Item key={item.name} item={item} />
          ))
        }
      </div>
    )
  }