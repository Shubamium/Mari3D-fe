import React from 'react'
import './spinner.scss'
type Props = {}

export default function Spinner({}: Props) {
	return (
		<div className="spinner">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}