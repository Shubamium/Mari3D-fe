'use client'
import React, { useState } from 'react'
import './faqList.scss'
import { FaPlus } from 'react-icons/fa'

type Props = {}

export default function FaqList({}: Props) {
	return (
		<section id='container_faq-list'>
			<div className="confine">
				<aside>
					<h2 className='title'>FAQ</h2>
					<nav>
						<button className='faq-btn active'>Payment</button>
						<button className='faq-btn'>Orders</button>
						<button className='faq-btn'>Models</button>
						<button className='faq-btn'>Others</button>
					</nav>

					<div className="decor">
						<div className="arrows">
							<div className="arrow"></div>
							<div className="arrow"></div>
							<div className="arrow"></div>
						</div>

						<div className="edge"></div>
					</div>
				</aside>
				<div className="faq-list">
					<FaqItem/>
					<FaqItem/>
					<FaqItem/>
					<FaqItem/>
					<FaqItem/>
					<FaqItem/>
					<FaqItem/>
				</div>
			</div>
		</section>
	)
}

function FaqItem(){

	const [isActive, setIsActive] = useState(false)

	return <div className={`faq ${isActive ? 'active' : ''}`} onClick={()=>{setIsActive(isActive => !isActive)}}>
			<div className="faq-head">
				<h2 className='questions'>Do you create characters with different body types, skin colors, hair textures etc?</h2>
				<FaPlus/>
			</div>
			<div className="faq-body">
				<div className="title">
					<h3>Answers</h3>
					<div className="arrows">
						<div className="arrow"></div>
						<div className="arrow"></div>
						<div className="arrow"></div>
					</div>
				</div>
				<p>Yes of course! I am open to creating a 3D representative of all bodies!</p>
			</div>
		</div>
}