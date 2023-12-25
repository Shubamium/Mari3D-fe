import React from 'react'
import './paymentSection.scss'
type Props = {}

export default function PaymentSection({}: Props) {
	return (
		<section id="container_payment">
			<div className="confine">
				<div className="left">
					<div className='head'>
						<h2>
							<span>P</span>
							<span>A</span>
							<span>Y</span>
							<span>M</span>
							<span>E</span>
							<span>N</span>
							<span>T</span>
						</h2>
					</div>
					<div className="body">
						<img src="/image/payment_option.png" alt="" />
						<p>Payment is done via <br /><b>VGEN</b> or <b>Paypal</b></p>
					</div>
				</div>

				<div className="right">
					<article className='payment'>
						<h2>Other Payments</h2>
						<p>I do not issue payments via <b>{'"friend and family"'}</b> or any similar method.</p>		
					</article>
					<article className='payment'>
						<h2>Down Payment</h2>
						<p>Before starting, <u>at least a 50% down payment needs to be paid</u> for! The final payment must be done before I send over the full model files to you.</p>		
					</article>
					<article className='payment full'>
						<h2>Payment Refusal</h2>
						<p>Blatant refusal to pay me for my services or charge back issued with or without warning will result in a <b> blacklisting</b>. I will also be within my right to use, re-use and sell parts of the model to replace any damage done.</p>		
					</article>
				</div>
			</div>

			<div className="decor">
				<img src="decor/side_l.png" alt="" />
				<img src="decor/side_r.png" alt="" />
			</div>
		</section>
	)
}