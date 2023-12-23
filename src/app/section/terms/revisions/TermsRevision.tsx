import React from 'react'
import './termsRevision.scss'
import { TbReload } from 'react-icons/tb'
type Props = {}

export default function TermsRevision({}: Props) {
	return (
		<section id="container_revision">
			<div className="heading">
				<div className="confine">
					<div className="part">
						<TbReload/> <h2>Revisions</h2>
					</div>
				</div>
			</div>
			<div className="list">
				<article className='tos'>
							<div className="tos-head">
								<h3>Threshold</h3>
								<div className="blocks">
									<div className="block"></div>
									<div className="block"></div>
									<div className="block"></div>
								</div>
							</div>
							<div className="tos-body">
								<p>I only do revisions up to a certain threshold, based on feedback from you. <b>Please make sure you know what you want.</b></p>
							</div>
					</article>
					<article className='tos'>
						<div className="tos-head">
							<h3>Accountability</h3>
							<div className="blocks">
								<div className="block"></div>
								<div className="block"></div>
								<div className="block"></div>
							</div>
						</div>
						<div className="tos-body">
							<p>I will {'"revise"'} or fix any errors directly caused by my personal error</p>
						</div>
					</article>

					<article className='tos'>
						<div className="tos-head">
							<h3>Revision Scale</h3>
							<div className="blocks">
								<div className="block"></div>
								<div className="block"></div>
								<div className="block"></div>
							</div>
						</div>
						<div className="tos-body">
							<p>If there is a rare situation where something needs to be majorly revised, 
I will ask for a fee that accurately represents time, skill and resources used.</p>
						</div>
					</article>

			</div>
		</section>
	)
}