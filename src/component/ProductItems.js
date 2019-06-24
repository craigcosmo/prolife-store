
import React from 'react';
import DocumentTitle from 'react-document-title'
import vac from '../image/vac.png'
import fan from '../image/fan.png'
import hair from '../image/hair.png'
import {Link} from 'react-router-dom'
import {SITE_WIDTH} from '../constant/theme'
const css = {
	wrap:{
		maxWidth:SITE_WIDTH,
		margin: 'auto',
	},

}
export default function ProductItems({match}) {
	console.log(match.params.collection)
	return (
		<DocumentTitle title={'các sản phẩm'}>
			<div style={css.wrap}>
				
			</div>
		</DocumentTitle>
		
	);
}

ProductItems.defaultProps = {
	
}