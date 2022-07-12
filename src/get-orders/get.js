import { nephele } from 'src/deps'
import { repository } from 'src/get-orders/repository'

export const get = async args => {
  const orders = await repository.getOrders(args)

  return nephele.relay.makePage(orders)
}
