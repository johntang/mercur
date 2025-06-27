import { Module } from '@medusajs/framework/utils'

import TopicModuleServie from './service'

export const TOPIC_MODULE = 'topic'

export default Module(TOPIC_MODULE, {
  service: TopicModuleServie
})
