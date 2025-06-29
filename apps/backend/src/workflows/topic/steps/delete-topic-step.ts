import { TOPIC_MODULE } from '#/modules/topic'
import TopicModuleServie from '#/modules/topic/service'

import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

export interface DeleteTopicStepInput {
  id: string
}

export const deleteTopicStep = createStep(
  'delete-topic-step',
  async (input: DeleteTopicStepInput, { container }) => {
    const topicModuleService: TopicModuleServie =
      container.resolve(TOPIC_MODULE)

    const res = await topicModuleService.softDeleteTopics({
      id: input.id
    })

    console.log(res)

    return new StepResponse(input.id)
  }
)
