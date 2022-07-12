import { melissa } from 'src'
import { get } from 'src/get-orders/get'
import { lodash, nephele } from 'src/deps'
import { validation } from 'src/get-orders/validation'

export const resolver = async args => {
  const validationResult = await validation.execute(args)

  if (lodash.isError(validationResult)) return melissa.core.error.validation(validationResult?.inner)

  return await get(nephele.relay.makeArgs(validationResult))
}
