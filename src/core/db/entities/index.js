import { nephele } from 'src/deps'
import { relations } from 'src/core/db/relations'
import { order } from 'src/core/db/entities/order'
import { product } from 'src/core/db/entities/product'
import { payment } from 'src/core/db/entities/payment'

export const entities = () => {
  const coreEntities = nephele.modelDb.entities()

  return relations({
    ...coreEntities,
    product: product(coreEntities.driver),
    order: order(coreEntities.driver),
    payment: payment(coreEntities.driver),
  })
}
