import React from 'react';
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database

import MessengerCustomerChat from 'react-messenger-customer-chat';
import {FIREBASE_KEY} from './api/api'

firebase.initializeApp(FIREBASE_KEY)


const css = {
	container:{
		flex:1,
		// display:'flex'

	}
}
function App() {
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
