import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
import { cartItemSelector } from "../../recoils/cart";
import { useRecoilValue, useRecoilState } from 'recoil'

const ProductItem = ({ id, imageUrl, price, title, description, createdAt }: Product) => {
	const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id))
	const addToCart = () => setCartAmount(prev => (prev || 0) + 1)
	return (
		<li className="products-item">
			<Link to={`/products/${id}`}>
				<p className="products-item-title">{title}</p>
				<img className="products-item-image" src={imageUrl} alt="" />
				<span className="products-item-price">${price}</span>
			</Link>
			<button className="products-item-add-cart" onClick={addToCart}>담기</button>
			<span>{cartAmount || 0}</span>
		</li>
	)
}

export default ProductItem