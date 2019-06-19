
import React from 'react';
import logo from '../image/logo.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const css = {
	wrapper :{
		backgroundColor:'red',
		display: 'flex',
		flexDirection:'row',
		alignItems:'center',
	},
	logo:{
		backgroundColor:'blue',
		display:'flex',
		alignItems:'center',
	},
	right:{
		textAlign:'right',
	},
	text:{
		textTransform:'capitalize',
		marginLeft:'20px',
	},
	img :{
		width:'200px'
	}
}
export default function Header() {
	return (
		<div style={css.wrapper}>
			<div style={css.logo}>
				<Link to="/" style={css.text}>
					<img style={css.img} src={logo} />
				</Link>
			</div>
			<div style={css.right}>
				<Link to="san-pham" style={css.text}>sản phẩm</Link>
				<Link to="gioi-thieu" style={css.text}>giới thiệu</Link>
				<Link to="lien-he" style={css.text}>liện hệ cửa hàng</Link>
			</div>
		</div>
	);
}


Header.defaultProps={
	
}