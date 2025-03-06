

import React, { useMemo, useState } from 'react'
import TableShowData from '../table-show-data/table-show-data'

interface CategoriesVisualizationProps{
    categories: any[] 
}

export default function CategoriesVisualization({categories}: CategoriesVisualizationProps) {
 
    const [columns, headers] = useMemo(() => {
        if (categories.length === 0) return [[], []];
    
        const headers = Object.keys(categories[0]);
    
        const columns = categories.map((categories) => Object.values(categories));
    
        return [columns, headers];
      }, [categories]);
   

  return (
    <div className='w-full'>
      <TableShowData columns={columns} headers={headers} />
    </div>
  )
}
