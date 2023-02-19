import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { QueryKeys, fetcher } from "../../queryClient"
import { Product } from "../../types"

const ProductDetail = () => {
	const { id } = useParams()
	const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
		fetcher({
			method: 'GET',
			path: `/products/${id}`,
		}),
	)

	if (!data) return null;

	const {
		category,
		description,
		title,
		image,
		price,
		rating: {
			rate
		}
	} = data

	return (
		<div className="products-detail">
			<p className="products-detail-category">{category}</p>
			<p className="products-detail-title">{title}</p>
			<img className="products-detail-image" src={image} alt="" />
			<p className="products-detail-description">{description}</p>
			<span className="products-detail-price">${price}</span>
			<span className="products-detail-rating">{rate}</span>
		</div>
	)
}
export default ProductDetail