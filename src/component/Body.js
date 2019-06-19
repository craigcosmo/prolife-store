
import React from 'react';
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import { Route, Link } from 'react-router-dom'



export default function Body() {
	return (
		<div>
			<Route path="/" component={Home} />
			<Route path="/gioi-thieu" component={About} />
			<Route path="/san-pham" component={Product} />
			<Route path="/lien-he" component={Contact} />
		</div>
	);
}

Body.defaultProps = {
	
}