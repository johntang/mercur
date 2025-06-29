import { createTopicWorkflow } from '#/workflows/topic/workflows'

import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'

import { AdminCreateTopicType } from './validators'

/**
 * @oas [get] /admin/reviews
 * operationId: "AdminListReviews"
 * summary: "List reviews"
 * description: "Retrieves review list"
 * x-authenticated: true
 * parameters:
 *   - in: query
 *     name: limit
 *     schema:
 *       type: number
 *     description: The number of items to return. Default 50.
 *   - in: query
 *     name: offset
 *     schema:
 *       type: number
 *     description: The number of items to skip before starting the response. Default 0.
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 *   - name: reference
 *     in: query
 *     schema:
 *       type: string
 *       enum: [product,seller]
 *     required: false
 *     description: Filter by review reference
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             reviews:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Review"
 *             count:
 *               type: integer
 *               description: The total number of reviews
 *             offset:
 *               type: integer
 *               description: The number of reviews skipped
 *             limit:
 *               type: integer
 *               description: The number of reviews per page
 * tags:
 *   - Admin
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  console.log('queryConfig', req.queryConfig)
  const { data: topics, metadata } = await query.graph({
    entity: 'topic',
    fields: req.queryConfig.fields,
    filters: req.filterableFields,
    pagination: req.queryConfig.pagination
  })

  res.json({
    topics: topics,
    count: metadata?.count,
    offset: metadata?.skip,
    limit: metadata?.take
  })
}

export const POST = async (
  req: MedusaRequest<AdminCreateTopicType>,
  res: MedusaResponse
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { result } = await createTopicWorkflow(req.scope).run({
    input: {
      name: req.validatedBody.name,
      image: req.validatedBody.image ?? ''
    }
  })

  const {
    data: [topic]
  } = await query.graph({
    entity: 'topic',
    filters: {
      id: result.id
    },
    ...req.queryConfig
  })

  res.status(201).json({ topic })
}
