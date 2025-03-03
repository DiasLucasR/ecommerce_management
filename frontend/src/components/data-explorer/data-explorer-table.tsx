"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample product data
const products = [
  {
    id: "PRD001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 129.99,
    stock: 45,
    rating: 4.5,
  },
  {
    id: "PRD002",
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 28,
    rating: 4.2,
  },
  {
    id: "PRD003",
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    stock: 150,
    rating: 4.0,
  },
  {
    id: "PRD004",
    name: "Running Shoes",
    category: "Footwear",
    price: 89.99,
    stock: 62,
    rating: 4.7,
  },
  {
    id: "PRD005",
    name: "Coffee Maker",
    category: "Home & Kitchen",
    price: 79.99,
    stock: 33,
    rating: 4.3,
  },
  {
    id: "PRD006",
    name: "Yoga Mat",
    category: "Sports",
    price: 29.99,
    stock: 85,
    rating: 4.1,
  },
  {
    id: "PRD007",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    stock: 40,
    rating: 4.4,
  },
  {
    id: "PRD008",
    name: "Desk Lamp",
    category: "Home & Kitchen",
    price: 34.99,
    stock: 55,
    rating: 3.9,
  },
  {
    id: "PRD009",
    name: "Winter Jacket",
    category: "Clothing",
    price: 149.99,
    stock: 25,
    rating: 4.6,
  },
  {
    id: "PRD010",
    name: "Gaming Mouse",
    category: "Electronics",
    price: 49.99,
    stock: 70,
    rating: 4.8,
  },
]

export function DataExplorerTable() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const totalPages = Math.ceil(products.length / pageSize)
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>
              <div className="flex items-center">
                Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>Category</TableHead>
            <TableHead>
              <div className="flex items-center">
                Price
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center">
                Stock
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>Rating</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <strong>
              {startIndex + 1}-{Math.min(endIndex, products.length)}
            </strong>{" "}
            of <strong>{products.length}</strong> items
          </p>
          <div className="flex items-center gap-1">
            <p className="text-sm text-muted-foreground">Rows per page</p>
            <Select value={pageSize.toString()} onValueChange={(value) => setPageSize(Number(value))}>
              <SelectTrigger className="h-8 w-16">
                <SelectValue placeholder={pageSize} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setPage(1)} disabled={page === 1}>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setPage(page - 1)} disabled={page === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" size="icon" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setPage(totalPages)} disabled={page === totalPages}>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

