import { useTheme } from 'next-themes'; // Import the useTheme hook from next-themes
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Chart } from '@/types/chartTypes';


interface ChartsRenderProps {
  chart: Chart;
}
const ChartsRender: React.FC<ChartsRenderProps> = ({ chart }) => {
  const { theme } = useTheme(); // Access the current theme (dark or light)

  if(chart.type == 'box'){
    return <h2 className='text-black'>{chart.title}</h2>
  }

  console.log(chart.title, chart.type, chart.content)

  const options: Highcharts.Options = {
    title: {
      text: chart.title,
    },
    chart: {
      type: chart.type as Highcharts.ChartType,
      backgroundColor: theme === 'dark' ? '#2b2b2b' : '#ffffff', // Dark or light background
    },
    colors: theme === 'dark'
      ? ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9'] // Dark mode colors
      : ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9'], // Light mode colors
    series: [
      {
        data: chart.content, 
      },
    ],
    plotOptions: {
      series: {
        color: theme === 'dark' ? '#f1f1f1' : '#000000', // Text color for dark/light mode
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartsRender;
