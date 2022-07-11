import { hemera } from 'src'
import { mariadb } from 'src/deps'

const makeConnectionPool = async () => mariadb.createConnection({
  user: hemera.core.settings.getDatabaseUsername(),
  password: hemera.core.settings.getDatabasePassword(),
  host: hemera.core.settings.getDatabaseHost(),
  port: hemera.core.settings.getDatabasePort()
})

export const createDb = async () => {
  const connection = await makeConnectionPool()
  await connection.execute(`CREATE DATABASE IF NOT EXISTS ${hemera.core.settings.getDatabaseName()};`)
  await connection.end()
}
