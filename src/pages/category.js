import Product from "../components/product";
import Data from '../data.json'
import { useParams } from "react-router-dom";

const Category = () => {

	let params = useParams();

	const category = params.category;

	return (
		<div className="product-list">
			{Data.data.filter(product => product.category === category).map(product => 
					<div className="product-list__item">
						<Product
							id={product.id}
							image={product.img}
							title={product.title}
							price={product.price}
							size={product.size}
							category={product.category}
						/>
					</div>
				)}
		</div>
	)
}

export default Category;