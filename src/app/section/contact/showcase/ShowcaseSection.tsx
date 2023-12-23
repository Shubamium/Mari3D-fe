import React from 'react'
import './showcaseSection.scss'
type Props = {

}

export default function ShowcaseSection({}: Props) {
	return (
		<section id='container_showcase'>
			<div className="short">
				<div className="confine">
					<div className="title">
						<h2>Showcase</h2>
						<div className="arrows">
							<div className="arrow"></div>
							<div className="arrow"></div>
							<div className="arrow"></div>
						</div>
					</div>
				</div>

				<div className="video-list">
					<div className="video">
						<video src="/video/hero.mp4" autoPlay controls loop></video>
					</div>
					<div className="video">
						<video src="/video/hero.mp4" autoPlay controls loop></video>
					</div>
					<div className="video">
						<video src="/video/hero.mp4" autoPlay controls loop></video>
					</div>
					<div className="video">
						<video src="/video/hero.mp4" autoPlay controls loop></video>
					</div>
					<div className="video">
						<video src="/video/hero.mp4" autoPlay controls loop></video>
					</div>
					<div className="video">
						<video src="/video/hero.mp4" autoPlay controls loop></video>
					</div>
					<div className="video">
						<video src="/video/hero.mp4" autoPlay controls loop></video>
					</div>
				</div>
			</div>
			<div className="long">
				{/* <div className="confine">
					<div className="title">
						<h2>Showcase</h2>
						<div className="arrows">
							<div className="arrow"></div>
							<div className="arrow"></div>
							<div className="arrow"></div>
						</div>
					</div>
				</div> */}

				<div className="video-list">
					<div className="video youtube">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/AWocxbVD3CE?si=3xvG2YQnOGYT2VCk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" allowFullScreen={true}></iframe>
					</div>
					<div className="video youtube">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/AWocxbVD3CE?si=3xvG2YQnOGYT2VCk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" allowFullScreen={true}></iframe>
					</div>
					<div className="video youtube">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/AWocxbVD3CE?si=3xvG2YQnOGYT2VCk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" allowFullScreen={true}></iframe>
					</div>
					<div className="video youtube">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/AWocxbVD3CE?si=3xvG2YQnOGYT2VCk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" allowFullScreen={true}></iframe>
					</div>
					
				</div>
			</div>
		</section>
	)
}