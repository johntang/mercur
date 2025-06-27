import { model } from '@medusajs/framework/utils'

export const Topic = model.define('topic', {
  id: model.id().primaryKey(),
  name: model.text(),
  image: model.text().default('')
})
