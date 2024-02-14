"use client"

import categories from '@/data/categories.json'
import Link from "next/link"
import { usePathname } from 'next/navigation'

import Category from './Category'

export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <>
        <Link href="/">
          <h1 className="text-3xl p-4"> Starter Pax </h1>
        </Link>
        <div className="flex flex-wrap">
          {Object.keys(categories).map((category) => (
              <Link key={category} href={category}>
                <div className={"m-4 rounded " + (pathname === ("/" + category) ? "border-4 border-blue-500" : "") }>
                  <Category categoryName={category} />
                </div>
              </Link>
          ))}
        </div>
    </>
  )
}