import React from 'react'
import './faqHeading.scss'

type Props = {}

export default function FaqHeading({}: Props) {
	return (
		<div id="container_faq-head">
			<div className="confine">
				<article>
					<h1>Frequently Asked Questions </h1>
					<p>Some text about this page</p>
				</article>

				<figure>
					<img src="/image/banner-min.png" alt="" />
				</figure>
			</div>
		</div>
	)
}