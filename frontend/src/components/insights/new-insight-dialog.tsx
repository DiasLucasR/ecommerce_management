"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface NewInsightDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NewInsightDialog({ open, onOpenChange }: NewInsightDialogProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate AI insight generation
    setTimeout(() => {
      setIsGenerating(false)
      onOpenChange(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Generate New AI Insight</DialogTitle>
          <DialogDescription>Use AI to analyze your data and generate actionable insights</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="insight-type">Insight Type</Label>
            <Select>
              <SelectTrigger id="insight-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product">Product Analysis</SelectItem>
                <SelectItem value="customer">Customer Segmentation</SelectItem>
                <SelectItem value="sales">Sales Prediction</SelectItem>
                <SelectItem value="inventory">Inventory Optimization</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="data-source">Data Source</Label>
            <Select>
              <SelectTrigger id="data-source">
                <SelectValue placeholder="Select data source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product-catalog">Product Catalog</SelectItem>
                <SelectItem value="customer-data">Customer Data</SelectItem>
                <SelectItem value="sales-transactions">Sales Transactions</SelectItem>
                <SelectItem value="inventory-data">Inventory Data</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time-range">Time Range</Label>
            <Select>
              <SelectTrigger id="time-range">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-quarter">Last Quarter</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="insight-question">Specific Question (Optional)</Label>
            <Input id="insight-question" placeholder="E.g., Which product categories are trending upward?" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleGenerate} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Insight"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

