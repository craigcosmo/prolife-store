import React from 'react';
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'


import MessengerCustomerChat from 'react-messenger-customer-chat';



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
