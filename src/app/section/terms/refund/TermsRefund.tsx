import React from 'react'
import {RiRefund2Fill} from 'react-icons/ri'
type Props = {}
import './termsRefud.scss'

export default function TermsRefund({}: Props) {
	return (
		<section id='container_refund'>
			<article className='refund-title'>
				<h2>Refund Policy <RiRefund2Fill/></h2>
				<p>I do not <u>issue refunds</u> based on your dissatisfaction after {`you've`} paid and approved of the model. <b>Giving me feedback is your responsibility.</b> I will ask permission frequently to move onto the next step of my workflow</p>
			</article>

			<div className="list">
				<div className="refund">
					<p>There is a <u>budget available at all times</u> for refund purposes</p>
				</div>
				<div className="refund">
					<p>A full refund will be issued by <b>cancellation on my part.</b></p>
				</div>
				<div className="refund">
					<p>If you choose to withdraw/cancel when <b>50% or more</b> of the <b> 3D model has been completed</b>, I reserve the right to keep a down-payment. This is half of the total price</p>
				</div>
				
			</div>
		</section>
	)
}