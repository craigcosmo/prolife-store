
import React from 'react';
import DocumentTitle from 'react-document-title'
import vac from '../image/vac.png'
import fan from '../image/fan.png'
import hair from '../image/hair.png'
import {Link} from 'react-router-dom'
import {SITE_WIDTH} from '../constant/theme'
const css = {
	wrap:{
		width:SITE_WIDTH,
		margin: 'auto',
	},
	head:{
		fontSize:'40px',
		marginBottom:'85px',
		fontWeight:400,
		marginTop:'180px',
		textAlign:'center',
		textTransform:'uppercase',
	},
	box: {
		justifyContent: 'space-between',
		display:'flex',
		marginBottom:'200px',
	},
	item : {
		width:'30%',
		display:'flex',
		flexDirection:'column',
	},
	border: {
		border: '1px solid #ADADAD',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		marginBottom:'10px',
		backgroundColor:'#fff',
		flex:1
	},
	img: {
		// width:'100%',
		height:'400px',
		margin:'20px',
		marginBottom:'40px',
		marginTop:'40px',
	},
	title:{
		fontSize:'24px',
	},
	img1 :{
		// width:'70%'
	},
	img2 :{
		// height:'30%',
		// width:'auto'
	}
}
export default function Product() {
	return (
		<DocumentTitle title={'sản phẩm'}>
			<div style={css.wrap}>
				<h1 style={css.head}>
					chọn một trong các dòng sản phẩm của dyson
				</h1>
				<div style={css.box}>
					<div style={css.item}>
						<Link to={'san-pham/may-hut-bui'} style={css.border}>
							<img style={css.img} src={vac} />
						</Link>
						<div style={css.title}>Máy hút bụi</div>
					</div>
					<div style={css.item}>
						<Link to={'san-pham/quat-khong-canh'} style={css.border}>
							<img style={css.img } src={fan} />
						</Link>
						<div style={css.title}>Quạt không cánh</div>
					</div>
					<div style={css.item}>
						<Link to={'san-pham/dyson-supersonic'} style={css.border}>
							<img style={css.img } src={hair} />
						</Link>
						<div style={css.title}>Chăm sóc tóc</div>
					</div>
				</div>	
			</div>
		</DocumentTitle>
		
	);
}

Product.defaultProps = {
	
}