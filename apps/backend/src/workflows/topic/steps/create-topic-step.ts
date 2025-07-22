import { StepResponse, createStep } from '@medusajs/framework/workflows-sdk'
import { TOPIC_MODULE, TopicModuleServie } from '@mercurjs/topic'

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
