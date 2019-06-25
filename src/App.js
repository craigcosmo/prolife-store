import React from 'react';
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import {preload} from './api/api'

import MessengerCustomerChat from 'react-messenger-customer-chat';

const images = [
	'../image/d1.jpg',
	'../image/d1.jpg',
	'../image/contact.jpg',
	'../image/ewhite.png',
	'../image/hair.png',
	'../image/tordrive tool vac.png',
	'../image/d1.jpg',
	'../image/f.png',
	'../image/lazada.png ',
	'../image/twhite.png',
	'../image/d2.jpg',
	'../image/fan.png',
	'../image/logo.png',
	'../image/u.png',
	'../image/e.png',
	'../image/fwhite.png ',
	'../image/t.png',
	'../image/uwhite.png',
]
setTimeout( () => {
	preload(images)
},3000)

const css = {
	container:{
		flex:1,
		display:'flex',
		flexDirection:'column',

	}
}
function App(props) {
	return (
		<div style={css.container}>
			<Header />
			<Body />
			<Footer />
			<MessengerCustomerChat
			    pageId="2457682160929100"
			    appId="2317245631863613"
			    htmlRef="window.location.pathname"
			/>
		</div>
	);
}

export default App;
