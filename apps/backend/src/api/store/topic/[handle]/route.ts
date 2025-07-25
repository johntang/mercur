import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'

/**
 * @oas [get] /store/seller/{handle}
 * operationId: "StoreGetSellerByHandle"
 * summary: "Get seller"
 * description: "Retrieves seller of specified handle"
 * parameters:
 *   - in: path
 *     name: handle
 *     required: true
 *     description: The handle of the seller
 *     schema:
 *       type: string
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
 *             product:
 *               $ref: "#/components/schemas/StoreSeller"
 * tags:
 *   - Seller
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [topic]
  } = await query.graph({
    entity: 'topic',
    fields: req.queryConfig.fields,
    filters: {
      status: 'SHOW',
      id: req.params.id,
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

  res.json({
    topic
  })
}
