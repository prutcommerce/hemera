import { INCLUDES } from 'src/core/db/includes'

export const relations = entities => {
  entities.order.hasOne(entities.payment, {
    as: INCLUDES.order.payment.association,
    foreignKey: 'order_id',
  })

  entities.payment.belongsTo(entities.order, {
    as: INCLUDES.order.payment.association,
    foreignKey: 'order_id',
  })

  return entities
}
