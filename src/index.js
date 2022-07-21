import { core } from 'src/core'
import { logo } from 'src/logo'
import { seedDb } from 'src/seed-db'
import { nephele, yup } from 'src/deps'
import { migrateDb } from 'src/migrate-db'
import { getOrders } from 'src/get-orders'
import { setupServer } from 'src/setup-server'
import { createOrder } from 'src/create-order'
import { setupConnect } from 'src/setup-connect'
import { processOrders } from 'src/process-orders'

export const melissa = {
  core,
  seedDb,
  migrateDb,
  getOrders,
  createOrder,
}

logo.print()

nephele.setupLogger()
nephele.setupValidation(yup)
nephele.setupMaps(core.settings)

nephele.createDb(core.settings)
  .then(nephele.migrateDb(migrateDb.configs()))
  .then(nephele.seedDb(seedDb.configs()))
  .then(setupConnect)
  .then(processOrders.start)
  .then(nephele.setupRest(setupServer.configs()))
  .catch(error => console.error(error) || process.exit(1))


