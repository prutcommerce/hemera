import { schema } from 'src/create-order/validation/schema'

const execute = input => schema.make()
  .validate(input, { abortEarly: false })
  .then(value => value)
  .catch(error => error)

export const validation = { execute }
