import React, { useMemo, useState } from 'react'
import TableShowData from '../table-show-data/table-show-data'

interface ProductsVisualizationProps{
    products: any[] 
}

export default function ProductVisualization({products}: ProductsVisualizationProps) {
 
    const [columns, headers] = useMemo(() => {
        if (products.length === 0) return [[], []];
    
        const headers = Object.keys(products[0]);
    
        const columns = products.map((product) => Object.values(product));
    
        return [columns, headers];
      }, [products]);
   

  return (
    <div className='w-full'>
      <TableShowData columns={columns} headers={headers} />
    </div>
  )
}
