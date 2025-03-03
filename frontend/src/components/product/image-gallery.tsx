import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sampleImages = [
  { id: 1, url: "/placeholder.svg?height=100&width=100", description: "Wireless Headphones" },
  { id: 2, url: "/placeholder.svg?height=100&width=100", description: "Smart Watch" },
  { id: 3, url: "/placeholder.svg?height=100&width=100", description: "Laptop" },
  { id: 4, url: "/placeholder.svg?height=100&width=100", description: "Smartphone" },
  { id: 5, url: "/placeholder.svg?height=100&width=100", description: "Tablet" },
  { id: 6, url: "/placeholder.svg?height=100&width=100", description: "Bluetooth Speaker" },
]

export function ImageGallery() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Visualizations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {sampleImages.map((image) => (
            <div key={image.id} className="space-y-2">
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image src={image.url || "/placeholder.svg"} alt={image.description} fill className="object-cover" />
              </div>
              <p className="text-xs text-center text-muted-foreground">{image.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

