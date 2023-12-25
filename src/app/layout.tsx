import type { Metadata } from 'next'
import { Oxanium } from 'next/font/google'
import './globals.scss'
import Header from './general/header/Header'
import { CSSProperties } from 'react'
import Footer from './general/footer/Footer'

const oxanium = Oxanium({ subsets: ['latin'] })


const title = "Mari 3D"

const description = `
Hello! My name is Mari, i am a 3D artist that specializes in creating 1:1 3D models for Vtubers and Co! I also work on face tracking, emotes, shader effects and more!
Check out my work, and maybe i'll see your application soon? 
`
const banner = 'https://i.ibb.co/mqQy6KC/mari-r-twitter-banner.png'

export const metadata: Metadata = {
	title: title,
	description: description,

	metadataBase: new URL('https://mari3d.com'),

	openGraph:{
		url:'https://mari3d.com',
		title:title,
		description:description,
		authors:"shubamium",
		images:[
			banner
		]
	},
		twitter:{
		title:title,
		card:'summary_large_image',
		images:[
			banner
		]
	},
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oxanium.className} style={{'--fontMain':oxanium.style} as CSSProperties}>
				<Header/>
				{children}
				<Footer/>
			</body>
    </html>
  )
}
