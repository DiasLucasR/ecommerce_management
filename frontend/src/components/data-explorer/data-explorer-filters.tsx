"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DataExplorerFilters() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Filter Data</CardTitle>
        <CardDescription>Refine your data view with these filters</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="data-source">Data Source</Label>
            <Select>
              <SelectTrigger id="data-source">
                <SelectValue placeholder="Select source" />
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
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="home">Home & Garden</SelectItem>
                <SelectItem value="sports">Sports & Outdoors</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date-from">Date From</Label>
            <Input id="date-from" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date-to">Date To</Label>
            <Input id="date-to" type="date" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price-range">Price Range</Label>
          <div className="flex items-center gap-2">
            <Input id="price-min" placeholder="Min" type="number" />
            <span>to</span>
            <Input id="price-max" placeholder="Max" type="number" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button>Apply Filters</Button>
      </CardFooter>
    </Card>
  )
}

