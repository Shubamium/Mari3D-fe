import React from 'react'
import FaqList from '../section/faq/list/FaqList'
import FaqHeading from '../section/faq/FaqHeading'
import { fetchData } from '@/db/client'

type Props = {}
export type faqData = {
  _id: string;
  section: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}[]


export default async function FaqPage({}: Props) {
	const query = `
	*[_type == 'faq'] {
		_id,
		section,
		questions[]{
			question,
			answer
		}
	}
	
	`
	const data = await fetchData<faqData>(query);
	return (
		<main id="container_page">
				<FaqHeading/>
				<FaqList data={data}/>
		</main>
	)
}