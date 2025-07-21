import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { createStep, StepResponse } from '@medusajs/framework/workflows-sdk'

export const logStep = createStep(
  'log-step',
  async (input: any, { container }) => {
    const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
    logger.info(JSON.stringify(input))
    return new StepResponse('Logged successfully')
  }
)
