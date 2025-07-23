import { z } from 'zod'

import { createFindParams } from '@medusajs/medusa/api/utils/validators'

export type AdminGetTopicParamsType = z.infer<typeof AdminGetTopicParams>
export const AdminGetTopicParams = createFindParams({
  offset: 0,
  limit: 50
}).extend({
  reference: z.enum(['seller']).optional()
})

export type AdminCreateTopicType = z.infer<typeof AdminCreateTopicRule>
export const AdminCreateTopicRule = z.object({
  name: z.string(),
  image: z.string(),
  status: z.enum(['SHOW', 'HIDE']).optional(),
  displaySince: z.coerce.date(),
  displayUntil: z.coerce.date()
})

export type AdminUpdateTopicType = z.infer<typeof AdminUpdateTopicRule>
export const AdminUpdateTopicRule = z.object({
  name: z.preprocess((val: string) => val.trim(), z.string().min(4)),
  image: z.string(),
  status: z.enum(['SHOW', 'HIDE']).optional(),
  displaySince: z.coerce.date(),
  displayUntil: z.coerce.date()
})
