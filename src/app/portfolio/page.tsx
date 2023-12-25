import React from 'react'
import PortfolioHeading from '../section/portfolio/heading/PortfolioHeading'
import PortfolioList from '../section/portfolio/list/PortfolioList'
import { fetchData, urlFor } from '@/db/client'

type Props = {

}


type portfolioSearch = {
	_id: string
	name: string
	cover: any
	slug:string
}[]
export default async function PortfolioPage({}: Props) {
	
	const query = `
	*[_type == 'portfolio'] {
		_id,
		name,
		cover,
		slug,
	}
	`
	const data = await fetchData<portfolioSearch>(query)
	
	// console.log(data)
	return (
		<main id='container_page_portfolio'>
			<PortfolioHeading/>
			<PortfolioList portfolios={data.map(({_id,name,slug,cover})=>({image:urlFor(cover).url(),name,slug}))}/>
		</main>
	)
}