"use client"
import React from 'react'
import { AwaitedComponent } from '../awaited-component/awaited-componenent';
import CategoriesVisualization from './categories-visualization';
import CategoriesService from '@/service/categoriesService';

async function getCotegoriesAll() {
    try {
      const products = await CategoriesService.getCategoriesAll();
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products. Please try again later.");
    }
  }
  

export default function CategoriesVisualizationPage() {
  return (
    <div className="flex flex-col gap-4 w-full">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-tight">Product Visualization</h1>
    </div>
    <div className="grid">
      <AwaitedComponent resolve={getCotegoriesAll()}>
        {(data) => 
         <CategoriesVisualization categories={data} />
        }
      </AwaitedComponent>
    </div>
  </div>
  )
}


