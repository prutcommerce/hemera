import { melissa } from 'src'
import { nephele } from 'src/deps'
import { repository } from 'src/create-order/repository'

export const create = async input => {
  input = { ...input, status: melissa.getOrders.STATUS.idle }

  const created = await repository.createOrder(input)
  const decodedId = nephele.transformId.decode(created?.id)

  return await repository.getOrder(decodedId?.id)
}
