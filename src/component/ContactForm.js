
import React from 'react';
import contact from '../image/contact.jpg'
import {SITE_WIDTH} from '../constant/theme'
import YellowBox from './YellowBox'

const css = {
	contactForm:{
		backgroundColor:'#fff',	
		maxWidth:SITE_WIDTH,
		
		paddingLeft:'72px',
		paddingRight:'72px',
		paddingTop:'75px',
		paddingBottom:'75px',
		flex:2.5,
		
	},
	button : {
		background: '#333333',
		width: '100%',
		height: '50px',
		lineHeight:'50px',
		color: '#fff',
		textTransform:'uppercase',
	},
	area: {
		width:'100%',
		height:'237px',
		fontSize: '18px',
		paddingLeft:'20px',
		paddingTop:'20px',
		marginBottom:'43px',
	},
	border :{
		border: '1px solid #C9C9C9',

	},
	inwrap:{
		display:'flex',
		marginBottom:'43px',
	},
	input : {
		flex:1,
		height:'68px',
		paddingLeft:'20px',
		fontSize: '18px',
		border: '1px solid #C9C9C9',
	},
	first:{
		marginRight:'43px',
	},
	sendBtn : {
		backgroundColor:'#333333',
		color:'#fff',
		fontSize:'25px',
		fontWeight:300,
		height:'68px',
		lineHeight:'68px',
		width:'100%',
	},
	boxwrap: {
		display:'flex',
	}
}


export default function ContactForm() {
	return (
		<div style={css.boxwrap}>
			<div style={css.contactForm}>
				<div style={css.inwrap}>
					<input style={{...css.input,...css.first}} placeholder="Họ tên"  />
					<input style={css.input} placeholder="Số điện thoại"  />
				</div>
				
				<div>
					<textarea cols="6" style={{...css.area, ...css.border}} placeholder="Tin nhắn"></textarea>
				</div>
				<button style={css.sendBtn}>Gửi</button>
			</div>
			<YellowBox />
		</div>
	)
}

ContactForm.defaultProps = {
	
}