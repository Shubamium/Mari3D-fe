import React from 'react'
import ContactSection from '../section/contact/ContactSection'
import './contactPage.scss'
import ShowcaseSection from '../section/contact/showcase/ShowcaseSection'
type Props = {}

export default function ContactPage({}: Props) {
	return (
		<main id='container_contact'>
			<ContactSection/>
			<div className="hero_frame">
				<div className="top">
					<img src="/decor/side_l.webp" alt="" className="side l" />
					<img src="/decor/side_r.webp" alt="" className="side r" />
				</div>
				<div className="bottom">
					<img src="/decor/side_l.webp" alt="" className="side l" />
					<img src="/decor/side_r.webp" alt="" className="side r" />
				</div>
			</div>

			<ShowcaseSection/>
		</main>
	)
}