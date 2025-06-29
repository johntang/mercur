// other imports...
import {
  WorkflowResponse, // ...
  createWorkflow
} from '@medusajs/framework/workflows-sdk'

import { updateTopicStep } from '../steps'

// ...

interface UpdateTopicWorkflowInput {
  name: string
  image: string
  id: string
}

export const updateTopicWorkflow = createWorkflow(
  'update-topic',
  (input: UpdateTopicWorkflowInput) => {
    const topic = updateTopicStep(input)
    return new WorkflowResponse(topic)
  }
)
