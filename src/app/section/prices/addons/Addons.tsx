import React from 'react'
import './addons.scss'
import SectionHeading from '@/app/general/heading/SectionHeading'
type Props = {}

export default function Addons({}: Props) {
	return (
		<section id="container_addons">
				<div className="optional">
					<SectionHeading title='Optional Addons' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
					<div className="addons-list">
						<div className="confine">
							<div className="row left">
								<div className="addon">
										<h2>Avatar Base {'(SFW)'}</h2>
										<div className="price"><p>€200</p></div>
								</div>
								<div className="addon">
										<h2>Facial Expressions using Alt Textures</h2>
										<div className="price"><p>€15</p></div>
								</div>
								
							</div>
							<div className="row right">
								<div className="addon">
											<h2>NSFW Detailing</h2>
											<div className="price"><p>€100</p></div>
									</div>
								<div className="addon">
										<h2>Alternative Outfits & Hairstyles</h2>
										<div className="price"><p>€300 - €800</p></div>
								</div>
								<div className="addon">
										<h2>Objects, pets or other accessories</h2>
										<div className="price"><p>€300 - €800</p></div>
								</div>	
							</div>
						</div>
					</div>
				</div>

				<div className="others">
					<SectionHeading title='Other Addons' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
					<div className="addons-list">
						<div className="confine">
							<div className="row left">
								<div className="addon">
										<h2>Tongue Physics</h2>
										<div className="price"><p>FREE</p></div>
								</div>
								<div className="addon">
										<h2>Thigh Physics</h2>
										<div className="price"><p>FREE</p></div>
								</div>
								<div className="addon">
										<h2>Butt Physics</h2>
										<div className="price"><p>FREE</p></div>
								</div>
							</div>
							<div className="row right">
							<div className="addon big">
									<h2>Commercial Use</h2>
									<div className="price"><p>+40%</p></div>
							</div>
							<div className="addon">
									<div className="detail">
										<h2>Facial Expressions using Alt Textures</h2>
										<p>Allowing the uploading of work in progress videos, gifs and images on my social media</p>
									</div>
									<div className="price minus"><p>-€100</p></div>
							</div>
							</div>
						</div>
					</div>
				</div>
		</section>
	)
}