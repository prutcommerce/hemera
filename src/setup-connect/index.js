import { connectionUrl } from 'src/setup-connect/connection-url'
import { createProductSink } from 'src/setup-connect/create-product-sink'
import { createOrderSource } from 'src/setup-connect/create-order-source'
import { createPaymentSink } from 'src/setup-connect/create-payment-sink'

export const setupConnect = async () => {
  await createOrderSource()
  await createProductSink()
  await createPaymentSink()
}

setupConnect.connectionUrl = connectionUrl
