import React from 'react'
import './toolSection.scss'
import SectionHeading from '@/app/general/heading/SectionHeading'
type toolsProps = {

}

export default function ToolsSection({}: toolsProps) {
	return (
		<section id='container_tools'>
				<SectionHeading title='Tools I work with'/>

				<div className="content">

					{/* Card Photo */}
					<div className="card blue">
						 <div className="card-img">
										<img src="/image/ic_photo.png" alt="" />
						 </div>

						 <div className="card-text">
								<h2>Adobe Photoshop</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						 </div>
					</div>

					{/* Card SAI */}
					<div className="card">
						 <div className="card-img">
								<img src="/image/ic_sai.png" alt="" />
						 </div>

						 <div className="card-text">
								<h2>Paint Tool SAI</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						 </div>
					</div>

					{/* Card Blender */}
					<div className="card yellow">
						 <div className="card-img">
										<img src="/image/ic_blend.png" alt="" />
						 </div>

						 <div className="card-text">
								<h2>Blender</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						 </div>
					</div>
				</div>
		</section>
	)
}