import { MedusaService } from '@medusajs/framework/utils'

import { Topic } from './models/topic'

class TopicModuleServie extends MedusaService({
  Topic
}) {}

export default TopicModuleServie
