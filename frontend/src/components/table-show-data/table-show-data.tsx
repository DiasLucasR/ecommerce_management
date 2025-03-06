import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export default function TableShowData({ headers, columns }: { headers?: any[], columns?: any[] }) {

  return (
    <div className="rounded-md border w-full">
      <Table>
        <TableHeader>

          <TableRow>
            {headers?.length && (
              headers.map((head, index) => (
                <TableHead key={index}>
                  {head}
                </TableHead>
              )))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {columns?.length && (
            columns.map((row, index) => (
              <TableRow key={index}>
                {row &&
                  row.map((cell : any, indexRow : number) => (
                    <TableCell key={indexRow}>
                      {cell}
                    </TableCell>
                  ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
