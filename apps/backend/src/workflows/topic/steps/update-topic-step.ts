import { TOPIC_MODULE } from '@mercurjs/topic'
import TopicModuleServie from '@mercurjs/topic/service'

import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

export interface UpdateTopicStepInput {
  id: string
  name: string
  image: string
}

export const updateTopicStep = createStep(
  'update-topic-step',
  async (input: UpdateTopicStepInput, { container }) => {
    const topicModuleService: TopicModuleServie =
      container.resolve(TOPIC_MODULE)

    const [previousData] = await topicModuleService.listTopics({
      id: input.id
    })

    const topic = await topicModuleService.updateTopics(input)

    return new StepResponse(topic, previousData)
  },
  async (previousData: UpdateTopicStepInput, { container }) => {
    const service = container.resolve<TopicModuleServie>(TOPIC_MODULE)

    await service.updateTopics(previousData)
  }
)
