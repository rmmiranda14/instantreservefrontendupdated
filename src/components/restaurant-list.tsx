import Image from "next/image"
import ItalianBistro from "@/images/restaurants/italianbistro.jpg"
import Sushi from "@/images/restaurants/sushiworld.jpg"
import Burger from "@/images/restaurants/burger.jpg"
import Seafood from "@/images/restaurants/seafood.jpg"
import FrenchCafe from "@/images/restaurants/frenchcafe.jpg"
import FrenchRestaurant from "@/images/restaurants/frenchplace.jpg"
import Tacos from "@/images/restaurants/tacostand.jpg"
import Vegan from "@/images/restaurants/vegan.jpg"
import Pasta from "@/images/restaurants/pasta.jpg"
import Steak from "@/images/restaurants/steakhouse.jpg"
import Pancakes from "@/images/restaurants/pancakes.jpg"
import Ramen from "@/images/restaurants/izakaya.jpg"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface Restaurant {
  id: string
  name: string
  image: any
  address: string
  description: string
}

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "The Italian Bistro",
    image: ItalianBistro,
    address: "123 Main St, Springfield, IL",
    description: "Authentic Italian cuisine with a cozy atmosphere."
  },
  {
    id: "2",
    name: "Sushi World",
    image: Sushi,
    address: "456 Elm St, Chicago, IL",
    description: "Fresh sushi and sashimi made daily with the finest ingredients."
  },
  {
    id: "3",
    name: "Burger Haven",
    image: Burger,
    address: "789 Oak St, Los Angeles, CA",
    description: "Gourmet burgers with a variety of toppings and sides."
  },
  {
    id: "4",
    name: "Le Petit Café",
    image: FrenchCafe,
    address: "101 Pine St, Paris, France",
    description: "A charming café offering French pastries and specialty coffees."
  },
  {
    id: "5",
    name: "The Seafood Shack",
    image: Seafood,
    address: "202 Beach Blvd, Miami, FL",
    description: "Fresh, locally sourced seafood with stunning ocean views."
  },
  {
    id: "6",
    name: "Taco Town",
    image: Tacos,
    address: "303 Maple St, Austin, TX",
    description: "Tacos, burritos, and other Mexican favorites made with fresh ingredients."
  },
  {
    id: "7",
    name: "Café de Paris",
    image: FrenchRestaurant,
    address: "504 Rue de la Paix, Paris, France",
    description: "Classic French dishes in an elegant, old-world setting."
  },
  {
    id: "8",
    name: "Vegan Delights",
    image: Vegan,
    address: "607 Green Ave, Portland, OR",
    description: "A vegan café offering healthy, plant-based meals."
  },
  {
    id: "9",
    name: "Ramen Revolution",
    image: Ramen,
    address: "808 Cherry Blvd, Tokyo, Japan",
    description: "Specializing in flavorful, rich ramen bowls with unique toppings."
  },
  {
    id: "10",
    name: "Pasta Perfection",
    image: Pasta,
    address: "909 Birch St, Rome, Italy",
    description: "Handmade pasta dishes served in a traditional Italian style."
  },
  {
    id: "11",
    name: "Steak House Deluxe",
    image: Steak,
    address: "111 Oak St, New York, NY",
    description: "Premium cuts of steak cooked to perfection, paired with fine wines."
  },
  {
    id: "12",
    name: "The Pancake House",
    image: Pancakes,
    address: "1210 Sunrise Blvd, Denver, CO",
    description: "Serving delicious pancakes, waffles, and breakfast comfort food."
  }
]

export default function RestaurantResults() {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-red-600 text-3xl font-bold mb-6">Restaurant Results</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden bg-white/10">
              <Image
                src={restaurant.image}
                alt={`Photo of ${restaurant.name}`}
                width={300}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader>
                <CardTitle>{restaurant.name}</CardTitle>
                <CardDescription>{restaurant.address}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{restaurant.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">See More Information</h3>
                  <div className="flex flex-wrap gap-2">
                      <Button asChild>
                        <Link href="/restaurantinformation">See Available Times</Link>
                      </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

