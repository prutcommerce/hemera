import { melissa } from 'src/index'

const getOrders = async () => {
  const entities = melissa.core.db.entities()

  return entities.order.findAll({
    where: { status: 'IDLE' },
    include: [melissa.core.db.INCLUDES.order.payment.association]
  })
}

const updateOrders = async orders => {
  const entities = melissa.core.db.entities()

  await entities.order.bulkCreate(orders, { updateOnDuplicate: ['status'] })
}

export const repository = { getOrders, updateOrders }
