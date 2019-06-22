
import React from 'react';
import DocumentTitle from 'react-document-title'
import contact from '../image/contact.jpg'
import YellowBox from './YellowBox'
import {SITE_WIDTH} from '../constant/theme'
const css = {
	contain: {

	},
	wrapper:{
		backgroundColor:'#000',
		paddingBottom:'500px',
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
		height:'400px',
	},
	contactForm:{
		backgroundColor:'#fff',	
		width:SITE_WIDTH,
		margin:'auto',
		paddingLeft:'72px',
		paddingRight:'72px',
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
	},
	border :{
		border: '1px solid #A5A5A5'
	},
	inwrap:{
		
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
					<div style={css.contactForm}>
						<div style={css.inwrap}>
							<input placeholder="Họ tên"  />
							<input placeholder="Số điện thoại"  />
						</div>
						
						<div>
							<textarea style={{...css.area, ...css.border}} placeholder="Tin nhắn"></textarea>
						</div>
						
					</div>
				</div>
				<div style={css.lower}></div>
			</div>
			
		</DocumentTitle>
	);
}

Contact.defaultProps = {
	
}