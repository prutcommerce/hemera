import { melissa } from 'src'

const createOrder = async value => {
  const entities = melissa.core.db.entities()

  return entities.order.create(value)
}

const getOrder = async id => {
  const entities = melissa.core.db.entities()

  return entities.order.findOne({ where: { id }, include: [] })
}

const getProduct = async id => {
  const entities = melissa.core.db.entities()

  return entities.product.findOne({ where: { id } }).catch(() => null)
}

export const repository = { createOrder, getProduct, getOrder }
