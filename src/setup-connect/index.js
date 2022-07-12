import { connectionUrl } from 'src/setup-connect/connection-url'
import { createProductSink } from 'src/setup-connect/create-product-sink'
import { createOrderSource } from 'src/setup-connect/create-order-source'

export const setupConnect = async () => {
  await createOrderSource()
  await createProductSink()
}

setupConnect.connectionUrl = connectionUrl
