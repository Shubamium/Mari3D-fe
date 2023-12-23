import React, { ReactNode } from 'react'
import './button.scss'
import Link from 'next/link'

type buttonProps = {
	children?: ReactNode
	onClick?:() => void

	variant?: 'normal' | 'outlined' 
	to?:string
	newTab?:boolean
}

export default function Button({children,onClick,variant = 'normal', to = '#', newTab}: buttonProps) {
	return (
		<Link href={to} target={newTab ? '_blank' : ''} className={`btn ${variant}`} onClick={onClick}>
			{children}
		</Link>
	)
}