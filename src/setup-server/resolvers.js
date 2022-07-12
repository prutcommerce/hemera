import { melissa } from 'src'

const make = () => ({
  orders: melissa.getOrders.resolver,
  bar: ''
})

export const resolvers = { make }
