import React from 'react'
import DocumentTitle from 'react-document-title'
import d1 from '../image/d1.jpg'
import d2 from '../image/d2.jpg'
import { Link } from 'react-router-dom'
import { SITE_WIDTH } from '../constant/theme'
import { preload } from '../api/api'

const css = {
	wrapper: {
		// backgroundColor:'red',
		maxWidth: SITE_WIDTH,
		margin: 'auto',
	},
	img: {
		width: '100%',
		display: 'block',
	},
	band: {
		backgroundColor: '#FFCC00',
		height: '60px',
		display: 'flex',
		alignItems: 'center',
	},
	inner: {
		color: '#fff',
		fontSize: '24px',
		textAlign: 'center',
		width: '100%',
		textTransform: 'uppercase',
	},
	floater: {
		fontSize: '33px',
		color: '#000',
		textTransform: 'capitalize',
		position: 'absolute',
		left: '15%',
		top: '30%',
		maxWidth: '400px',
	},
	box: {
		position: 'relative',
	},
	button: {
		fontSize: '14px',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		display: 'inline-block',
		paddingLeft: '20px',
		paddingRight: '20px',
		paddingTop: '10px',
		paddingBottom: '10px',
	},
	thelink: {
		textDecoration: 'none',
		color: '#fff',
	},
}

export default function Home(props) {
	const bannerClick = () => {
		FB.CustomerChat.showDialog()
	}
	return (
		<DocumentTitle title={'máy hút bụi dyson'}>
			<div style={css.wrapper}>
				<div style={css.box}>
					<div style={css.floater}>
						<h1>Máy hút bụi không dây công suất cao</h1>
						<div style={css.button}>
							<Link to="san-pham" style={css.thelink}>
								xem thêm
							</Link>
						</div>
					</div>

					<img style={css.img} src={d1} />
				</div>
				<div style={css.band}>
					<div onClick={bannerClick} style={css.inner}>
						bảo hành 12 thang tất cả sản phẩm dyson
					</div>
				</div>
				<div style={css.box}>
					<div style={css.floater}>
						<h1>Chăm sóc tóc bảo vệ tóc suông mượt</h1>
						<div style={css.button}>
							<Link to="san-pham" style={css.thelink}>
								xem thêm
							</Link>
						</div>
					</div>
					<img style={css.img} src={d2} />
				</div>
			</div>
		</DocumentTitle>
	)
}

Home.defaultProps = {}
