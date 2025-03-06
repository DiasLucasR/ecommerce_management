"use client"
import React from 'react'
import { AwaitedComponent } from '../awaited-component/awaited-componenent';
import SaleVisualization from './sale-visualization';
import SaleService from '@/service/salesService';

async function getAllSales() {
    try {
      const sales = await SaleService.getSalesAll();
      return sales;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products. Please try again later.");
    }
  }
  

export default function SaleVisualizationPage() {
  return (
    <div className="flex flex-col gap-4 w-full">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-tight">Sales Visualization</h1>
    </div>
    <div className="grid">
      <AwaitedComponent resolve={getAllSales()}>
        {(data) => 
         <SaleVisualization sales={data} />
        }
      </AwaitedComponent>
    </div>
  </div>
  )
}


