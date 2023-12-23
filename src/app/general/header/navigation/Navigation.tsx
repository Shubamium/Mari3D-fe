'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './navigation.scss'
import { usePathname, useRouter } from 'next/navigation'
type Props = {}

export default function Navigation({}: Props) {

	const currentPath = usePathname();
	const isActive = (target:string) => currentPath === target ? 'active' : ''; 
	const has = (target:string) => currentPath.includes(target) ? 'active' : ''; 
	
	return (
		<nav className='navigation'>
				<Link className={`nav-link ${isActive('/')}`} href={'/'}>Home</Link>
				<Link className={`nav-link ${has('portfolio')}`} href={'/portfolio'}>Portfolio</Link>
				<Link className={`nav-link ${isActive('/prices')}`} href={'/prices'}>Prices</Link>
				<Link className={`nav-link ${isActive('/terms')}`} href={'/terms'}>Terms of Services</Link>
				<Link className={`nav-link ${isActive('/faq')}`} href={'/faq'}>FAQ</Link>
				<Link className={`nav-link ${isActive('/contact')}`} href={'/contact'}>Contact</Link>
		</nav>
	)
}