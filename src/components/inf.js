import Button from "./button";
import icon from '../icon.png';
import star from '../star.png';
import fullstar from '../fullstar.png';


const Product = ({id, image, title, price}) => {


	return (

		<div className="product">
			<img className="inf__image" src={image} /> 
			<h1 className="inf__title">
								{title}
			</h1>
			<img src={fullstar} className="full_star" />
			<img src={star} className="star" />	
			<img src={star} className="star" />	
			<img src={star} className="star" />	
			<img src={star} className="star" />			
					
			
			
			
			<div className="inf__meta">
				<div className="inf__price">{price}</div>
				
			</div>
			<Button className="inf__addtocart">
				Buy Now
				<img className="cart" src={icon} />
			</Button>
			
		</div>
	)
}

export default Product;