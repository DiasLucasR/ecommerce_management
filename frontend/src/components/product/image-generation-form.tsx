"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ImageGenerationFormProps {
  onGenerate: (description: string) => void
}

export function ImageGenerationForm({ onGenerate }: ImageGenerationFormProps) {
  const [description, setDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    // Simulate API call delay
    setTimeout(() => {
      onGenerate(description)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Product Image</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Textarea
            placeholder="Enter product description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="resize-none"
          />
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isGenerating || !description.trim()}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Image"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

