import { GET_PRODUCT } from './../graphql/products';
import { graphql } from 'msw'
import { v4 as uuid } from 'uuid'
import GET_PRODUCTS from '../graphql/products'


const morkProducts = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://placeimg.com/200/150/${i+1}`,
  price: 50000,
  title: `임시상품${i+1}`,
  description: `임시상세내용${i+1}`,
  createAt: new Date(1645735501883 + i * 1000 * 60 * 60 * 10).toString()
}))

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: morkProducts,
      }),
    )
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    return res(ctx.data(morkProducts[0]))
  })
]