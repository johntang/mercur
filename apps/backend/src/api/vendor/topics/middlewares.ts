import {
  maybeApplyLinkFilter,
  validateAndTransformBody,
  validateAndTransformQuery
} from '@medusajs/framework'
import { MiddlewareRoute } from '@medusajs/medusa'

import { adminTopicConfig } from './query-config'
import {
  AdminCreateRule,
  AdminGetTopicParams,
  AdminUpdateRule
} from './validators'
import { filterBySellerId } from '#/shared/infra/http/middlewares'
import sellerTopic from '#/links/seller-topic'

export const vendorTopicMiddlewares: MiddlewareRoute[] = [
  {
    method: ['GET'],
    matcher: '/vendor/topics',
    middlewares: [
      validateAndTransformQuery(AdminGetTopicParams, adminTopicConfig.list),
      filterBySellerId(),
      maybeApplyLinkFilter({
        entryPoint: sellerTopic.entryPoint,
        resourceId: 'topic_id',
        filterableField: 'seller_id'
      })
    ]
  },
  {
    method: ['GET'],
    matcher: '/vendor/topics/:id',
    middlewares: [
      validateAndTransformQuery(AdminGetTopicParams, adminTopicConfig.retrieve)
    ]
  },
  {
    method: ['POST'],
    matcher: '/vendor/topics',
    middlewares: [
      validateAndTransformBody(AdminCreateRule),
      validateAndTransformQuery(AdminGetTopicParams, adminTopicConfig.retrieve)
    ]
  },
  {
    method: ['POST'],
    matcher: '/vendor/topics/:id',
    middlewares: [
      validateAndTransformQuery(AdminGetTopicParams, adminTopicConfig.retrieve),
      validateAndTransformBody(AdminUpdateRule)
    ]
  }
]
