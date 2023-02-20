import { Product } from "../../graphql/products"

const ProductDetail = ({
    item: {
      title,
      imageUrl,
      description,
      price
    },
  }: {
    item: Product
  }) => (
  <div className="products-detail">
    <p className="products-detail-title">{title}</p>
    <img className="products-detail-image" src={imageUrl} alt="" />
    <p className="products-detail-description">{description}</p>
    <span className="products-detail-price">${price}</span>
  </div>
)

export default ProductDetail