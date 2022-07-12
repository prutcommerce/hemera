import { nephele, yup } from 'src/deps'
import { productExists } from 'src/create-order/validation/unit-exists'

const productId = () => yup.string().required()
  .identifier()
  .test('productId-existence', 'product does not exist', nephele.setupValidation.safe(productExists))

const make = () => yup.object().shape({
  order: yup.object().shape({
    quantity: yup.number().positive().required(),
    productId: productId(),
  }).required()
}).required()

export const schema = { make }
