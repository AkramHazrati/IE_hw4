import Button from "./button";
import { Link } from "react-router-dom";
import Data from '../data.json';
import icon from '../icon.png';

const Navbar = () => {

	const categories = [];
	Data.data.forEach(product => {
		if (!categories.includes(product.category)) {
			categories.push(
				product.category
			)
		}
	});

	return (
		<div className="navbar">
			<div className="container">
				<ul className="nav">
					<li>
						<Link to="/">
							All Products
						</Link>
					</li>
					{categories.map(cat => 
							<li>
								<Link to={`/category/${cat}/`}>
									{cat}
								</Link>
							</li>
						)}
				</ul>

				<Button>
					Cart 
					<img className="cart" src={icon} />
				</Button>
			</div>
		</div>
	)
}


export default Navbar;
