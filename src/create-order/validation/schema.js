import { nephele, yup } from 'src/deps'
import { productExists } from 'src/create-order/validation/unit-exists'
import { quantityInRange } from 'src/create-order/validation/quantity-in-range'

const productId = () => yup.string().required()
  .identifier()
  .test('productId-existence', 'product does not exist', nephele.setupValidation.safe(productExists))

const quantity = () => yup.number()
  .positive()
  .required()
  .test('quantity-overflow', 'quantity exceeds the available one', nephele.setupValidation.safe(quantityInRange))

const make = () => yup.object().shape({
  order: yup.object().shape({
    quantity: quantity(),
    productId: productId(),
  }).required()
}).required()

export const schema = { make }
