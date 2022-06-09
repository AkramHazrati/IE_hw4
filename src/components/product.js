import Button from "./button";
import { Link } from "react-router-dom";
import icon from '../icon.png';
import Data from '../data.json';

const Product = ({id, image, title, price, size}) => {


	return (

		<div className="product">
			<img className="product__image" src={image} />
			
			 
			<Link to={`/product/${id}/`} className="product__title">
								{title}
			</Link>
						
					
			
			
			<div className="product__meta">
				<div className="product__price">{price}</div>
				<div className="product__size">{size}</div>
			</div>
			<Button className="product__addtocart">
				Add to cart
				<img className="cart" src={icon} />
			</Button>
		</div>
	)
}

export default Product;