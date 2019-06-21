
import React from 'react';


const css = {
	yellow: {
		backgroundColor:'#ffcc00',
		paddingTop:'85px',
		paddingLeft:'70px',
	},
	head:{
		marginBottom:'50px',

	},
	par : {
		marginBottom:'35px',
		fontSize:'21px',
	}
}


export default function Yellow() {
	return (
		<div style={css.yellow}>
			<h2 style={css.head}>Thông tin liên hệ</h2>
			<p style={css.par}>0908945948</p>
			<p style={css.par}>55 phạm ngocthach , phường 6, quân 3</p>
			<p style={css.par}>prolife.customer@gmail.com</p>
			<p style={css.par}><a href="https://www.facebook.com/prolife.store/">facebook page</a></p>
		</div>
	);
}

Yellow.defaultProps = {
	
}