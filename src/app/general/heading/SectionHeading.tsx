import React, { ReactNode } from 'react'
import './sectionHeading.scss'
type sectionHeadingProps = {
	title:string
	description?:string
}

export default function SectionHeading({title,description}: sectionHeadingProps) {
	return (
		<div className='section_heading'>
				<div className="head">
					<div className="decor"></div>
					<div className='text'>
						<h2>
							{title}
						</h2>
					</div>
					<div className="decor"></div>
				</div>
				<p className='description'>{description}</p>
		</div>
	)
}