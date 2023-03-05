import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { ADD_CART } from "../../graphql/cart";
import { Product } from "../../graphql/products";
import { graphqlFetcher } from "../../queryClient";

const ProductItem = ({ id, imageUrl, price, title, description, createdAt }: Product) => {
	const { mutate: addCart } = useMutation((id: string) => graphqlFetcher(ADD_CART, { id }))
	return (
		<li className="products-item">
			<Link to={`/products/${id}`}>
				<p className="products-item-title">{title}</p>
				<img className="products-item-image" src={imageUrl} alt="" />
				<span className="products-item-price">${price}</span>
			</Link>
			<button className="products-item-add-cart" onClick={() => addCart(id)}>담기</button>
		</li>
	)
}

export default ProductItem