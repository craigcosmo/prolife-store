
import React from 'react';
import logo from '../image/logo.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {SITE_WIDTH, SIDE_PADDING} from '../constant/theme'

const css = {
	wrapper :{
		// backgroundColor:'red',
		display: 'flex',
		flexDirection:'row',
		alignItems:'center',
		paddingTop:'30px',
		maxWidth:SITE_WIDTH,
		margin: 'auto',
		marginBottom:'20px',
		...SIDE_PADDING
	},
	logo:{
		// backgroundColor:'blue',
		display:'flex',
		alignItems:'center',
	},
	right:{
		textAlign:'right',
		flex:1,

	},
	text:{
		textTransform:'capitalize',
		marginLeft:'20px',
		textDecoration:'none',
		color:'#000',

	},
	img :{
		width:'200px'
	},
	left:{
		width:'300px'
	}
}
export default function Header() {
	return (
		<div style={css.wrapper}>
			<div style={css.left}>
				<Link to="/" style={css.logo}>
					<img style={css.img} src={logo} />
				</Link>
			</div>
			
			<div style={css.right}>
				<Link to="/san-pham" style={css.text}>Sản phẩm</Link>
				{/*<Link to="/gioi-thieu" style={css.text}>Giới thiệu</Link>*/}
				<Link to="/lien-he" style={css.text}>Liện hệ cửa hàng</Link>
			</div>
		</div>
	);
}


Header.defaultProps={
	
}