import React from 'react'

import './termsRight.scss'
import { FaUserCog } from 'react-icons/fa'
type Props = {}

export default function TermsRight({}: Props) {
	return (
		<section id="container_rights">
			<div className="confine">
				<article>
					<div className="heading">
						<div className="text">
							<FaUserCog/> <h2>INTELLECTUAL PROPERTY RIGHTS</h2>
						</div>
						<div className="arrows">
							<div className="arrow"></div>
							<div className="arrow"></div>
							<div className="arrow"></div>
						</div>
					</div>
					<div className="body">

						<div className="right">
							<h2>Ownership Transfer</h2>
							<p>You do not have the right to transfer ownership and copyright to another person. <b>If you wish to discuss your options. Contact me</b></p>
						</div>
						<div className="right">
							<h2>Redistribution</h2>
							<p>You do not own the rights to redistribution. <b>If you want to sell the 3D model as merchandise, or make it publicly available. Contact me</b></p>
						</div>
						
					</div>
				</article>
				<figure>
					<video autoPlay loop src="video/showcase.mp4"></video>
				</figure>
			</div>

			<div className="warning">
				<p>I keep the rights to use commissioned work for <b>promotional</b> or <b>portfolio purposes</b>.</p>
			</div>
		</section>
	)
}