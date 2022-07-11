import { melissa } from 'src'

const setup = server => {
  server.post('/graph', melissa.setupGraph())
}

export const routes = { setup }
