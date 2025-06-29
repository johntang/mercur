// other imports...
import {
  WorkflowResponse, // ...
  createWorkflow
} from '@medusajs/framework/workflows-sdk'

import { deleteTopicStep } from '../steps'

// ...

interface DeleteTopicWorkflowInput {
  id: string
}

export const deleteTopicWorkflow = createWorkflow(
  'delete-topic',
  (input: DeleteTopicWorkflowInput) => {
    const topic = deleteTopicStep(input)
    return new WorkflowResponse(topic)
  }
)
