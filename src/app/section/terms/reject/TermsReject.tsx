import React from 'react'
import { FaCopyright, FaWindowClose } from 'react-icons/fa'
import './termsReject.scss'
import { IoIosSad } from 'react-icons/io'
import {MdOutline18UpRating, MdOutlineNoAdultContent} from 'react-icons/md'
type Props = {}

export default function TermsReject({}: Props) {
	return (
		<section id='container_terms-reject'>
			<div className="heading">
					<div className="title">
						<FaWindowClose/> <h2>What I won’t Do</h2>
					</div>
			</div>
			<div className="list">
				<div className="reject">
					 <div className="icon">
						 <FaCopyright/>
					 </div>
					 <p>Copyrighted Models</p>
				</div>
				<div className="reject">
					 <div className="icon">
						 <IoIosSad/>
					 </div>
					 <p>Any incorporation of offensive content and/or hate speech</p>
				</div>
				<div className="reject">
					 <div className="icon">
						 <MdOutlineNoAdultContent />
					 </div>
					 <p>NSFW content outside of my realm of comfort</p>
				</div>
			</div>
		</section>
	)
}