import { TOPIC_MODULE } from '#/modules/topic'
import TopicModuleServie from '#/modules/topic/service'

import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'

export interface CreateTopicStepInput {
  name: string
  image: string
}

export const createTopicStep = createStep(
  'create-topic-step',
  async (input: CreateTopicStepInput, { container }) => {
    const topicModuleService: TopicModuleServie =
      container.resolve(TOPIC_MODULE)

    const topic = await topicModuleService.createTopics(input)

    return new StepResponse(topic, topic.id)
  },
  async (id: string, { container }) => {
    const topicModuleService: TopicModuleServie =
      container.resolve(TOPIC_MODULE)

    await topicModuleService.deleteTopics(id)
  }
)
