import React from 'react'
import './showcaseSection.scss'
import { fetchData, urlFor } from '@/db/client'

import { buildFileUrl} from '@sanity/asset-utils'
type Props = {

}

type ShowcaseData = {
  _id: string;
  preset: string;
  video_list: Array<{
    title: string;
    video: any;
  }>;
  youtube_list: Array<{
    title: string;
    video_id: string;
  }>;
}[]
export default async function ShowcaseSection({}: Props) {

	const query = `
	*[_type == 'showcase' && preset == 'main'] {
		_id,
		preset,
		video_list[]{
			title,
			"video":video.asset->url
		},
		youtube_list[]{
			title,
			video_id
		}
	}
	`

	const data = await fetchData<ShowcaseData>(query);
	const showcaseData = data[0]
	
	return (
		<section id='container_showcase'>
			<div className="short">
				<div className="confine">
					<div className="title">
						<h2>Showcase</h2>
						<div className="arrows">
							<div className="arrow"></div>
							<div className="arrow"></div>
							<div className="arrow"></div>
						</div>
					</div>
				</div>

				<div className="video-list">
					{showcaseData.video_list.length > 0 && showcaseData.video_list.map((video,index)=>{
							return <div className="video" key={'video-short'+index}>
							<video src={video.video} autoPlay controls loop></video>
						</div>
					})}
				</div>
			</div>
			<div className="long">
				{/* <div className="confine">
					<div className="title">
						<h2>Showcase</h2>
						<div className="arrows">
							<div className="arrow"></div>
							<div className="arrow"></div>
							<div className="arrow"></div>
						</div>
					</div>
				</div> */}

				<div className="video-list">
	
					{
						showcaseData.youtube_list.length > 0 && showcaseData.youtube_list.map((yt,index)=>{
							return 	<div className="video youtube" key={'video-long'+index}>
							<iframe width="560" height="315" src={`https://www.youtube.com/embed/${yt.video_id}`} title={yt.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" allowFullScreen={true}></iframe>
						</div>
						})
					}
				</div>
			</div>
		</section>
	)
}