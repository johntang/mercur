import { defineLink } from '@medusajs/framework/utils'

import SellerModule from '@mercurjs/seller'
import TopicModule from '@mercurjs/topic'

export default defineLink(SellerModule.linkable.seller, {
  linkable: TopicModule.linkable.topic,
  isList: true
})
