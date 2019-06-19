import React from 'react';
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const firebaseConfig = {
	apiKey: 'AIzaSyA-Nlh1b7DVT1epQyTUnwaA6CIUkFLOA34',
	authDomain: 'prolife-68172.firebaseapp.com',
	databaseURL: 'https://prolife-68172.firebaseio.com',
	projectId: 'prolife-68172',
	storageBucket: 'prolife-68172.appspot.com',
	messagingSenderId: '928262337014',
	appId: '1:928262337014:web:c76b4610edbaca55'
}

firebase.initializeApp(firebaseConfig)


const css = {
	container:{
		// flex:1,
		// display:'flex'
		width:'1200px'
	}
}
function App() {
	return (
		<div style={css.container}>
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
