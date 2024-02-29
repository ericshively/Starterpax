import { CategoryData } from '@/data/categoryTypes'
import Link from 'next/link'
import Image from 'next/image'

export default function Item({ item }: { item: CategoryData }) {
    return (
        <div className="flex flex-col justify-between m-1 lg:m-4 rounded max-w-96 border border-black hover:border-green-500">
            <Link href={item.link}>
                <Image className="max-h-16 max-w-16 md:max-h-32 md:max-w-32 lg:max-h-44 lg:max-w-44 m-2 object-scale-down" src={`/images/` + item.image} alt={""} width={172} height={172} />
            </Link>
            <center className="text-sm max-w-16 md: md:max-h-32 md:max-w-32 lg:text-md lg:max-w-44"> {item.name} </center>
        </div>
    )
  }