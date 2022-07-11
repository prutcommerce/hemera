import { melissa } from 'src'
import { mariadb } from 'src/deps'

const makeConnectionPool = async () => mariadb.createConnection({
  user: melissa.core.settings.getDatabaseUsername(),
  password: melissa.core.settings.getDatabasePassword(),
  host: melissa.core.settings.getDatabaseHost(),
  port: melissa.core.settings.getDatabasePort()
})

export const createDb = async () => {
  const connection = await makeConnectionPool()
  await connection.execute(`CREATE DATABASE IF NOT EXISTS ${melissa.core.settings.getDatabaseName()};`)
  await connection.end()
}
