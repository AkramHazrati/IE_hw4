import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/navabar';
import Home from "./pages/home";
import Category from "./pages/category";
import Detail from "./pages/details";
import './style.css'

function App() {
  return (
	  <BrowserRouter>
		<div className="App">
			
			<Navbar />

			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category/:category/" element={<Category />} />
					<Route path="/product/:id/" element={<Detail />} />
					
				</Routes>
			</div>
		</div>
	  </BrowserRouter>
  );
}

export default App;
