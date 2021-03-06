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
	const [title, setTitle] = useState('')
	const [data, setData] = useState([])

	const mytitle = () => {
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
	const mypro = () => {
		if (match.params.collection == 'may-hut-bui') {
			return 'vacuum'
		}
		if (match.params.collection == 'quat-khong-canh') {
			return 'fan'
		}
		if (match.params.collection == 'may-say') {
			return 'hair_care'
		}
	}
	const getdata = async () => {
		let pro = await mypro()
		let docref = db.collection('product_range').doc(pro)

		docref.get().then((doc) => {
			if (doc.exists) {
				let docs = doc.data()
				// console.log(typeof docs)
				for (let property in docs) {
					console.log(property.id)
				}
				// docs.map( (i) => {

				// })
				console.log(doc.data())
			}
			// querySnapshot.forEach((doc) => {
			// 	console.log(doc)
			// 	// console.log(`${doc.id} => ${doc.data()}`)
			// 	// return doc
			// })
		})
	}
	getdata()
	// useEffect(async () => {
	// 	const res = await getdata()
	// 	setData(res)
	// })

	useEffect(() => setTitle(mytitle()), [])

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
	const rednerData = (data) => {
		return <div></div>
	}
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
