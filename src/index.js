import { core } from 'src/core'
import { seedDb } from 'src/seed-db'
import { createDb } from 'src/create-db'
import { setupMaps } from 'src/setup-maps'
import { migrateDb } from 'src/migrate-db'
import { setupRest } from 'src/setup-rest'
import { setupGraph } from 'src/setup-graph'

export const melissa = {
  core,
  seedDb,
  migrateDb,
  setupMaps,
  setupGraph,
}

setupMaps()
  .then(createDb)
  .then(migrateDb)
  .then(seedDb)
  .then(setupRest)
  .catch(error => console.error(error) || process.exit(1))


