export type CategoryData = {
    name: string
    image: string
    link: string
}

export type Categories = {
    [key: string]: CategoryData[]
}