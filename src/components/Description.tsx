export type CategoryDescriptions = {
  [key: string]: string
}

const categoryDescriptions: CategoryDescriptions = {
  "HomeBar": `A starter pack for a home bar can be pricy to get started. Here are some high value items to hit the ground running. You need to include
         a bourbon whiskey, scotch whisky, gin, vodka, tequila blanco, white rum, and a a couple mixers like vermouth and bitters for classic cocktails.
         You'll also need a shaker, a measuring jigger, strainer, and a stirring spoon found in a pack. To finish it off, a large ice cube tray.`,
  "Whiskey": `Whiskey has a wide range of flavors. To start off, you'll want a variety including a sweet bourbon, a spicy rye, a smoky scotch,
              an aged single malt smooth scotch, a creamy Irish, and a few other classics.`,
  "Weightlifting": `These five core exercises are the essential starter pack to weightlifting. They will work out the most muscle groups for the time spent
                   helping anyone who tries them to be healthier. Follow the link to Stronglifts 5x5 for more details.`
  
}


export default function Description({ description }: { description: string }) {
    return (
        <div className="text-center text-xl mt-12 mx-60 mb-20">
          {categoryDescriptions[description]}
        </div>
    )
  }