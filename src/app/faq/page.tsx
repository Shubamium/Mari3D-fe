import React from 'react'
import FaqList from '../section/faq/list/FaqList'
import FaqHeading from '../section/faq/FaqHeading'

type Props = {}

export default function FaqPage({}: Props) {
	return (
		<main id="container_page">
				<FaqHeading/>
				<FaqList/>
		</main>
	)
}