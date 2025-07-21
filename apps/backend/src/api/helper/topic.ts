import { fetchSellerByAuthActorId } from '#/shared/infra/http/utils'
import { createTopicWorkflow } from '#/workflows/topic/workflows'
import { AuthenticatedMedusaRequest } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { VendorCreateTopicType } from '../vendor/topics/validators'

export const createTopic = async (
  req: AuthenticatedMedusaRequest<VendorCreateTopicType>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const seller = await fetchSellerByAuthActorId(
    req.auth_context?.actor_id,
    req.scope
  )

  const { result } = await createTopicWorkflow(req.scope).run({
    input: {
      data: {
        name: req.validatedBody.name,
        image: req.validatedBody.image ?? ''
      },
      seller_id: seller.id
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

  return topic
}
