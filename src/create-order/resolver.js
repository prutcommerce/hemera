import { melissa } from 'src'
import { lodash } from 'src/deps'
import { create } from 'src/create-order/create'
import { validation } from 'src/create-order/validation'

export const resolver = async (args, _, _context) => {
  const validationResult = await validation.execute(args)

  if (lodash.isError(validationResult)) return melissa.core.error.validation(validationResult?.inner)

  return create(validationResult?.order)
}
