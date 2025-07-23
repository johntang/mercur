import {
  validateAndTransformBody,
  validateAndTransformQuery
} from '@medusajs/framework'
import { MiddlewareRoute } from '@medusajs/medusa'

import { applyReferenceFilter } from '../../../shared/infra/http/middlewares/apply-reference-filter'
import { adminTopicConfig } from './query-config'
import {
  AdminCreateTopicRule,
  AdminGetTopicParams,
  AdminUpdateTopicRule
} from './validators'

export const topicMiddlewares: MiddlewareRoute[] = [
  {
    method: ['GET'],
    matcher: '/admin/topics',
    middlewares: [
      validateAndTransformQuery(AdminGetTopicParams, adminTopicConfig.list),
      applyReferenceFilter()
    ]
  },
  {
    method: ['GET'],
    matcher: '/admin/topics/:id',
    middlewares: [
      validateAndTransformQuery(AdminGetTopicParams, adminTopicConfig.retrieve)
    ]
  },
  {
    method: ['POST'],
    matcher: '/admin/topics',
    middlewares: [validateAndTransformBody(AdminCreateTopicRule)]
  },
  {
    method: ['POST'],
    matcher: '/admin/topics/:id',
    middlewares: [
      validateAndTransformQuery(AdminGetTopicParams, adminTopicConfig.retrieve),
      validateAndTransformBody(AdminUpdateTopicRule)
    ]
  }
]
