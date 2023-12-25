'use client'
import React, { useEffect, useState } from 'react'
import './faqList.scss'
import { FaPlus } from 'react-icons/fa'
import { faqData } from '@/app/faq/page'

type Props = {
	data:faqData
}

export default function FaqList({data}: Props) {

	const [activeSection,setActiveSection] = useState<string>(data[0].section)

	const activeSectionQuestions = data.find((section)=>section.section === activeSection)?.questions ?? []
	return (
		<section id='container_faq-list'>
			<div className="confine">
				<aside>
					<h2 className='title'>FAQ</h2>
					<nav>
						{data && data.map((section,index)=>{
							return <button className={`faq-btn ${activeSection === section.section ? 'active' : ''}`} key={index+section.section} onClick={()=>{setActiveSection(section.section)}}>{section.section}</button>
						})}
					</nav>

					<div className="decor">
						<div className="arrows">
							<div className="arrow"></div>
							<div className="arrow"></div>
							<div className="arrow"></div>
						</div>

						<div className="edge"></div>
					</div>
				</aside>
				<div className="faq-list">
						{activeSectionQuestions.length > 0 && activeSectionQuestions.map((question,index)=>{
							return <FaqItem answer={question.answer} question={question.question} key={'faq-item-'+index+activeSection}/>
						})}
				</div>
			</div>
		</section>
	)
}

type faqItemProps = {
	question:string,
	answer:string
}
function FaqItem(props:faqItemProps){

	const [isActive, setIsActive] = useState(false)
	useEffect(()=>{
		setIsActive(false)
	},[props])
	return <div className={`faq ${isActive ? 'active' : ''}`} onClick={()=>{setIsActive(isActive => !isActive)}}>
			<div className="faq-head">
				<h2 className='questions'>{props.question}</h2>
				<FaPlus/>
			</div>
			<div className="faq-body">
				<div className="title">
					<h3>Answers</h3>
					<div className="arrows">
						<div className="arrow"></div>
						<div className="arrow"></div>
						<div className="arrow"></div>
					</div>
				</div>
				<p>{props.answer}</p>
			</div>
		</div>
}