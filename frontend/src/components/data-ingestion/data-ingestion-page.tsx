"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataSourcesList } from "@/components/data-ingestion/data-sources-list"
import { NewDataSourceDialog } from "@/components/data-ingestion/new-data-source-dialog"

export function DataIngestionPage() {
  const [showNewDataSourceDialog, setShowNewDataSourceDialog] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Data Ingestion</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => setShowNewDataSourceDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Data Source
          </Button>
        </div>
      </div>
      <Tabs defaultValue="sources" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sources">Data Sources</TabsTrigger>
          <TabsTrigger value="pipelines">Pipelines</TabsTrigger>
          <TabsTrigger value="schedules">Schedules</TabsTrigger>
        </TabsList>
        <TabsContent value="sources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Data Sources</CardTitle>
              <CardDescription>Manage your connected data sources and their configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <DataSourcesList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pipelines" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Pipelines</CardTitle>
              <CardDescription>Configure and monitor your data processing pipelines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="text-sm text-muted-foreground">No pipelines configured yet</p>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Pipeline
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="schedules" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ingestion Schedules</CardTitle>
              <CardDescription>Set up and manage scheduled data ingestion jobs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="text-sm text-muted-foreground">No schedules configured yet</p>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Schedule
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <NewDataSourceDialog open={showNewDataSourceDialog} onOpenChange={setShowNewDataSourceDialog} />
    </div>
  )
}

