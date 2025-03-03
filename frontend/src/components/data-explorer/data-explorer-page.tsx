"use client"

import { useState } from "react"
import { Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataExplorerFilters } from "@/components/data-explorer/data-explorer-filters"
import { DataExplorerTable } from "@/components/data-explorer/data-explorer-table"
import { DataExplorerVisualizations } from "@/components/data-explorer/data-explorer-visualizations"

export function DataExplorerPage() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Data Explorer</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search data..." className="pl-8" type="search" />
          </div>
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
        {showFilters && <DataExplorerFilters />}
      </div>
      <Tabs defaultValue="table" className="space-y-4">
        <TabsList>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="visualizations">Visualizations</TabsTrigger>
        </TabsList>
        <TabsContent value="table" className="space-y-4">
          <DataExplorerTable />
        </TabsContent>
        <TabsContent value="visualizations" className="space-y-4">
          <DataExplorerVisualizations />
        </TabsContent>
      </Tabs>
    </div>
  )
}

