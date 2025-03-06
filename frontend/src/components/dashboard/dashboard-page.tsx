"use client"
import { ArrowDownIcon, ArrowRightIcon, BarChart3, Database, LineChart, PieChart, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardChart } from "@/components/dashboard/dashboard-chart"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { useEffect, useState } from "react"
import ChartService from "@/service/chartService"
import { Chart } from "@/types/chartTypes"
import ChartsRender from "../chart-render/chart-render"
import { AwaitedComponent } from "../awaited-component/awaited-componenent"

export function DashboardPage() {
  const [charts , setCharts] = useState([])


  useEffect(() => {
    ChartService.getChartsAll().then(res => {
      if(Array.isArray(res)){
        console.log(res)
        setCharts(res)
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])



   

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
    {charts && charts?.map((chart, index) => (
      <Card key={`chart-${index}`}>
        <CardContent className="">
        <AwaitedComponent resolve={ChartService.getChartsByEndpoint(chart.endpoint)}>
          {(data) => 
           <ChartsRender chart={chart}  content={data}/>
          }
        </AwaitedComponent>
        </CardContent>
      </Card>
    ))}
  </div>
  
  )
}

