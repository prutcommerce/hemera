import { melissa } from 'src'

const make = () => ({
  orders: melissa.getOrders.resolver,
  createOrder: melissa.createOrder.resolver,
})

export const resolvers = { make }
