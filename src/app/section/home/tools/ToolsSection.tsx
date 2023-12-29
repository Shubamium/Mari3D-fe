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
					<div className="card blue shadow-flat">
						<svg width="25" height="160" viewBox="0 0 25 160" className='decor-left' fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.796875 33.7354L20 33.7354L24.4934 9.49335L0.796874 0.5L0.796875 33.7354Z" fill="#FFE16D"/>
							<path d="M0.796815 160L24.7968 140.997L24.7968 74.4875L0.796383 74.4875L0.796815 160Z" fill="#72AAFF"/>
							<path d="M1 67.782L24.6965 67.782L19.5 39.9999L0.999999 39.9999L1 67.782Z" fill="#94DC64"/>
						</svg>

						 <div className="card-img">
										<img src="/image/ic_photo.png" alt="" />
						 </div>

						 <div className="card-text">
								<h2>Adobe Photoshop</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						 </div>
					</div>

					{/* Card SAI */}
					<div className="card shadow-flat">

							<svg width="25" height="160" viewBox="0 0 25 160" className='decor-left' fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.796875 33.7354L20 33.7354L24.4934 9.49335L0.796874 0.5L0.796875 33.7354Z" fill="#FFE16D"/>
								<path d="M0.796815 160L24.7968 140.997L24.7968 74.4875L0.796383 74.4875L0.796815 160Z" fill="#72AAFF"/>
								<path d="M1 67.782L24.6965 67.782L19.5 39.9999L0.999999 39.9999L1 67.782Z" fill="#94DC64"/>
							</svg>

						 <div className="card-img">
								<img src="/image/ic_sai.png" alt="" />
						 </div>

						 <div className="card-text">
								<h2>Paint Tool SAI</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						 </div>
					</div>

					{/* Card Blender */}
					<div className="card yellow shadow-flat">

						<svg width="25" height="160" viewBox="0 0 25 160" className='decor-left' fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.796875 33.7354L20 33.7354L24.4934 9.49335L0.796874 0.5L0.796875 33.7354Z" fill="#FFE16D"/>
								<path d="M0.796815 160L24.7968 140.997L24.7968 74.4875L0.796383 74.4875L0.796815 160Z" fill="#72AAFF"/>
								<path d="M1 67.782L24.6965 67.782L19.5 39.9999L0.999999 39.9999L1 67.782Z" fill="#94DC64"/>
							</svg>

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