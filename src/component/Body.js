
import React from 'react';
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import { Route, Link } from 'react-router-dom'

const path = window.location.pathname
console.log(path)

const css ={
	body :{
		// width:'1200px',
		// margin: 'auto',
		flex:1
	}
}


export default function Body(props) {
	// const params = JSON.parse(JSON.stringify(props.match));
	console.log(props)
	return (
		<div style={css.body}>
			<Route path="/" exact component={Home} />
			<Route path="/gioi-thieu" component={About} />
			<Route path="/san-pham" component={Product} />
			<Route path="/lien-he" component={Contact} />
		</div>
	);
}

Body.defaultProps = {
	
}