import { melissa } from 'src'
import { sequelize } from 'src/deps'

const getOrders = async ({ after, first }) => {
  const entities = melissa.core.db.entities()

  return await entities.order.findAll({
    order: sequelize.col('id'),
    include: [],
    where: { id: { [sequelize.Op.gt]: after } },
    limit: first,
  })
}

export const repository = { getOrders }
