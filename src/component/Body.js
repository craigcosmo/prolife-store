import * as firebase from 'firebase'
import React from 'react';

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

function Body() {
	return (
		<div>
			body
		</div>
	);
}

export default Body;
