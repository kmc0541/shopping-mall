import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";

const ProductItem = ({ id, imageUrl, price, title, description, createdAt }: Product) => (
	<li className="products-item">
		<Link to={`/products/${id}`}>
			<p className="products-item-title">{title}</p>
			<img className="products-item-image" src={imageUrl} alt="" />
			<span className="products-item-price">${price}</span>
		</Link>
	</li>
)

export default ProductItem