export const adminTopicFields = [
  'id',
  'name',
  'image',
  'created_at',
  'updated_at'
]

export const adminTopicConfig = {
  list: {
    defaults: adminTopicFields,
    isList: true
  },
  retrieve: {
    defaults: adminTopicFields,
    isList: false
  }
}
