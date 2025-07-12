import { MiddlewareRoute, validateAndTransformQuery } from '@medusajs/framework'

import { storeQueryConfig } from './query-config'
import { StoreGetTopicsParams } from './validators'

export const storeTopicMiddlewares: MiddlewareRoute[] = [
  {
    methods: ['GET'],
    matcher: '/store/topic',
    middlewares: [
      validateAndTransformQuery(StoreGetTopicsParams, storeQueryConfig.list)
    ]
  },
  {
    methods: ['GET'],
    matcher: '/store/topic/:id',
    middlewares: [
      validateAndTransformQuery(StoreGetTopicsParams, storeQueryConfig.retrieve)
    ]
  }
]
