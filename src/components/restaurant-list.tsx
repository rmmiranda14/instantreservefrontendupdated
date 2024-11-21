import Image from "next/image"
import OceanPicture from "@/app/restaurant-results/Ocean's Bounty.png"
import RusticSpoon from "@/app/restaurant-results/Rustic Spoon.png"
import SpiceFusion from "@/app/restaurant-results/Spice Fusion.png"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Restaurant {
  id: string
  name: string
  image: string
  address: string
  description: string
  reservationTimes: string[]
}

const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "The Rustic Spoon",
    image: RusticSpoon,
    address: "123 Main St, Anytown, USA",
    description: "A cozy restaurant offering farm-to-table cuisine with a modern twist.",
    reservationTimes: ["6:00 PM", "7:30 PM", "9:00 PM"]
  },
  {
    id: "2",
    name: "Ocean's Bounty",
    image: OceanPicture,
    address: "456 Seaside Ave, Beachville, USA",
    description: "Fresh seafood and stunning ocean views in a relaxed atmosphere.",
    reservationTimes: ["5:30 PM", "7:00 PM", "8:30 PM"]
  },
  {
    id: "3",
    name: "Spice Fusion",
    image: SpiceFusion,
    address: "789 Culinary Blvd, Flavortown, USA",
    description: "An eclectic mix of global cuisines with bold flavors and vibrant presentations.",
    reservationTimes: ["6:30 PM", "8:00 PM", "9:30 PM"]
  },
  {
    id: "4",
    name: "The Rustic Spoon",
    image: "/placeholder.svg?height=400&width=800",
    address: "123 Main St, Anytown, USA",
    description: "A cozy restaurant offering farm-to-table cuisine with a modern twist.",
    reservationTimes: ["6:00 PM", "7:30 PM", "9:00 PM"]
  },
  {
    id: "5",
    name: "Ocean's Bounty",
    image: "/placeholder.svg?height=400&width=800",
    address: "456 Seaside Ave, Beachville, USA",
    description: "Fresh seafood and stunning ocean views in a relaxed atmosphere.",
    reservationTimes: ["5:30 PM", "7:00 PM", "8:30 PM"]
  },
  {
    id: "6",
    name: "Spice Fusion",
    image: "/placeholder.svg?height=400&width=800",
    address: "789 Culinary Blvd, Flavortown, USA",
    description: "An eclectic mix of global cuisines with bold flavors and vibrant presentations.",
    reservationTimes: ["6:30 PM", "8:00 PM", "9:30 PM"]
  },
  {
    id: "7",
    name: "The Rustic Spoon",
    image: "/placeholder.svg?height=400&width=800",
    address: "123 Main St, Anytown, USA",
    description: "A cozy restaurant offering farm-to-table cuisine with a modern twist.",
    reservationTimes: ["6:00 PM", "7:30 PM", "9:00 PM"]
  },
  {
    id: "8",
    name: "Ocean's Bounty",
    image: "/placeholder.svg?height=400&width=800",
    address: "456 Seaside Ave, Beachville, USA",
    description: "Fresh seafood and stunning ocean views in a relaxed atmosphere.",
    reservationTimes: ["5:30 PM", "7:00 PM", "8:30 PM"]
  },
  {
    id: "9",
    name: "Spice Fusion",
    image: "/placeholder.svg?height=400&width=800",
    address: "789 Culinary Blvd, Flavortown, USA",
    description: "An eclectic mix of global cuisines with bold flavors and vibrant presentations.",
    reservationTimes: ["6:30 PM", "8:00 PM", "9:30 PM"]
  },
  {
    id: "10",
    name: "The Rustic Spoon",
    image: "/placeholder.svg?height=400&width=800",
    address: "123 Main St, Anytown, USA",
    description: "A cozy restaurant offering farm-to-table cuisine with a modern twist.",
    reservationTimes: ["6:00 PM", "7:30 PM", "9:00 PM"]
  },
  {
    id: "11",
    name: "Ocean's Bounty",
    image: "/placeholder.svg?height=400&width=800",
    address: "456 Seaside Ave, Beachville, USA",
    description: "Fresh seafood and stunning ocean views in a relaxed atmosphere.",
    reservationTimes: ["5:30 PM", "7:00 PM", "8:30 PM"]
  },
  {
    id: "12",
    name: "Spice Fusion",
    image: "/placeholder.svg?height=400&width=800",
    address: "789 Culinary Blvd, Flavortown, USA",
    description: "An eclectic mix of global cuisines with bold flavors and vibrant presentations.",
    reservationTimes: ["6:30 PM", "8:00 PM", "9:30 PM"]
  }
]

export default function RestaurantResults() {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Restaurant Results</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden">
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
                  <h3 className="font-semibold mb-2">Available Reservation Times:</h3>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.reservationTimes.map((time) => (
                      <Button key={time} variant="outline" size="sm">
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

