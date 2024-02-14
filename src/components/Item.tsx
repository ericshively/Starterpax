import categories from '@/data/categories.json'
import { Categories, CategoryData } from '@/data/categoryTypes'
import Link from 'next/link'
import Image from 'next/image'

export default function ItemList({ item }: { item: CategoryData }) {
    return (
        <div className="m-4 rounded max-w-96">
            <Link href={item.link}>
                <Image className="max-h-44 m-2 object-scale-down" src={`/images/` + item.image} alt={""} width={172} height={172} />
            </Link>
            <center className="max-w-48"> {item.name} </center>
        </div>
    )
  }