import { z } from 'zod'

import { createFindParams } from '@medusajs/medusa/api/utils/validators'

/**
 * @schema AdminCreateRule
 * type: object
 * properties:

 */
export type AdminCreateRuleType = z.infer<typeof AdminCreateRule>
export const AdminCreateRule = z.object({
  name: z.string(),
  image: z.string()
})

/**
 * @schema AdminUpdateRule
 * type: object
 * properties:

 */
export type AdminUpdateRuleType = z.infer<typeof AdminUpdateRule>
export const AdminUpdateRule = z.object({
  name: z.string(),
  image: z.string()
})

export type AdminGetTopicParamsType = z.infer<typeof AdminGetTopicParams>
export const AdminGetTopicParams = createFindParams({
  offset: 0,
  limit: 50
}).extend({
  reference: z.enum(['seller']).optional()
})

export type AdminCreateTopicType = z.infer<typeof CreateTopic>
export const CreateTopic = z.object({
  name: z.string().min(1),
  image: z.string().optional()
})

export type AdminUpdateTopicType = z.infer<typeof AdminUpdateTopic>
export const AdminUpdateTopic = z
  .object({
    name: z.preprocess((val: string) => val.trim(), z.string().min(4)),
    image: z.string()
  })
  .strict()
