import { melissa } from 'src'
import { mariadb, sequelize } from 'src/deps'

const options = () => ({
  dialect: 'mariadb',
  dialectModule: mariadb,
  dialectOptions: { connectTimeout: 10000 },
  host: melissa.core.settings.getDatabaseHost(),
  port: melissa.core.settings.getDatabasePort(),
  pool: {
    min: 0,
    max: 2,
    idle: 0,
  },
})

let instance = null

export const driver = () => {
  if (!instance) instance = new sequelize.Sequelize(melissa.core.settings.getDatabaseUri(), options())

  return instance
}
