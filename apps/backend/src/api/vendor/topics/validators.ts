import { z } from 'zod'

import { createFindParams } from '@medusajs/medusa/api/utils/validators'

export type VendorGetTopicParamsType = z.infer<typeof VendorGetTopicParams>
export const VendorGetTopicParams = createFindParams({
  offset: 0,
  limit: 50
}).extend({
  reference: z.enum(['seller']).optional()
})

export type VendorCreateTopicType = z.infer<typeof VendorCreateTopicRule>
export const VendorCreateTopicRule = z.object({
  name: z.string(),
  image: z.string(),
  status: z.enum(['SHOW', 'HIDE']).optional(),
  displaySince: z.coerce.date(),
  displayUntil: z.coerce.date()
})

export type VendorUpdateTopicType = z.infer<typeof VendorUpdateTopicRule>
export const VendorUpdateTopicRule = z.object({
  name: z.preprocess((val: string) => val.trim(), z.string().min(4)),
  image: z.string(),
  status: z.enum(['SHOW', 'HIDE']).optional(),
  displaySince: z.coerce.date(),
  displayUntil: z.coerce.date()
})
