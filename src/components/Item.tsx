import { CategoryData } from '@/data/categoryTypes'
import Link from 'next/link'
import Image from 'next/image'

export default function Item({ item }: { item: CategoryData }) {
    return (
        <div className="flex flex-col justify-between m-1 lg:m-4 rounded max-w-96 border-2 border-black hover:border-green-500">
            <Link href={item.link}>
                <Image className="w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 lg:w-44 lg:h-44 object-fill" src={`/images/` + item.image} alt={""} width={176} height={176}/>
            </Link>
            <center className="text-xs w-20 sm:w-26 md:text-sm md:w-32 lg:text-md lg:w-44"> {item.name} </center>
        </div>
    )
  }