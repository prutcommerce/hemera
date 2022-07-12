import { lodash, nephele } from 'src/deps'
import { repository } from 'src/create-order/repository'

export const productExists = async value => {
  const decoded = nephele.transformId.decode(value)
  const foundProduct = await repository.getProduct(decoded.id)

  return !lodash.isNil(foundProduct)
}
