import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'

/**
 * @oas [get] /store/topic
 * operationId: "StoreGetSellers"
 * summary: "Get topics"
 * description: "Retrieves the seller list."
 * parameters:
 *   - name: offset
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to skip before starting to collect the result set.
 *   - name: limit
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to return.
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             products:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/StoreSeller"
 *             count:
 *               type: integer
 *               description: The total number of items available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 * tags:
 *   - Store
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: topics, metadata } = await query.graph({
    entity: 'topic',
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
    filters: {
      status: 'SHOW',
      $and: [
        {
          $or: [
            {
              displaySince: null
            },
            {
              displaySince: { $lt: new Date() }
            }
          ]
        },
        {
          $or: [
            {
              displayUntil: null
            },
            {
              displayUntil: { $gt: new Date() }
            }
          ]
        }
      ]
    }
  })

  console.log({ topics })

  res.json({
    topics,
    count: metadata?.count,
    offset: metadata?.skip,
    limit: metadata?.take
  })
}
