import { repository } from 'src/process-orders/repository'

const perform = async () => {
  const idle = await repository.getOrders()
  const payed = idle.filter(order => order?.payment?.status === 'SUCCESS')
  const changed = payed.map(order => ({ ...order.get({ raw: true }), status: 'REGISTERED' }))

  await repository.updateOrders(changed)
}

export const start = () => {
  setInterval(perform, 5000)
}
