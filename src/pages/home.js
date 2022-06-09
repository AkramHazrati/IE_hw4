import { useState } from "react";
import Product from "../components/product";
import Data from '../data.json'

const Home = () => {

	return (
		<div className="product-list">
			{Data.data.map(product => 
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

export default Home;