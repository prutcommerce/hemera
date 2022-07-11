import { hemera } from 'src'
import { sourceMapSupport } from 'src/deps'

export const setupMaps = async () => {
  if (hemera.core.settings.getEnvironment() !== 'local') return

  sourceMapSupport.install()
}
