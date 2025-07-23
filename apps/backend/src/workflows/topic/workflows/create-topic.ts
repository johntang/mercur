// other imports...
import {
  WorkflowResponse, // ...
  createWorkflow
} from '@medusajs/framework/workflows-sdk'

import { createTopicStep } from '../steps'

// ...

interface CreateTopicWorkflowInput {
  data: {
    name?: string
    image?: string
    status?: 'SHOW' | 'HIDE'
    displaySince?: Date
    displayUntil?: Date
  }
  seller_id?: string
}

export const createTopicWorkflow = createWorkflow(
  'create-topic',
  (input: CreateTopicWorkflowInput) => {
    const topic = createTopicStep(input.data)
    return new WorkflowResponse(topic)
  }
)
