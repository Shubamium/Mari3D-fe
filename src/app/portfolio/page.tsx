import React from 'react'
import PortfolioHeading from '../section/portfolio/heading/PortfolioHeading'
import PortfolioList from '../section/portfolio/list/PortfolioList'

type Props = {

}

export default function PortfolioPage({}: Props) {
	return (
		<main id='container_page_portfolio'>
			<PortfolioHeading/>
			<PortfolioList/>
		</main>
	)
}