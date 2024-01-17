import React from 'react'
import './packageHeading.scss'
import { FaPlay } from 'react-icons/fa'
type Props = {}

export default function PackageHeading({}: Props) {
	return (
		<div id='container_package-head'>
				<div className="banner">
					<img src="/image/banner.png" alt="" />
				</div>
				<div className="title">
					<article>
						<h2>Packages <FaPlay /> <FaPlay/> <FaPlay/></h2>
						<p>I offer a standard 3D Model Package to every client for who’m the  <b>quality is the priority</b>, Here You’ll find some information on what this package includes</p>
					</article>
					<figure>
						<img src="/image/placeholder_port-preview.png" alt="" />
						<img src="/image/placeholder_port-preview.png" alt="" />
						<img src="/image/placeholder_port-preview.png" alt="" />
					</figure>
				</div>
		</div>
	)
}