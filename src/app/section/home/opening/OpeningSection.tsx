import React from 'react'
import './openingSection.scss'
import Button from '@/app/general/button/Button'
import { FaArrowRight } from 'react-icons/fa'

type Props = {}

export default function OpeningSection({}: Props) {
	return (
		<section id="container_opening">
				<article>
					<h2>Next Batch</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
				</article>
				<div className="opening">
					<h3>2024</h3>
				</div>
				<div className="action">
					<Button to='https://trello.com/b/IEsTDT61/maris-3d-trello' newTab>
						My Trello <FaArrowRight/>
					</Button>
				</div>
		</section>
	)
}