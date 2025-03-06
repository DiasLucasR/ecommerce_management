"use client"

import { useState } from "react"
import { Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductVisualizationPage } from "../product/product-visualization-page"
import CategoriesVisualizationPage from "../categories/categories-visualization-page"
import SaleVisualizationPage from "../sales/sales-visualization-page"

export function DataExplorerPage() {
 
   




  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Data Explorer</h1>
      </div>
      <Tabs defaultValue="table" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <ProductVisualizationPage />
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
        <CategoriesVisualizationPage />
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
      <SaleVisualizationPage />
        </TabsContent>
      </Tabs>
    </div>
  )
}

