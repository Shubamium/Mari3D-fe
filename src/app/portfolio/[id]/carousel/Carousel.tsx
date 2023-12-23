'use client'
import React, { useState } from 'react'
import { FaTwitch } from 'react-icons/fa'

type carouselProps = {
	images: string[]
}

function chunkArray<T,>(array:T[], chunkSize:number) {
	const result = [];
	for (let i = 0; i < array.length; i += chunkSize) {
			result.push(array.slice(i, i + chunkSize));
	}
	return result;
}
export default function Carousel({images}: carouselProps) {

	const [activePage,setActivePage] = useState(0);
	const divided = chunkArray(images,2)
	const maxPage = divided.length - 1
	const imgOne = divided[activePage][0] ?? '#'
	const imgTwo = divided[activePage][1] ?? '#'
	return (
		<>
			<div className="detail">
							<div className="text">
								<h2>Model Name</h2>
								<div className="subdetail">
									<div className="contacts">
										<a href="#" target='_blank' className='contact-item'><FaTwitch/></a>
										<a href="#" target='_blank' className='contact-item'><FaTwitch/></a>
										<a href="#" target='_blank' className='contact-item'><FaTwitch/></a>
									</div>
									<p className='model-id'>#ID-17-05-2024</p>
								</div>
							</div>
							<div className="carousel-ctrl">
								<div className="btn-arrow l " onClick={()=>setActivePage(Math.max(activePage - 1,0))}></div>
								<div className="btn-arrow r" onClick={()=>setActivePage(Math.min(activePage + 1,maxPage))}></div>
							</div>
						</div>
						<div className="carousel">
							<div className="carousel-img">
								<img src={imgOne} alt="" className='img l' />
								<img src={imgTwo} alt=""  className='img r'/>
							</div>
							<div className="page-indicator">
								<p>Page {activePage+1}/{maxPage+1}</p>
							</div>
						</div>
		</>
	)
}