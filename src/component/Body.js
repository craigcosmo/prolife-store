
import React from 'react';
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import ProductItems from './ProductItems'
import { Route, Link } from 'react-router-dom'

const path = window.location.pathname

const css ={
	body :{
		flex:1
	}
}


export default function Body(props) {
	console.log(props)
	return (
		<div style={css.body}>
			<Route path="/" exact component={Home} />
			<Route path="/gioi-thieu" component={About} />
			<Route path="/san-pham" exact component={Product} />
			<Route path="/san-pham/:collection" component={ProductItems} />
			<Route path="/lien-he" component={Contact} />

		</div>
	);
}

Body.defaultProps = {
	
}