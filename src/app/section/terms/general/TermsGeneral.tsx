import React from 'react'
import './termsGeneral.scss'
type Props = {}

export default function TermsGeneral({}: Props) {
	return (
		<section id="terms-general">
				<div className="confine">
					<aside>
						<h2>General</h2>
					</aside>
					<div className="general-list">
						<article className='tos'>
							<div className="tos-head">
								<h3>Compability</h3>
								<div className="blocks">
									<div className="block"></div>
									<div className="block"></div>
									<div className="block"></div>
								</div>
							</div>
							<div className="tos-body">
								<p>My models will work fine for <b>VRChat</b> or any app or program using <b>VSF</b> and/or <b>VRM</b> files. For other formats <u>I cannot guarantee this</u> and cannot be held responsible for issues.</p>
							</div>
						</article>

						<article className='tos'>
							<div className="tos-head">
								<h3>Model Proportions</h3>
								<div className="blocks">
									<div className="block"></div>
									<div className="block"></div>
									<div className="block"></div>
								</div>
							</div>
							<div className="tos-body">
								<p>All humanoid 3D models are <b>full-body ready</b>, however they might not fit your exact body proportions due to differences in limb length or other factors. I cannot be responsible for ill matching models because i base the 3D model of of the given reference. Please make sure to give your reference accurate proportions to better accommodate FBT.</p>
							</div>
						</article>
					</div>
			</div>
		</section>
	)
}