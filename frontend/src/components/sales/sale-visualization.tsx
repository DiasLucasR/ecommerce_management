

import React, { useMemo, useState } from 'react'
import TableShowData from '../table-show-data/table-show-data'

interface SaleVisualizationProps{
  sales: any[] 
}

export default function SaleVisualization({sales}: SaleVisualizationProps) {
 
    const [columns, headers] = useMemo(() => {
        if (sales.length === 0) return [[], []];
    
        const headers = Object.keys(sales[0]);
    
        const columns = sales.map((sales) => Object.values(sales));
    
        return [columns, headers];
      }, [sales]);
   

  return (
    <div className='w-full'>
      <TableShowData columns={columns} headers={headers} />
    </div>
  )
}
