import { routes } from 'src/setup-server/routes'
import { resolvers } from 'src/setup-server/resolvers'

const configs = () => ({
  port: 5050,
  routes,
  resolvers,
})

export const setupServer = { configs }
