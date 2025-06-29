import { createColumnHelper } from '@tanstack/react-table'
import { useMemo } from 'react'

import { Topic } from '../types'

const columnHelper = createColumnHelper<Topic>()

export const useTopicsTableColumns = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: 'name',
        header: 'Name',
        cell: ({ row }) => row.original.name
      }),
      columnHelper.display({
        id: 'image',
        header: 'Image',
        cell: ({ row }) => row.original.image
      })
    ],
    []
  )
}
