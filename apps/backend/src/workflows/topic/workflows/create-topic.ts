// other imports...
import {
  WorkflowResponse, // ...
  createWorkflow
} from '@medusajs/framework/workflows-sdk'

import { createTopicStep } from '../steps'

// ...

interface CreateTopicWorkflowInput {
  data: {
    name: string
    image: string
  }
  seller_id?: string
}

export const createTopicWorkflow = createWorkflow(
  'create-topic',
  (input: CreateTopicWorkflowInput) => {
    const topic = createTopicStep({
      name: input.data.name,
      image: input.data.image
    })

    return new WorkflowResponse(topic)
  }
)
