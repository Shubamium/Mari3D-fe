import Button from '@/app/general/button/Button'
import React from 'react'
import { FaTwitch } from 'react-icons/fa'
import {RxTriangleLeft} from 'react-icons/rx'

import './portfolioPreview.scss'
import Link from 'next/link'
import Carousel from './carousel/Carousel'
import { fetchData, urlFor } from '@/db/client'
import { redirect } from 'next/navigation'
type Props = {
	params:{
		id:string
	}
}

export type socialList = 'twitch' | 'twitter' | 'youtube' | 'website' | 'tiktok'

type portfolio = {
	_id: string
	name: string
	slug:string
	model_id:string,
	socials:{
		Type:socialList,
		Link:string
	}[]
	main:any
	image_list: any[]
}[]
export default async function PortfolioPreview({
	 params
}: Props) {
		
	const param = params.id 
	const query = `
	*[_type == 'portfolio' && slug == '${param}'] {
		_id,
		name,
		slug,
		socials,
		model_id,
		main,
		socials,
		image_list,
	}
	`
	const data = await fetchData<portfolio>(query)
	if(data.length === 0) {
		redirect('/')
		return
	}
	const modelData = data[0]
	return (
		<main id='container_portfolio_preview'>

				<div className="confine">
					<div className="left">
							<div className="info">

								<div className="top">
									<Link className='btn-back' href={'/portfolio'}>
										Back <RxTriangleLeft/>
									</Link>
									<h2>MARI 3D - Portfolio Model: {modelData.slug}</h2>	
								</div>

								<div className="bottom">
									{/* 02 Decor thingy */}
								</div>
							</div>
							<figure className='main-img'>
								<img src={modelData.main ? urlFor(modelData.main).url() : ''} alt="" />
							</figure>
					</div>
					<div className="right">
						<Carousel id={modelData.model_id} socials={modelData.socials} name={modelData.name}  images={ modelData.image_list.map((image:any)=> urlFor(image).url())}/>
					</div>
				</div>

		</main>
	)
}