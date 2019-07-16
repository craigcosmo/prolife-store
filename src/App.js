import React from 'react'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import { preload } from './api/api'

import d1 from './image/d1.jpg'
import contact from './image/contact.jpg'
import ewhite from './image/ewhite.png'
import hair from './image/hair.png'
import f from './image/f.png'
import lazada from './image/lazada.png'
import twhite from './image/twhite.png'
import d2 from './image/d2.jpg'
import fan from './image/fan.png'
import logo from './image/logo.png'
import u from './image/u.png'
import e from './image/e.png'
import fwhite from './image/fwhite.png'
import t from './image/t.png'
import uwhite from './image/uwhite.png'

import MessengerCustomerChat from 'react-messenger-customer-chat'

const css = {
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
}
function App(props) {
	return (
		<div style={css.container}>
			<Header />
			<Body />
			<Footer />
			<MessengerCustomerChat
				pageId="2457682160929100"
				appId="2317245631863613"
				htmlRef="window.location.pathname"
				debug="true"
			/>
		</div>
	)
}

export default App
