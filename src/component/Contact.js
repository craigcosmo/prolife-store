
import React from 'react';
import DocumentTitle from 'react-document-title'
import contact from '../image/contact.jpg'
import YellowBox from './YellowBox'
const css = {
	contain: {

	},
	wrapper:{
		backgroundColor:'#000',
		paddingBottom:'500px',
	},
	blackImage: {
		background: 'url('+contact+') center top no-repeat',
		backgroundSize:'120%',
		color:'#fff',
		width:'1200px',
		margin: 'auto',
		height:'400px',
		paddingTop:'160px',
	},
	black : {
		
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
	}
}


export default function Contact() {
	return (
		<DocumentTitle title={'liên hệ cửa hàng máy hút bụi dyson'}>
			<div style={css.contain}>
				<div style={css.wrapper}>
					<div style={css.black}>
						<div style={css.blackImage}>
							<h1 style={css.head1}>Liên Hệ Cửa Hàng</h1>
							<p style={css.par}>Các thắc mắc của khách hàng sẽ được trả lời trong vòng 12 tiếng</p>
						</div>
					</div>
				</div>
				<div style={css.lower}>

				</div>
			</div>
			
		</DocumentTitle>
	);
}

Contact.defaultProps = {
	
}