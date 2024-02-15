export type CategoryDescriptions = {
  [key: string]: string
}

const categoryDescriptions: CategoryDescriptions = {
  "homebar": `A starter pack for a home bar can be pricy to get started. Here are some high value items to hit the ground running. You need to include
         a bourbon whiskey, scotch whisky, gin, vodka, tequila blanco, white rum, and a a couple mixers like vermouth and bitters for classic cocktails.
         You'll also need a shaker, a measuring jigger, strainer, and a stirring spoon found in a pack. To finish it off, a large ice cube tray.`,
  "whiskey": `A collection of a variety of whiskeys to get you started on the different types of quality flavors. Whiskey has a wide range of flavors. To start off, you'll want a variety including a sweet bourbon, a spicy rye, a smoky scotch,
              an aged single malt smooth scotch, a creamy Irish, and a few other classics.`,
  "weightlifting": `These five core exercises are the essential starter pack to weightlifting. They will work out the most muscle groups for the time spent
                   helping anyone who tries them to be healthier. Follow the link to Stronglifts 5x5 for more details.`,
  "skateboard": `A skateboarding starter pack is, surprise, an entire skateboard! For the deck / wood, many brands are great too, like Real, Girl, Santa Cruz, Creature,
                etc. Make sure you have a screwdriver and the skate tool above to put it all together! Or go into your local skate shop and they'll be able to help you.
                All together, it should be around $200. not including shoes.`,
  "coffee": `A coffee starter pack could depend on if you already only like a certain type of brew method. Drip, espresso, and aeropress are some of the most common
             and least time consuming (hello pourover). For drip, just get the Ninja pot, filters, grinder, and beans. For espresso, get the De Longhi, grinder and beans.
             For aeropress, get the aeropress, grinder, and beans. But if you're not sure what you like the best, try them all!`,
  "boardgames": `Board games are a must for any gathering! This is a fantastic starter pack of widely available and entertaining board games that are quick to learn
                 and play. Includes card games for variety.`,
  "pc": `A PC starter pack is a great way into getting to know computers and efficiently purchasing one. It includes a monitor, keyboard, mouse, and the entire build.
         This should run almost all modern games at medium quality and is a great value. If you're going to stray from any part in this list, which you can, Make
         sure it's compatible with the rest on pcpartpicker.com.`,
  "skincare": `A core skincare routine only requires a few products. To start off, a cleanser, hydrating for dry skin OR foaming for oily skin.
               Then, a moisturizer with sunscreen. Finally, a toner.`,
  "hometools": `Home improvement tools can be daunting and could take time to build up a collection.
                Here are the core needs to get started on most projects around the house. An upfront investment here will save you a lot of money down the line by
                being able to mow, fix clogged drains, and various other ad-hoc tasks a handyman would do.`
}


export default function Description({ description }: { description: string }) {
    return (
        <div className="text-center text-xl mt-12 mx-60 mb-20">
          {categoryDescriptions[description]}
        </div>
    )
  }