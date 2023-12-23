import React from 'react'
import PriceHeading from '../section/prices/PriceHeading'
import PackageHeading from '../section/prices/packageHeading/PackageHeading'
import PackageList from '../section/prices/packageList/PackageList'
import Addons from '../section/prices/addons/Addons'
import PriceWarning from '../section/prices/priceWarning/PriceWarning'

type Props = {}

export default function PricePage({}: Props) {
	return (
		<main id="container_price">
			<PriceHeading/>
			<PackageHeading/>
			<PackageList/>
			<Addons/>
			<PriceWarning/>
		</main>
	)
}