import { melissa } from 'src'

const configs = () => ({
  settings: melissa.getSettings,
  importer: require?.context('src/seed-db/seeds', true, /\.js$/),
})

export const seedDb = { configs }
