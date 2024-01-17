import React from 'react'
import { FaArrowRight, FaArtstation, FaPaperPlane, FaShoppingBag, FaTumblr, FaTwitter } from 'react-icons/fa'
import { SiKofi } from 'react-icons/si'
import './contactSection.scss'
import Button from '@/app/general/button/Button'
type Props = {}

export default function ContactSection({}: Props) {
	return (
		<section id="contact-form">
			<div className="credentials">
				<div className="confine">
					<figure>
						<img src="/image/contact_icon.webp" alt="" />
					</figure>
					<article>
						<h1>MARI3D</h1>
						<p className='tagline'>3D Artist {'(or)'} 3D Designer</p>
						<p className='tag-email'> <span className='tag'>@_Mari_Art</span> - <a  href='mailto:mari3dbusiness@gmail.com' className="email">mari3dbusiness@gmail.com</a> </p>

						<div className="contact">
									<a href="https://twitter.com/_Mari_Art" target='_blank'><FaTwitter/></a>
									<a href="https://www.tumblr.com/mari-3d" target='_blank'><FaTumblr/></a>
									<a href="https://www.artstation.com/martine_r" target='_blank'><FaArtstation/></a>
									<a href="https://mmari.booth.pm/" target='_blank'><FaShoppingBag/></a>
									<a href="https://ko-fi.com/A664QB1" target='_blank'><SiKofi/></a>
							</div>
					</article>
				</div>
			</div>

			<div className="form-confine">
				<form action="https://formspree.io/f/mpzvaezo" method='POST' className='form'>
					<div className="form-head">
							<h2>Contact Me</h2>
							<div className="arrows">
								<div className="arrow"></div>
								<div className="arrow"></div>
								<div className="arrow"></div>
							</div>
					</div>
					<div className="form-body">
						<div className="field">
							<label htmlFor="">Name</label>
							<input type="text" name='name' placeholder='Enter your name. . .'  required/>
						</div>
						<div className="field">
							<label htmlFor="email">E-mail</label>
							<input type="email" name='email' placeholder='Enter your email. . .'  required />
						</div>
						<div className="field full">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message"  required className='textarea' placeholder='Write your message here. . .'></textarea>
						</div>
						<div className="field submit-field full">
							<button type='submit' className='btn button-submit'>
								Send <FaPaperPlane/>
							</button>
						</div>
					</div>
				</form>
				<figure>
					<video src="/video/credit.mp4" autoPlay loop></video>
				</figure>
			</div>
		</section>
	)
}