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
								<img src="/image/icon.png" alt="" />
							</div>
						</div>
						<p className='main-text'>
						{`Hello! My name is Mari, i am a 3D artist that specializes in creating 1:1 3D models for Vtubers and Co! I also work on face tracking, emotes, shader effects and more!
Check out my work, and maybe i'll see your application soon? `}
						</p>
						<div className="cta">
							<Button to='https://forms.gle/NLMiugF9ux725Ji38' newTab>Apply Here</Button>
							<img src="/decor/arrow_theme.png" alt="" />
						</div>
					</div>
			</article>
			<figure>
				<div className="card">
					<img className='card-front' src="/image/hero.png" alt="" />
					<video className='card-back' src="/video/hero.mp4" autoPlay loop muted/>
				</div>
			</figure>
		</section>
	)
}