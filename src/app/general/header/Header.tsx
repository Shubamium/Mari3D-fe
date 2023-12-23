import React from 'react'
import './header.scss'
import Link from 'next/link'
import Navigation from './navigation/Navigation'
type HeaderProps = {

}

export default function Header({}: HeaderProps) {
	return (
		<header id='header'>
			<div className="heading">
				<div className="decor_block">
					<div className="block one"></div>
					<div className="block two"></div>
					<div className="block three"></div>
				</div>
				<Navigation/>
			</div>
			<div className="decor">
				<svg width="1396" height="248" viewBox="0 0 1396 248" fill="none" xmlns="http://www.w3.org/2000/svg" id='decor_header'>
					<g id="Header Art">
						<path id="back_rect" d="M1255.33 123H343L419 198H1288L1255.33 123Z" fill="#EFEFEF"/>
						<g id="connection_top">
							<circle id="end" cx="9" cy="114" r="8" stroke="#51C156" strokeWidth="2"/>
							<path id="line_top" d="M17 114.5H201.25H385.5L454.5 183.5H677L579 85.5H248L163.5 1" stroke="black"/>
							<rect id="chip_r" x="110" y="111" width="72" height="7" rx="3.5" fill="#1F1F20"/>
							<rect id="chip_l" x="532" y="180" width="43" height="7" rx="3.5" fill="#1F1F20"/>
						</g>
						<g id="connection_start">
							<g id="top_line">
								<circle id="start_circle" cx="888" cy="114" r="8" stroke="#51C156" strokeWidth="2"/>
								<path id="start_top" d="M1396 177H1134L1054 113H896" stroke="black"/>
								<rect id="transistor" x="968" y="110" width="79" height="7" rx="3.5" fill="#1F1F20"/>
							</g>
							<g id="bottom_line">
								<path id="start_bottom" d="M1334 207H1146L1108 239H1056L990 169H854L910 239H950" stroke="black"/>
								<rect id="chip" x="897" y="163" width="71" height="11" rx="5.5" fill="#1F1F20"/>
								<circle id="top" cx="959" cy="239" r="8" stroke="#51C156" strokeWidth="2"/>
							</g>
						</g>
					</g>
				</svg>
			</div>
		</header>
	)
}