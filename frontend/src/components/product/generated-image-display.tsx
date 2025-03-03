import Image from "next/image"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface GeneratedImageDisplayProps {
  imageUrl: string
}

export function GeneratedImageDisplay({ imageUrl }: GeneratedImageDisplayProps) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Generated Image</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image src={imageUrl || "/placeholder.svg"} alt="Generated product image" fill className="object-cover" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download Image
        </Button>
      </CardFooter>
    </Card>
  )
}

