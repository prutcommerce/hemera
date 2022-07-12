import { melissa } from 'src'

export const connectionUrl = () => {
  const host = melissa.core.settings.getDatabaseHost()
  const port = melissa.core.settings.getDatabasePort()
  const name = melissa.core.settings.getDatabaseName()

  return `jdbc:mariadb://${host}:${port}/${name}`
}
