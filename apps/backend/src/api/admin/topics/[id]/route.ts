import { deleteTopicWorkflow } from '#/workflows/topic/workflows'
import { updateTopicWorkflow } from '#/workflows/topic/workflows/update-topic'

import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'

import { AdminUpdateTopicType } from '../validators'

/**
 * @oas [get] /admin/topic/{id}
 * operationId: "AdminGetTopicById"
 * summary: "Get topic by id"
 * description: "Retrieves a topic by id."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Topic.
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
 *             topic:
 *               $ref: "#/components/schemas/Topic"
 * tags:
 *   - Admin
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export async function GET(
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [topic]
  } = await query.graph({
    entity: 'topic',
    fields: req.queryConfig.fields,
    filters: {
      id: req.params.id
    }
  })

  res.json({ topic })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminUpdateTopicType>,
  res: MedusaResponse
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { id } = req.params

  await updateTopicWorkflow(req.scope).run({
    input: {
      id,
      ...req.validatedBody
    }
  })

  const {
    data: [topic]
  } = await query.graph({
    entity: 'topic',
    fields: req.queryConfig.fields,
    filters: {
      id: req.params.id
    }
  })

  res.json({ topic })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const { id } = req.params

  await deleteTopicWorkflow(req.scope).run({
    input: {
      id
    }
  })

  res.json({
    id,
    object: 'topic',
    deleted: true
  })
}
