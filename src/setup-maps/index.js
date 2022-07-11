import { melissa } from 'src'
import { sourceMapSupport } from 'src/deps'

export const setupMaps = async () => {
  if (melissa.core.settings.getEnvironment() !== 'local') return

  sourceMapSupport.install()
}
