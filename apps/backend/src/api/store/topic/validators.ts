import { z } from 'zod'

import { createFindParams } from '@medusajs/medusa/api/utils/validators'

export type StoreGetSellersParamsType = z.infer<typeof StoreGetTopicsParams>
export const StoreGetTopicsParams = createFindParams({
  offset: 0,
  limit: 50
})
