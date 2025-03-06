import { useTheme } from 'next-themes'; // Import the useTheme hook from next-themes
import React, { useEffect, useState } from 'react';

import { Chart } from '@/types/chartTypes';
import { DashboardStats } from '../dash-stats/dash-stats';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, Line, LineChart, Rectangle, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Tooltip } from '../ui/tooltip';


interface ChartsRenderProps {
  chart: Chart;
  content: any[]
}

interface RenderProps{
  chart: Chart;
  content: any[]
}

export function Render({ chart, content }: RenderProps) {

  console.log("chart", chart)
  console.log("content", content)

  switch (chart.endpoint) {
    case 'revenue':
      return <></>
      break;
    case 'sales-by-product-category':
      return <></>
      break;
    case 'sales-by-region':
      return <></>
      break;
    case 'average-ticket':
      return <></>
      break;
    case 'top-products':
      return <></>
      break;
    case 'stock-duration':
      return <></>
      break;
    case 'customer-recurrence':
      return <></>
      break;
    case 'quarterly-revenue':
      return <></>
      break;

    default:
      break;
  }


}

const ChartsRender: React.FC<ChartsRenderProps> = ({ chart, content }) => {



  const { theme } = useTheme(); // Access the current theme (dark or light)

  return <Render chart={chart} content={content} />

};

export default ChartsRender;
