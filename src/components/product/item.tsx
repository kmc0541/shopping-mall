import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductItem = ({ category, description, image, price, rating, title, id }: Product) => (
	<li className="products-item">
		<Link to={`/products/${id}`}>
			<p className="products-item-category">{category}</p>
			<p className="products-item-title">{title}</p>
			<img className="products-item-image" src={image} alt="" />
			<span className="products-item-price">${price}</span>
			<span className="products-item-rating">{rating.rate}</span>
		</Link>
	</li>
)

export default ProductItem