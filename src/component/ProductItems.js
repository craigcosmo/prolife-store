import React, { useState, useEffect } from 'react'
import DocumentTitle from 'react-document-title'
import vac from '../image/vac.png'
import fan from '../image/fan.png'
import hair from '../image/hair.png'
import { Link } from 'react-router-dom'
import { SITE_WIDTH } from '../constant/theme'
import lazada from '../image/lazada.png'
import { db } from '../api/api'
import vacbanner from '../image/vacbanner.jpg'
import hairbanner from '../image/hairbanner.jpg'
import fanbanner from '../image/fanbanner.jpg'
const css = {
	wrap: {
		maxWidth: SITE_WIDTH,
		margin: 'auto',
		textAlign: 'center',
		flex: 1,
	},
	laz: {
		width: '200px',
	},
	bannerimg: {
		maxWidth: '100%',
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
	const getdata = () => {
		db.collection('product_range')
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					console.log(`${doc.id} => ${doc.data()}`)
				})
			})
	}
	useEffect(() => setTitle(mystate()), [])

	// db.collection("users").add({
	//     first: "Alan",
	//     middle: "Mathison",
	//     last: "Turing",
	//     born: 1912
	// })
	// .then(function(docRef) {
	//     console.log("Document written with ID: ", docRef.id);
	// })
	// .catch(function(error) {
	//     console.error("Error adding document: ", error);
	// });

	return (
		<DocumentTitle title={'các sản phẩm ' + title}>
			<div style={css.wrap}>
				<div>
					<div style={css.banner}>
						<img style={css.bannerimg} src={vacbanner} />
					</div>
					<div></div>
				</div>
			</div>
		</DocumentTitle>
	)
}

ProductItems.defaultProps = {}
