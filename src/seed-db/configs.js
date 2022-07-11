import { melissa } from 'src'
import { umzug } from 'src/deps'
import { discover } from 'src/seed-db/discover'

export const configs = () => {
  const sequelize = melissa.core.db.entities().driver

  return ({
    storage: umzug.memoryStorage(),
    migrations: discover(),
    context: { sequelize, queryInterface: sequelize.getQueryInterface() }
  })
}
