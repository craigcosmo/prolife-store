
import React from 'react';
import twit from '../image/twhite.png'
import face from '../image/fwhite.png'
import email from '../image/ewhite.png'
import you from '../image/uwhite.png'
import {Link} from 'react-router-dom'
import {URL} from '../api/api'
import ReactTooltip from 'react-tooltip'
import {SITE_WIDTH} from '../constant/theme'

const css = {
	wrapper :{
		display:'flex',
		flexDirection:'row',
		color:'#fff',
		width:SITE_WIDTH,
		margin:'auto'
	},
	dec1 : {
		flex:1,
		paddingRight:'20px',
	},
	dec2 : {
		flex:1,
		paddingLeft:'20px',
		paddingRight:'20px',
	},
	dec3 : {
		flex:1,
		paddingLeft:'20px',
	},
	footer : {
		backgroundColor:'#000',
		paddingBottom:40,
		paddingTop:40,
		marginTop:'auto'
	},
	share:{

	},
	par :{
		marginBottom:'10px',
		fontSize:'15px',
		fontWeight:300,
	},
	img: {
		width:'24px',
		height:'24px',
	},
	second: {
		width:'22px',
		
	},
	link :{
		marginRight:'20px',
	}
}

const twitter = function(e){
    e.preventDefault()
    let width  = 575,
    height = 400,
    left   = (window.innerWidth  - width)  / 2,
    top    = (window.innerHeight - height) / 2,
    uri = encodeURIComponent(URL),
    text = '',
    url = 'https://twitter.com/share?url='+uri,
    opts = 'status=1' + ',width=' + width + ',height=' + height +',top=' + top + ',left=' + left;

    window.open(url, 'twitter', opts)
}
const facebook = function(e){
    e.preventDefault()
    let width  = 575,
    height = 400,
    left   = (window.innerWidth  - width)  / 2,
    top    = (window.innerHeight - height) / 2,
    uri = encodeURIComponent(URL),
    text = '',
    url = 'https://www.facebook.com/sharer/sharer.php?u='+uri,
    opts = 'status=1' + ',width=' + width + ',height=' + height +',top=' + top + ',left=' + left;

    window.open(url, 'twitter', opts)
}

function Footer() {

	

	return (
		<div style={css.footer}>
			<div style={css.wrapper}>
				<div style={{...css.dec1, ...css.share}}>
					<div style={css.par}>Website này thuộc sở hửu công ty prolife</div>
					<div style={css.par}>Cty prolife nhà phân phối sản phẩm của thươngthương tại Việt Nam </div>
				</div>
				<div style={{...css.dec2, ...css.share}}>
					<div style={css.par}>social media</div>
					<div>
						<a style={css.link} onClick={twitter}>
							<img style={css.img} data-tip="twitter" src={twit} />
						</a>
						<a style={css.link} onClick={facebook}>
							<img style={css.img} data-tip="facebook" src={face} />
						</a>
						<a style={css.link} href={'https://www.youtube.com/user/dysonteam'} target="_blank">
							<img style={css.img} data-tip="youtube" src={you} />
						</a>
						<a style={css.link} href={'mailto:prolife.customer@gmail.com?subject=myhutbuidyson&body=hey, website ban san may hut bui dyson'}>
							<img style={css.img} data-tip="share via email" src={email} />
						</a>
					</div>
					<ReactTooltip effect="solid" place="bottom" />
				</div>
				<div style={{...css.dec3, ...css.share}}>
					<div style={css.par}>Thong tin liên hệ</div>
					<div style={css.par}>0908945948</div>
					<div style={css.par}>55 phạm ngocthach , phường 6, quân 3</div>
					<div style={css.par}>
						<a href={'mailto:prolife.customer@gmail.com?subject=xin chao toi can tim hieu san pham&body=chao prolife, toi can biet ve san pham...'} >prolife.customer@gmail.com</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
