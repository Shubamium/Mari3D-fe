import React from 'react'
import './footer.scss'
import Link from 'next/link'
import { FaArtstation, FaShoppingBag, FaTumblr, FaTwitter } from 'react-icons/fa'
import { SiKofi } from 'react-icons/si'
type Props = {}

export default function Footer({}: Props) {
	
	return (
		<>
		<div className="decor_footer_frame">
			<img src="decor/side_l.png" alt="" className='side' />
			<img src="decor/side_r.png" alt="" className='side' />
		</div>
		<footer id='container_footer'>
			<div className="confine">

				{/* text */}
				<div className="left">
					<div className="pfp">
						<img src="image/icon.png" alt="" />
					</div>
					<div className="text">
						<div className="head">
							<div className="decor_skew">
								<div className="box a"></div>
								<div className="box b"></div>
								<div className="box c"></div>
							</div>
							<article>
								<h2>MARI 3D</h2>
								<p className='email'>mari3dbusiness@gmail.com</p>
								<hr />
								<p className='copyright'>&copy; 2024 Mari 3D. All rights reserved.</p>
							</article>
						</div>
						<nav className='navigation'>
							<Link className={'nav-link active'} href={'/'}>Home</Link>
							<Link className={'nav-link'} href={'/terms'}>Terms of Services</Link>
							<Link className={'nav-link'} href={'/portfolio'}>Portfolio</Link>
							<Link className={'nav-link'} href={'/contact'}>Contact</Link>
							<Link className={'nav-link'} href={'/faq'}>FAQ</Link>
							<Link className={'nav-link'} href={'/prices'}>Prices</Link>
						</nav>
						<div className="contact">
								<a href="https://twitter.com/_Mari_Art" target='_blank'><FaTwitter/></a>
								<a href="https://www.tumblr.com/mari-3d" target='_blank'><FaTumblr/></a>
								<a href="https://www.artstation.com/martine_r" target='_blank'><FaArtstation/></a>
								<a href="https://mmari.booth.pm/" target='_blank'><FaShoppingBag/></a>
								<a href="https://ko-fi.com/A664QB1" target='_blank'><SiKofi/></a>
						</div>
					</div>
				</div>

				{/* credits */}
				<div className="right">
					<div className="decor_boxes">
							<div className="box a"></div>
							<div className="box b"></div>
							<div className="box c"></div>
					</div>
					<div className="credits">
							<div className="head">
								<h2>Credits</h2>
								<div className="arrows">
									<div className="decor_arrow"></div>
									<div className="decor_arrow"></div>
									<div className="decor_arrow"></div>
								</div>
							</div>
							<div className="credit-list">
									<Credit  title='Live 2D Art & Rig' people={[{link:'https://twitter.com/AwooSusu',name:'@AwooSusu'}]}/>
									<Credit  title='Chibi Live 2D Art & Rig' people={[{link:'https://twitter.com/AriaVlive',name:'@AriaVlive'},{link:'https://twitter.com/pwintwai21',name:'@pwintwai21'}]}/>
									<Credit  title='Website Design' people={[{link:'https://twitter.com/Shubamium2',name:'@shubamium'}]}/>
									<Credit  title='Current Design' people={[{link:'https://twitter.com/Sandrock306',name:'@sandrock306'}]}/>
									<Credit  title='Old Design' people={[{link:'https://twitter.com/lorminatti',name:'@lorminatti'}]}/>
									<Credit  title='PNGTuber' people={[{link:'https://twitter.com/mielitta_',name:'@mielitta'}]}/>
									<Credit  title='2D Artist Recommendation' people={[{link:'https://twitter.com/wakiobake',name:'@wakiobake'},{link:'https://twitter.com/_spatsula', name:'@_spatsula'}]}/>
									<Credit  title='Others 3D Content Background:' people={[{link:'https://freepik.com',name:'Freepik'}]}/>
							</div>
					</div>
				</div>

			</div>
		</footer>
		</>
	)
}

function Credit({people,title}:{people:{link:string,name:string}[],title:string}){

	return <div className="credit-item">
		<h3>{title}</h3>
		{people.map((peps)=>{
			return <a href={peps.link} target='_blank' key={peps.name}>{peps.name}</a>
		})}
	</div>
}