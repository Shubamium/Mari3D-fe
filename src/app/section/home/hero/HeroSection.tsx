import Button from '@/app/general/button/Button'
import './heroSection.scss'
import React from 'react'
import {FaTwitter, FaTumblr,FaArtstation, FaShoppingBag } from 'react-icons/fa'
import {SiKofi} from 'react-icons/si'
type Props = {}

export default function HeroSection({}: Props) {
	return (
		<section id='container_hero'>
			<article>
					<div className="text-part">
						<div className="title-container">
							<div className="title-left">
								<h1 className='title'>MARI 3D</h1>
								<div className="bottom"> 
									<p className='tagline'>3D Artist</p>
									<div className="contact">
										<a href="https://twitter.com/_Mari_Art" target='_blank'><FaTwitter/></a>
										<a href="https://www.tumblr.com/mari-3d" target='_blank'><FaTumblr/></a>
										<a href="https://www.artstation.com/martine_r" target='_blank'><FaArtstation/></a>
										<a href="https://mmari.booth.pm/" target='_blank'><FaShoppingBag/></a>
										<a href="https://ko-fi.com/A664QB1" target='_blank'><SiKofi/></a>
									</div>
								</div>
							</div>

							<div className="title-right">
								<img src="/image/icon.webp" alt="" />
							</div>
						</div>
						<p className='main-text'>
						{`Hello! My name is Mari, i am a 3D artist that specializes in creating 1:1 3D models for Vtubers and Co! I also work on face tracking, emotes, shader effects and more!
Check out my work, and maybe i'll see your application soon? `}
						</p>
						<div className="cta">
							<Button to='https://forms.gle/NLMiugF9ux725Ji38' newTab>Apply Here</Button>
							<svg width="274" height="96" viewBox="0 0 274 96" fill="none" className='btn-decor' xmlns="http://www.w3.org/2000/svg">
									<path d="M127 13H60L48 1H2L28 27H10L28 45V84" stroke="black"/>
									<path d="M263 37L273 46.3548V85.6452L263 95H238L228 85.6452H184" stroke="black"/>
							</svg>
							<img src="/decor/arrow_theme.webp" alt="" />
						</div>
					</div>
			</article>
			<figure>
				<div className="card">
					<img className='card-front' src="/image/hero.webp" alt="" />
					<video className='card-back' src="/video/hero.mp4" autoPlay loop muted/>
				</div>
				<div className="arrows">
					<div className="arrow"></div>
					<div className="arrow"></div>
					<div className="arrow"></div>
				</div>
			</figure>
		</section>
	)
}