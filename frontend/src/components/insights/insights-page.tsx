"use client"

import { useState } from "react"
import { BarChart3, LineChart, PieChart, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InsightCard } from "@/components/insights/insight-card"
import { NewInsightDialog } from "@/components/insights/new-insight-dialog"

export function InsightsPage() {
  const [showNewInsightDialog, setShowNewInsightDialog] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowNewInsightDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Generate New Insight
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Insights</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InsightCard
              title="Product Category Analysis"
              description="AI-generated insights about product category performance"
              icon={PieChart}
              date="Generated 2 days ago"
              content="Based on the analysis of your product data, the 'Electronics' category shows the highest growth potential with a 24% increase in sales over the last quarter. Consider increasing inventory and marketing for this category."
            />
            <InsightCard
              title="Customer Segmentation"
              description="AI-driven customer segmentation based on behavior"
              icon={BarChart3}
              date="Generated 1 week ago"
              content="Your customer base can be segmented into 4 distinct groups: Loyal Shoppers (32%), Occasional Buyers (45%), New Customers (15%), and At-Risk (8%). Focus retention strategies on the At-Risk segment to prevent churn."
            />
            <InsightCard
              title="Sales Trend Prediction"
              description="AI prediction of upcoming sales trends"
              icon={LineChart}
              date="Generated 3 days ago"
              content="Based on historical patterns and current market conditions, we predict a 15% increase in overall sales for the next quarter, with seasonal products showing the strongest growth in the upcoming month."
            />
          </div>
        </TabsContent>
        <TabsContent value="products" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InsightCard
              title="Product Category Analysis"
              description="AI-generated insights about product category performance"
              icon={PieChart}
              date="Generated 2 days ago"
              content="Based on the analysis of your product data, the 'Electronics' category shows the highest growth potential with a 24% increase in sales over the last quarter. Consider increasing inventory and marketing for this category."
            />
            <InsightCard
              title="Product Description Quality"
              description="AI analysis of product descriptions"
              icon={BarChart3}
              date="Generated 5 days ago"
              content="Our AI analysis shows that products with detailed descriptions (100+ words) have 35% higher conversion rates. We've identified 120 products with descriptions under 50 words that could benefit from enhancement."
            />
          </div>
        </TabsContent>
        <TabsContent value="customers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InsightCard
              title="Customer Segmentation"
              description="AI-driven customer segmentation based on behavior"
              icon={BarChart3}
              date="Generated 1 week ago"
              content="Your customer base can be segmented into 4 distinct groups: Loyal Shoppers (32%), Occasional Buyers (45%), New Customers (15%), and At-Risk (8%). Focus retention strategies on the At-Risk segment to prevent churn."
            />
          </div>
        </TabsContent>
        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <InsightCard
              title="Sales Trend Prediction"
              description="AI prediction of upcoming sales trends"
              icon={LineChart}
              date="Generated 3 days ago"
              content="Based on historical patterns and current market conditions, we predict a 15% increase in overall sales for the next quarter, with seasonal products showing the strongest growth in the upcoming month."
            />
          </div>
        </TabsContent>
      </Tabs>
      <NewInsightDialog open={showNewInsightDialog} onOpenChange={setShowNewInsightDialog} />
    </div>
  )
}

