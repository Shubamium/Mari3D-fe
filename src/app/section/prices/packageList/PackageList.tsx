import React, { ReactNode } from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
type Props = {}
import './packageList.scss'
import { FaTheaterMasks, FaSmile, FaAngry, FaRegSadCry, FaSadTear, FaSurprise, FaPlusCircle } from 'react-icons/fa'
import {BiSolidHappyBeaming} from 'react-icons/bi'
export default function PackageList({}: Props) {

	const packageOne : packageProps = {
		icon:'/image/pack_vr.png',
		package_name:'VRChat Avatar', 
		no: '001',
		description: <p>An avatar prepared for <b>VRChat</b> using <b>VRC SDK</b></p>,
		includes:[
			{
				head:'You’ll Receive:',
				description:'Fully Rigged & Textured 3D Model with Physics',
			},{
				head:'Available in these file formats:',
				description:'PSD, SAI, BLEND, FBX and Unity Package with VRC Prefab',
			},
			{
				head:'Functional FBT:',
				description:'A model made ready for full body tracking, but is not precisely fitted to the users body proportions.',
			},
		]
	
	}
	
	const packageTwo : packageProps = {
		icon:'/image/pack_vt.png',
		package_name:'VTubing Avatar', 
		no: '002',
		description: <p>An avatar made ready for streaming and/or other program like; <b>VNyan</b>, <b>VseeFace</b>, <b>Warudo</b> and so on.</p>,
		includes:[
			{
				head:'You’ll Receive:',
				description:'Fully Rigged & Textured 3D Model with Physics',
			},{
				head:'Available in these file formats:',
				description:'PSD, SAI, BLEND, FBX and Unity Package with VRM/VSF Prefab',
			},
			{
				head:'Functional FBT:',
				description:'A model made ready for full body tracking, but is not precisely fitted to the users body proportions.',
			},
			{
				head:'ARKit Blendshapes',
				description:'ARKit Blendshapes Face tracking capabilities using 52 Blendshapes and an Iphone',
			},
		]
	
	}
	return (
		<section id='container_package-list'>
				<div className="confine">
					<PackageDisplayer {...packageOne}/>
					<PackageDisplayer {...packageTwo}/>
				</div>
		</section>
	)
}

type packageProps = {
	icon:string;
	package_name:string; 
	no: string;
	description:ReactNode;
	includes:{
		head:string;
		description:string;
	}[]

}
function PackageDisplayer(pack:packageProps){
	return (
		<div className="package">
			<div className="package-head">
				<div className="package-head-container">
					<div className="icon">
						<img src={pack.icon} alt="" />
					</div>
					<div className="title">
						<p>Package #{pack.no}</p>
						<h2>{pack.package_name}</h2>
					</div>
					
				</div>
				<div className="arrows">
					<div className="arrow "></div>
					<div className="arrow y"></div>
					<div className="arrow g"></div>
				</div>
			</div>
			<div className="package-description">
				{pack.description}
			</div>
			<div className="package-include">
				
				{pack.includes.map(({head,description},index)=>{
					return (
						<div className="include" key={head+'index'}>
							<div className="icon">
								<IoIosCheckmarkCircle />
							</div>
							<div className="text">
								<h2 className='include-head'>{head}</h2>
								<p>{description}</p>
							</div>
						</div>
					)
				})}


			</div>

			<div className="expressions">
				<div className="expressions-head">
					<FaTheaterMasks/>
					<h3>Expressions:</h3>
				</div>
				<div className="list">
					<div className="row">
						<div className="emotion top">
							<div className="icon">
									<FaSmile/>
							</div>
							<div className="text">
								<h4>Joy</h4>
							</div>
						</div>
						<div className="emotion bottom">
							<div className="icon">
									<FaAngry/>
							</div>
							<div className="text">
								<h4>Angry</h4>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="emotion top">
							<div className="icon">
									<FaSadTear/>
							</div>
							<div className="text">
								<h4>Sorrow</h4>
							</div>
						</div>
						<div className="emotion bottom">
							<div className="icon">
								<BiSolidHappyBeaming />
							</div>
							<div className="text">
								<h4>Happy</h4>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="emotion top">
							<div className="icon">
									<FaSurprise/>
							</div>
							<div className="text">
								<h4>Surprised</h4>
							</div>
						</div>
						<div className="emotion bottom">
							<div className="icon">
									<FaPlusCircle/>
							</div>
							<div className="text">
								<h4>Extra</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

