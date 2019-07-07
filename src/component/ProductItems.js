import React, { useState, useEffect } from 'react'
import DocumentTitle from 'react-document-title'
import vac from '../image/vac.png'
import fan from '../image/fan.png'
import hair from '../image/hair.png'
import { Link } from 'react-router-dom'
import { SITE_WIDTH } from '../constant/theme'
import lazada from '../image/lazada.png'
import { db } from '../api/api'
const css = {
	wrap: {
		maxWidth: SITE_WIDTH,
		margin: 'auto',
		textAlign: 'center',
		paddingTop: '10%',
		paddingBottom: '10%',
		flex: 1,
	},
	laz: {
		width: '200px',
	},
}
export default function ProductItems({ match }) {
	console.log(match.params.collection)
	const [title, setTitle] = useState('')
	const mystate = () => {
		if (match.params.collection == 'may-hut-bui') {
			return 'máy hút bụi'
		}
		if (match.params.collection == 'quat-khong-canh') {
			return 'quạt không cánh'
		}
		if (match.params.collection == 'may-say') {
			return 'máy sấy'
		}
	}
	useEffect(() => setTitle(mystate()), [])

	return (
		<DocumentTitle title={'các sản phẩm ' + title}>
			<div style={css.wrap}>
				<div>
					<h1 style={{ marginBottom: '40px' }}>
						Các Sản Phẩm Hiện Được Hiển Thị Trên Lazada Store
					</h1>
					<a
						target="_blank"
						href="https://www.lazada.vn/prolife/?langFlag=vi&q=All-Products&from=wangpu&pageTypeId=2">
						<img src={lazada} style={css.laz} />
					</a>
					<div style={{ paddingTop: '50px' }}>
						<a
							target="_blank"
							href="https://www.lazada.vn/prolife/?langFlag=vi&q=All-Products&from=wangpu&pageTypeId=2">
							Đến gian hàng lazada
						</a>
					</div>
				</div>
			</div>
		</DocumentTitle>
	)
}

ProductItems.defaultProps = {}
