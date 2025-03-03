"use client"
import { ArrowUpDown, Database, FileSpreadsheet, MoreHorizontal, Package, Server } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const dataSources = [
  {
    id: "ds-001",
    name: "Product Catalog",
    type: "Database",
    status: "Active",
    lastSync: "2 hours ago",
    records: "12,450",
    icon: Database,
  },
  {
    id: "ds-002",
    name: "Customer Data",
    type: "API",
    status: "Active",
    lastSync: "1 day ago",
    records: "45,230",
    icon: Server,
  },
  {
    id: "ds-003",
    name: "Inventory Data",
    type: "CSV",
    status: "Active",
    lastSync: "3 hours ago",
    records: "5,120",
    icon: FileSpreadsheet,
  },
  {
    id: "ds-004",
    name: "Sales Transactions",
    type: "Database",
    status: "Inactive",
    lastSync: "5 days ago",
    records: "102,340",
    icon: Database,
  },
  {
    id: "ds-005",
    name: "Logistics Data",
    type: "JSON",
    status: "Active",
    lastSync: "12 hours ago",
    records: "8,760",
    icon: Package,
  },
]

export function DataSourcesList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>
            <div className="flex items-center">
              Last Sync
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
          </TableHead>
          <TableHead>Records</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSources.map((source) => (
          <TableRow key={source.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <source.icon className="h-5 w-5 text-muted-foreground" />
                <span>{source.name}</span>
              </div>
            </TableCell>
            <TableCell>{source.type}</TableCell>
            <TableCell>
              <Badge variant={source.status === "Active" ? "default" : "secondary"}>{source.status}</Badge>
            </TableCell>
            <TableCell>{source.lastSync}</TableCell>
            <TableCell>{source.records}</TableCell>
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
                  <DropdownMenuItem>Edit configuration</DropdownMenuItem>
                  <DropdownMenuItem>Sync now</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

