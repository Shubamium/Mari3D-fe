'use client'
import React from 'react'
import './portfolioList.scss'
import { useRouter } from 'next/navigation'
type Props = {}

export default function PortfolioList({}: Props) {
	return (
		<div className='portfolio_list'>
			<PortfolioDisplayer/>
			<PortfolioDisplayer/>
			<PortfolioDisplayer/>
			<PortfolioDisplayer/>
			<PortfolioDisplayer/>
			<PortfolioDisplayer/>
			<PortfolioDisplayer/>
			<PortfolioDisplayer/>
		</div>
	)
}


type portfolioDisplayerProps = {

}
function PortfolioDisplayer({}:portfolioDisplayerProps){
	const route = useRouter()
	const changeRoute = ()=>{
		route.push('/portfolio/[id]')
	}
	return (
		<div className='portfolio-item' onClick={changeRoute}>
			<img src="/image/placeholder_portfolio.png" alt="" className='main-img' />
			<div className="top"></div>
			<div className="detail">
				<h2>Model Name</h2>
				<hr />
			</div>
		</div>
	)
}