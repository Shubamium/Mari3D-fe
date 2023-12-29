'use client'
import React, { useState } from 'react'
import { FaInternetExplorer, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { socialList } from '../page'

type carouselProps = {
	images: string[],
	id:string,
	name:string,
	socials:{
		Type:socialList,
		Link:string
	}[]
}

function chunkArray<T,>(array:T[], chunkSize:number) {
	const result = [];
	for (let i = 0; i < array.length; i += chunkSize) {
			result.push(array.slice(i, i + chunkSize));
	}
	return result;
}
export default function Carousel({images,id,name,socials}: carouselProps) {

	const [activePage,setActivePage] = useState(0);
	const divided = chunkArray(images,2)
	const maxPage = divided.length - 1
	// const imgOne = divided[activePage][0] ?? '#'
	// const imgTwo = divided[activePage][1] ?? '#'
	return (
		<>
			<div className="detail">
							<div className="text">
								<h2>{name ?? 'Model Name'}</h2>
								<div className="subdetail">
									<div className="contacts">
										{socials && socials.map((social)=>{
											return <SocialDisplayer link={social.Link} type={social.Type} key={'social-list-'+social.Type}/>
										})}
									</div>
									<p className='model-id'>{id ?? '#ID-17-05-2024'}</p>
								</div>
							</div>
							<div className="carousel-ctrl">
								<div className="btn-arrow l " onClick={()=>setActivePage(Math.max(activePage - 1,0))}></div>
								<div className="btn-arrow r" onClick={()=>setActivePage(Math.min(activePage + 1,maxPage))}></div>
							</div>
						</div>
						<div className="carousel">
							<div className="carousel-img">
								<img src={divided[activePage] ? divided[activePage][0] ?? '' : ''} alt="" className='img l' />
								<img src={divided[activePage] ? divided[activePage][1] ?? '' : ''} alt=""  className='img r'/>
							</div>
							<div className="page-indicator">
								<p>Page {activePage+1}/{maxPage+1}</p>
								<div className='decor-edge'></div>
							</div>
						</div>
		</>
	)
}

const icon = {
	'twitch':<FaTwitch/>,
	'twitter':<FaTwitter/>,
	'tiktok':<FaTiktok/>,
	'youtube':<FaYoutube/>,
	'website':<FaInternetExplorer/>
}
function SocialDisplayer({type,link}:{type:socialList,link:string}) {
	return (
		<a href={link} target='_blank' className='contact-item'>{icon[type]}</a>
	)
}