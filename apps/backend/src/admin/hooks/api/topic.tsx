import {
  QueryKey,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'

import { mercurQuery } from '../../lib/client'
import { queryKeysFactory } from '../../lib/query-keys-factory'
import { Topic } from '../../routes/topics/types'

export const topicQueryKeys = queryKeysFactory('topic')

export const useTopics = (
  query?: Record<string, string | number>,
  options?: Omit<
    UseQueryOptions<
      Record<string, string | number>,
      Error,
      { topics: Topic[] },
      QueryKey
    >,
    'queryFn' | 'queryKey'
  >,
  filters?: Record<string, string | number>
) => {
  const { data, ...other } = useQuery({
    queryKey: topicQueryKeys.list(),
    queryFn: () =>
      mercurQuery('/admin/topics', {
        method: 'GET',
        query
      }),
    ...options
  })

  if (!data?.topics) {
    return { ...data, ...other }
  }

  let processedTopic = [...data.topics]

  // Apply search filter if present
  if (filters?.q) {
    const searchTerm = String(filters.q).toLowerCase()
    processedTopic = processedTopic.filter((topic) =>
      topic.name?.toLowerCase().includes(searchTerm)
    )
  }

  return {
    ...data,
    topic: processedTopic,
    ...other
  }
}

export const useTopic = (id: string) => {
  return useQuery({
    queryKey: topicQueryKeys.detail(id),
    queryFn: () =>
      mercurQuery(`/admin/topics/${id}`, {
        method: 'GET',
        query: {
          fields: 'id,created_at,name,image'
        }
      })
  })
}

export const useCreateTopic = () => {
  return useMutation({
    mutationFn: ({ name, image = '' }: { name: string; image?: string }) =>
      mercurQuery('/admin/topics', {
        method: 'POST',
        body: { name, image }
      })
  })
}

export const useUpdateTopic = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      mercurQuery(`/admin/topics/${id}`, { method: 'POST', body: data }),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: topicQueryKeys.list() })
      queryClient.invalidateQueries({ queryKey: topicQueryKeys.detail(id) })
    }
  })
}

export const useDeleteTopic = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id }: { id: string }) =>
      mercurQuery(`/admin/topics/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: topicQueryKeys.list() })
    }
  })
}
