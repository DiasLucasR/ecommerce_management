"use client"

import { useState } from "react"
import { Database, FileSpreadsheet, Package, Server } from "lucide-react"

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface NewDataSourceDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NewDataSourceDialog({ open, onOpenChange }: NewDataSourceDialogProps) {
  const [sourceType, setSourceType] = useState("database")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Data Source</DialogTitle>
          <DialogDescription>Connect to a new data source to import data into the platform</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="database" value={sourceType} onValueChange={setSourceType} className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="database">
              <Database className="mr-2 h-4 w-4" />
              Database
            </TabsTrigger>
            <TabsTrigger value="api">
              <Server className="mr-2 h-4 w-4" />
              API
            </TabsTrigger>
            <TabsTrigger value="file">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              File
            </TabsTrigger>
            <TabsTrigger value="other">
              <Package className="mr-2 h-4 w-4" />
              Other
            </TabsTrigger>
          </TabsList>
          <TabsContent value="database" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="db-name">Name</Label>
                <Input id="db-name" placeholder="Product Database" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="db-type">Database Type</Label>
                <Select>
                  <SelectTrigger id="db-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mysql">MySQL</SelectItem>
                    <SelectItem value="postgres">PostgreSQL</SelectItem>
                    <SelectItem value="mongodb">MongoDB</SelectItem>
                    <SelectItem value="sqlserver">SQL Server</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="db-host">Host</Label>
              <Input id="db-host" placeholder="localhost or db.example.com" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="db-port">Port</Label>
                <Input id="db-port" placeholder="3306" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="db-name">Database Name</Label>
                <Input id="db-name" placeholder="products_db" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="db-username">Username</Label>
                <Input id="db-username" placeholder="db_user" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="db-password">Password</Label>
                <Input id="db-password" type="password" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="api" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="api-name">Name</Label>
                <Input id="api-name" placeholder="Product API" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-type">API Type</Label>
                <Select>
                  <SelectTrigger id="api-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rest">REST</SelectItem>
                    <SelectItem value="graphql">GraphQL</SelectItem>
                    <SelectItem value="soap">SOAP</SelectItem>
                    <SelectItem value="webhook">Webhook</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-url">API URL</Label>
              <Input id="api-url" placeholder="https://api.example.com/v1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-auth">Authentication</Label>
              <Select>
                <SelectTrigger id="api-auth">
                  <SelectValue placeholder="Select authentication type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="basic">Basic Auth</SelectItem>
                  <SelectItem value="apikey">API Key</SelectItem>
                  <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          <TabsContent value="file" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="file-name">Name</Label>
                <Input id="file-name" placeholder="Product Catalog" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="file-type">File Type</Label>
                <Select>
                  <SelectTrigger id="file-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="xml">XML</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-upload">Upload File</Label>
              <Input id="file-upload" type="file" />
            </div>
          </TabsContent>
          <TabsContent value="other" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="other-name">Name</Label>
              <Input id="other-name" placeholder="Custom Data Source" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="other-description">Description</Label>
              <Input id="other-description" placeholder="Describe your data source" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="other-config">Configuration</Label>
              <textarea
                id="other-config"
                className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter configuration details in JSON format"
              ></textarea>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button>Connect</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

