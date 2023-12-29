'use client'
import React from 'react'
import './portfolioList.scss'
import { useRouter } from 'next/navigation'
import { FaArrowRight } from 'react-icons/fa'
type Props = {
	portfolios:{
		image:string,
		name:string,
		slug:string,
	}[]
}

export default function PortfolioList({portfolios}: Props) {
	return (
		<div className='portfolio_list'>
			{portfolios && portfolios.map(({image,name,slug},index)=>{
				return <PortfolioDisplayer key={index} name={name} image={image} slug={slug}/>
			})}
		</div>
	)
}


type portfolioDisplayerProps = {
	image:string;
	name:string;
	slug:string;
}
function PortfolioDisplayer({name,image,slug}:portfolioDisplayerProps){
	const route = useRouter()
	const changeRoute = ()=>{
		route.push(`/portfolio/${slug}`)
	}
	return (
		<div className='portfolio-item ' onClick={changeRoute}>
			<img src={image ?? "/image/placeholder_portfolio.png"} alt="" className='main-img' />
			<div className="top"></div>
			<div className="detail">
				<div className="title">
					<h2>{name ?? 'Model Name'}</h2>
					<p>View <FaArrowRight/></p>
				</div>
				<hr />
			</div>
		</div>
	)
}