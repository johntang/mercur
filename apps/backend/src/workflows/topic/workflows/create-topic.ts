// other imports...
import {
  WorkflowResponse, // ...
  createWorkflow
} from '@medusajs/framework/workflows-sdk'

import { createTopicStep } from '../steps'

// ...

interface CreateTopicWorkflowInput {
  name: string
  image: string
}

export const createBrandWorkflow = createWorkflow(
  'create-topic',
  (input: CreateTopicWorkflowInput) => {
    const topic = createTopicStep(input)

    return new WorkflowResponse(topic)
  }
)
