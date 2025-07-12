export const storeFields = ['id', 'name', 'image']

export const storeQueryConfig = {
  list: {
    defaults: storeFields,
    isList: true
  },
  retrieve: {
    defaults: storeFields,
    isList: false
  }
}
