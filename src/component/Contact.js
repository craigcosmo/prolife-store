
import React from 'react';
import DocumentTitle from 'react-document-title'
import contact from '../image/contact.jpg'
import YellowBox from './YellowBox'
import ContactForm from './ContactForm'
import {SITE_WIDTH} from '../constant/theme'
const css = {
	conwrap: {

		position:'relative',
	},
	subcon :{
		width:SITE_WIDTH,
		margin: 'auto',
		zIndex:3,
		boxShadow: '6px 7px 12px rgba(0, 0, 0, 0.15)',
	},
	blackbg: {
		width:'100%',
		backgroundColor:'#000',
		position:'absolute',
		height:'400px',
		top:0,
		right:0,
		left:0,
		zIndex:-1
	},
	wrapper:{
		backgroundColor:'#000',
		paddingBottom:'100px',
	},
	blackImage: {
		background: 'url('+contact+') center center no-repeat',
		backgroundSize:'120%',
		color:'#fff',
		width:SITE_WIDTH,
		margin: 'auto',
		height:'400px',
		paddingTop:'160px',
	},
	head1: {
		fontSize:'49px',
		marginBottom:'30px',
		fontWeight:300,
	},
	par: {
		fontSize:'22px',
	},
	lower:{
		height:'200px',
	},
	contactForm:{
		backgroundColor:'#fff',	
		width:SITE_WIDTH,
		
		paddingLeft:'72px',
		paddingRight:'72px',
		paddingTop:'75px',
		paddingBottom:'75px',
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
		margin:'auto',
	}
}


export default function Contact() {
	return (
		<DocumentTitle title={'liên hệ cửa hàng máy hút bụi dyson'}>
			<div style={css.contain}>
				<div style={css.wrapper}>
					<div style={css.blackImage}>
						<h1 style={css.head1}>Liên Hệ Cửa Hàng</h1>
						<p style={css.par}>Các thắc mắc của khách hàng sẽ được trả lời trong vòng 12 tiếng</p>
					</div>
				</div>
				<div style={css.conwrap}>
					
					<div style={css.subcon}>
						<ContactForm />
					</div>
					<div style={css.blackbg}></div>
					
				</div>
				<div style={css.lower}></div>
			</div>
			
		</DocumentTitle>
	);
}

Contact.defaultProps = {
	
}