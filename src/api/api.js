
import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for database


export const URL = 'https://mayhutbuidyson.com'

export const FIREBASE_KEY = {
	apiKey: 'AIzaSyA-Nlh1b7DVT1epQyTUnwaA6CIUkFLOA34',
	authDomain: 'prolife-68172.firebaseapp.com',
	databaseURL: 'https://prolife-68172.firebaseio.com',
	projectId: 'prolife-68172',
	storageBucket: 'prolife-68172.appspot.com',
	messagingSenderId: '928262337014',
	appId: '1:928262337014:web:c76b4610edbaca55'
}



export const preload = function(arr){
	arr.map( (url)=>{
		(new Image()).src = url
	})
	
}

firebase.initializeApp(FIREBASE_KEY)

export const db = firebase.firestore()