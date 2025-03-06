"use client"

import { useEffect, useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ImageGallery } from "./image-gallery"
import { ImageGenerationForm } from "./image-generation-form"
import { GeneratedImageDisplay } from "./generated-image-display"
import TableShowData from "../table-show-data/table-show-data"
import ProductsService from "@/service/productsService"
import { AwaitedComponent } from "../awaited-component/awaited-componenent"
import ProductVisualization from "./product-visualization"

async function getAllProducts() {
  try {
    const products = await ProductsService.getProductsAll();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products. Please try again later.");
  }
}

export function ProductVisualizationPage() {

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Product Visualization</h1>
      </div>
      <div className="grid">
        <AwaitedComponent resolve={getAllProducts()}>
          {(data) => 
           <ProductVisualization products={data} />
          }
        </AwaitedComponent>
      </div>
    </div>
  )
}

