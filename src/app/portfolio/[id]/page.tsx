import Button from '@/app/general/button/Button'
import React from 'react'
import { FaTwitch } from 'react-icons/fa'
import {RxTriangleLeft} from 'react-icons/rx'

import './portfolioPreview.scss'
import Link from 'next/link'
import Carousel from './carousel/Carousel'
type Props = {}

export default function PortfolioPreview({}: Props) {

	return (
		<main id='container_portfolio_preview'>

				<div className="confine">
					<div className="left">
							<div className="info">

								<div className="top">
									<Link className='btn-back' href={'/portfolio'}>
										Back <RxTriangleLeft/>
									</Link>
									<h2>MARI 3D - Portfolio Model M001</h2>	
								</div>

								<div className="bottom">
									{/* 02 Decor thingy */}
								</div>
							</div>
							<figure className='main-img'>
								<img src="/image/placeholder_port-preview.png" alt="" />
							</figure>
					</div>
					<div className="right">
						<Carousel images={['/image/placeholder_port-preview.png','/image/placeholder_port-preview.png','','/image/placeholder_port-preview.png','/image/placeholder_port-preview.png']}/>
					</div>
				</div>

		</main>
	)
}