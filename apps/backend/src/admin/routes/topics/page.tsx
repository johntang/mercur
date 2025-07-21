import { defineRouteConfig } from '@medusajs/admin-sdk'
import {
  Button,
  Container,
  Drawer,
  Heading,
  Input,
  Label,
  Text,
  toast,
  usePrompt
} from '@medusajs/ui'
import { useMemo, useState } from 'react'
import { useSellersTableQuery } from './helpers'

import { PencilSquare, Shopping, Trash } from '@medusajs/icons'
import { createColumnHelper } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import { ActionsButton } from '../../common/ActionsButton'
import { DataTable } from '../../components/table/data-table'
import {
  useCreateTopic,
  useDeleteTopic,
  useTopics
} from '../../hooks/api/topic'
import { useDataTable } from '../../hooks/table/use-data-table'
import { useTopicsTableColumns } from './helpers/use-seller-table-columns'
import { Topic } from './types'
import { useUploadFile } from '../../hooks/api/upload'

const PAGE_SIZE = 10

type TopicProps = Topic & { store_status: string }

type TopicResponse = {
  topic?: TopicProps[]
  isLoading: boolean
}

const SellersListPage = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')

  const [selectFile, setSelectFile] = useState<File | null>(null)

  const { searchParams, raw } = useSellersTableQuery({
    pageSize: PAGE_SIZE,
    offset: 0
  })

  const { topic, isLoading } = useTopics(
    {
      fields: 'id,name,created_at,image'
    },
    undefined,
    {
      q: searchParams.q,
      order: searchParams.order
    }
  ) as TopicResponse

  const { mutateAsync: createTopic } = useCreateTopic()

  const { mutateAsync: uploadFile } = useUploadFile()

  const columns = useColumns()

  const { table } = useDataTable({
    data: topic,
    columns,
    count: topic?.length || 0,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row?.id || ''
  })

  const handleInvite = async () => {
    try {
      const res = await uploadFile([{ file: selectFile }])
      await createTopic({ name, image: res.files[0].url })
      toast.success('Topic added!')
      setOpen(false)
      setName('')
    } catch {
      toast.error('Error!')
    }
  }

  return (
    <Container>
      <div className="flex items-center justify-between">
        <div>
          <Heading>Topic</Heading>
        </div>
        <Drawer
          open={open}
          onOpenChange={(openChanged) => setOpen(openChanged)}
        >
          <Drawer.Trigger
            onClick={() => {
              setOpen(true)
            }}
            asChild
          >
            <Button>New Topic</Button>
          </Drawer.Trigger>
          <Drawer.Content>
            <Drawer.Header />
            <Drawer.Body>
              <Heading>New Topic</Heading>
              <Text className="text-ui-fg-subtle" size="small">
                Add a new topic
              </Text>
              <div className="flex flex-col gap-2 mt-6">
                <Label>Name</Label>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 mt-6">
                <Label>Image</Label>
                <Input
                  type="file"
                  placeholder="Image"
                  // value={image}
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length) {
                      setSelectFile(e.target.files[0])
                    }
                  }}
                />
              </div>
              <div className="flex justify-end">
                <Button className="mt-6" onClick={handleInvite}>
                  Invite
                </Button>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer>
      </div>
      <div className="flex size-full flex-col overflow-hidden">
        <DataTable
          table={table}
          columns={columns}
          count={topic?.length || 0}
          pageSize={10}
          isLoading={isLoading}
          queryObject={raw}
          search
          pagination
          navigateTo={(row) => `/topics/${row.id}`}
          orderBy={[
            { key: 'name', label: 'Name' },
            { key: 'image', label: 'Image' },
            { key: 'created_at', label: 'Created' }
          ]}
        />
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: 'Topics',
  icon: Shopping
})

const columnHelper = createColumnHelper<Topic>()

const useColumns = () => {
  const navigate = useNavigate()

  const base = useTopicsTableColumns()

  const { mutateAsync: deleteTopic } = useDeleteTopic()

  const dialog = usePrompt()

  const columns = useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: 'actions',
        cell: ({ row }) => {
          return (
            <ActionsButton
              actions={[
                {
                  label: 'Edit',
                  onClick: () => navigate(`/sellers/${row.original.id}/edit`),
                  icon: <PencilSquare />
                },
                {
                  label: 'Delete',
                  onClick: async () => {
                    const res = await dialog({
                      title: 'Delete Topic',
                      description:
                        'Are you sure you want to delete this topic?',
                      verificationText: row.original.name
                    })
                    if (!res) {
                      return
                    }
                    await deleteTopic({ id: row.original.id })
                  },
                  icon: <Trash />
                }
              ]}
            />
          )
        }
      })
    ],
    [base]
  )

  return columns
}
export default SellersListPage
