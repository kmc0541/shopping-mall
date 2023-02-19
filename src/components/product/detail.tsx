import { Product } from "../../types"

const ProductDetail = ({
    item: {
      category,
      description,
      title,
      image,
      price,
      rating: { rate },
    },
  }: {
    item: Product
  }) => (
  <div className="products-detail">
    <p className="products-detail-category">{category}</p>
    <p className="products-detail-title">{title}</p>
    <img className="products-detail-image" src={image} alt="" />
    <p className="products-detail-description">{description}</p>
    <span className="products-detail-price">${price}</span>
    <span className="products-detail-rating">{rate}</span>
  </div>
)

export default ProductDetail