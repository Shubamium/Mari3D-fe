import React from 'react'
import TermsHeading from '../section/terms/heading/TermsHeading'
import TermsGeneral from '../section/terms/general/TermsGeneral'
import PaymentSection from '../section/terms/payment/PaymentSection'
import TermsRefund from '../section/terms/refund/TermsRefund'
import TermsRevision from '../section/terms/revisions/TermsRevision'
import TermsRight from '../section/terms/rights/TermsRight'
import TermsReject from '../section/terms/reject/TermsReject'

type Props = {}

export default function TermsPage({}: Props) {
	return (
		<main id='container_terms'>
			<TermsHeading/>
			<TermsGeneral/>
			<PaymentSection/>
			<TermsRefund/>
			<TermsRevision/>
			<TermsRight/>
			<TermsReject/>
		</main>
	)
}