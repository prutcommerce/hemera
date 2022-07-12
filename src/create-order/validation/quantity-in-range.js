import { lodash, nephele } from 'src/deps'
import { repository } from 'src/create-order/repository'

export const quantityInRange = async (value, context) => {
  const decoded = nephele.transformId.decode(context?.parent?.productId)
  const foundProduct = await repository.getProduct(decoded.id)

  return value <= foundProduct?.quantity
}
