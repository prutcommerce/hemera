import { melissa } from 'src'

const configs = () => ({
  settings: melissa.core.settings,
  importer: require?.context('src/migrate-db/migrations', true, /\.js$/),
})

export const migrateDb = { configs }
