import { useEffect } from 'react'

function Terms() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <div className="min-h-screen bg-walnut-50">
            {/* Header */}
            <div className="dark-section py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-5 sm:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <a href="/" className="inline-flex items-center gap-2 text-sm text-walnut-400 hover:text-gold transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Gold.fi
                        </a>
                        <div className="inline-block bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            DRAFT
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-walnut-50 tracking-tight mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-walnut-400 font-light">
                        gold.fi Platform — India
                    </p>
                    <div className="flex gap-6 mt-6 text-sm text-walnut-500">
                        <span>Effective Date: TBD</span>
                        <span>Last Updated: TBD</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
                <div className="prose prose-walnut max-w-none legal-content">

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
                        <p className="text-sm font-semibold text-amber-800 uppercase tracking-wide mb-2">Important Risk Disclosure</p>
                        <p className="text-sm text-amber-700 leading-relaxed">
                            Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.
                            Virtual Digital Assets ("VDAs") including Tether Gold (XAU₮) are not legal tender, are not backed by the Government of India, and are subject to market volatility, technological risks, and regulatory uncertainty. You may lose some or all of your investment. The gold.fi platform is not a bank, financial institution, depository, or custodian within the meaning of any Indian statute.
                        </p>
                    </div>

                    <Section n="1" title="Introduction and Parties">
                        <p>1.1 These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", "your") and the following entities:</p>
                        <p><strong>Bullion Digital (BVI) Ltd</strong>, a company incorporated under the laws of the British Virgin Islands ("Bullion BVI" or "we" or "us"), which operates the gold.fi technology platform, including the mobile application and web interface;</p>
                        <p><strong>[FIU-IND Registered Partner Name]</strong>, a company incorporated under the laws of India, registered with the Financial Intelligence Unit – India ("FIU-IND") as a Reporting Entity under the Prevention of Money Laundering Act, 2002 ("PMLA"), which provides Virtual Digital Asset exchange and custody services in India ("Indian Partner").</p>
                        <p>1.2 The gold.fi platform ("Platform") enables Users in India to buy, sell, hold, and redeem digital gold backed by Tether Gold (XAU₮), a Virtual Digital Asset as defined under Section 2(47A) of the Income Tax Act, 1961, read with the Finance Act, 2022.</p>
                        <p>1.3 By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms, the <a href="/privacy">Privacy Policy</a>, and any additional terms referenced herein. If you do not agree, you must immediately cease using the Platform.</p>
                        <p>1.4 <strong>Contact Information:</strong> Bullion Digital (BVI) Ltd, [BVI Registered Address]. Email: support@bulliondigital.com. Indian Partner: [Partner Name], [Indian Address].</p>
                    </Section>

                    <Section n="2" title="Definitions">
                        <p>2.1 <strong>"Digital Gold"</strong> means a fractional interest in Tether Gold (XAU₮) tokens, which are Virtual Digital Assets representing ownership claims on physical gold held in custody by TG Commodities Limited, denominated in grams on the Platform.</p>
                        <p>2.2 <strong>"Virtual Digital Asset" or "VDA"</strong> has the meaning assigned under Section 2(47A) of the Income Tax Act, 1961.</p>
                        <p>2.3 <strong>"Scudo"</strong> means a unit of account used on the Platform to denominate a User's Digital Gold holdings, where 1 Scudo = [defined gold-equivalent weight]. Scudo is not legal tender, is not a regulated financial instrument, and has no independent value apart from its Digital Gold backing.</p>
                        <p>2.4 <strong>"Wallet"</strong> means the blockchain-based digital wallet associated with a User's account on the Platform, which stores the User's VDA holdings.</p>
                        <p>2.5 <strong>"Card"</strong> means the virtual or physical Visa prepaid card issued through a licensed card issuer partner, enabling Users to spend against their Digital Gold holdings.</p>
                        <p>2.6 <strong>"Yield Product"</strong> means the lending or staking feature that allows Users to earn returns on their Digital Gold holdings, subject to separate terms and risk disclosures.</p>
                    </Section>

                    <Section n="3" title="Eligibility">
                        <p>3.1 You must be at least 18 years of age and a resident of India to use the Platform.</p>
                        <p>3.2 You must possess a valid Permanent Account Number ("PAN") issued by the Income Tax Department of India.</p>
                        <p>3.3 You must not be a person or entity subject to sanctions under any applicable sanctions regime, including the United Nations Security Council Consolidated List, OFAC SDN List, or any list maintained by the Ministry of Home Affairs, Government of India.</p>
                        <p>3.4 You represent and warrant that you are not acting on behalf of any third party, and that all funds used on the Platform are from lawful sources.</p>
                    </Section>

                    <Section n="4" title="Account Registration and KYC">
                        <p>4.1 To use the Platform, you must create an account and complete Know Your Customer ("KYC") verification as required under the PMLA and rules thereunder. KYC is performed by or on behalf of the Indian Partner as the FIU-IND Reporting Entity.</p>
                        <p>4.2 You must provide accurate, current, and complete information, including: full legal name, date of birth, PAN, Aadhaar number (for e-KYC, subject to your consent), residential address with proof, photograph or selfie for liveness verification, and contact information.</p>
                        <p>4.3 We and/or the Indian Partner reserve the right to request Enhanced Due Diligence ("EDD") documentation including source of funds, source of wealth, income tax returns, or bank statements, at any time and without providing reasons.</p>
                        <p>4.4 Failure to complete KYC or respond to EDD requests within the timeframe specified may result in account suspension, transaction restrictions, or account closure.</p>
                        <p>4.5 The Indian Partner will upload your KYC information to the Central KYC Records Registry ("CKYCR") as required by RBI and SEBI directives.</p>
                    </Section>

                    <Section n="5" title="Platform Services">
                        <p><strong>5.1 Buy Digital Gold.</strong> Users may purchase Digital Gold using Indian Rupees (INR) through the Platform. Purchases are executed at the prevailing real-time market price of gold, inclusive of any applicable spread.</p>
                        <p><strong>5.2 Sell / Redeem Digital Gold.</strong> Users may sell their Digital Gold holdings for INR or, where available, redeem for physical gold through participating jewelers. Redemption is subject to minimum quantity requirements, delivery charges, making charges, and applicable taxes.</p>
                        <p><strong>5.3 Hold Digital Gold.</strong> Users may hold Digital Gold in their Wallet. Holdings are denominated in grams, INR, USD, and Scudo. The Platform displays live gold pricing sourced from international spot gold markets.</p>
                        <p><strong>5.4 Yield Product.</strong> <span className="text-red-600 font-semibold">RISK WARNING:</span> The Yield Product involves lending your Digital Gold to third-party borrowers or protocols. Returns are not guaranteed and are subject to counterparty risk, smart contract risk, and market risk. You may lose some or all of your Digital Gold deposited in the Yield Product.</p>
                        <p><strong>5.5 Card Services.</strong> Where available, Users may apply for a virtual or physical Visa card linked to their Digital Gold holdings. Card services may not be available in India pending receipt of applicable regulatory approvals.</p>
                    </Section>

                    <Section n="6" title="Fees and Taxes">
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-walnut-200">
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Fee Type</th>
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Description</th>
                                        <th className="text-left py-3 font-semibold text-walnut-700">Rate</th>
                                    </tr>
                                </thead>
                                <tbody className="text-walnut-600">
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Buy Spread</td><td className="py-2.5 pr-4">Markup on gold purchase price</td><td className="py-2.5">[X]%</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Sell Spread</td><td className="py-2.5 pr-4">Markdown on gold sale price</td><td className="py-2.5">[X]%</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Platform Fee</td><td className="py-2.5 pr-4">Service fee on transactions</td><td className="py-2.5">[X]%</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Withdrawal Fee</td><td className="py-2.5 pr-4">INR withdrawal to bank</td><td className="py-2.5">₹[X]</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Card Load Fee</td><td className="py-2.5 pr-4">Loading Digital Gold to card</td><td className="py-2.5">[X]%</td></tr>
                                    <tr><td className="py-2.5 pr-4">Physical Redemption</td><td className="py-2.5 pr-4">Delivery of physical gold</td><td className="py-2.5">Varies</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Tax Obligations (India):</strong> TDS at the rate of 1% is applicable on the transfer of VDAs under Section 194S. Gains are taxed at 30% under Section 115BBH. GST may apply to service fees. You are solely responsible for determining and fulfilling your tax obligations.</p>
                    </Section>

                    <Section n="7" title="Risk Disclosures">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
                            <p className="text-sm text-red-700 font-semibold mb-2">Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.</p>
                        </div>
                        <p><strong>7.1 Market Risk.</strong> The price of gold and VDAs fluctuates and may decline significantly. You may lose the entire value of your investment.</p>
                        <p><strong>7.2 Regulatory Risk.</strong> VDAs are not regulated by RBI, SEBI, or any other financial regulator in India. The regulatory environment is evolving and may change adversely.</p>
                        <p><strong>7.3 Counterparty Risk.</strong> Digital Gold is backed by Tether Gold (XAU₮) tokens issued by TG Commodities Limited. We do not guarantee the solvency or performance of TG Commodities Limited.</p>
                        <p><strong>7.4 Technology Risk.</strong> Blockchain transactions are irreversible. Loss of wallet credentials may result in permanent loss of Digital Gold.</p>
                        <p><strong>7.5 Custody Risk.</strong> The Platform is not a bank or depository and does not provide deposit insurance.</p>
                        <p><strong>7.6 Liquidity Risk.</strong> There is no guarantee that you will be able to sell or redeem your Digital Gold at any given time or at a favorable price.</p>
                        <p><strong>7.7 Yield Product Risk.</strong> Additional risks including counterparty default, smart contract failure, impermanent loss, and protocol-level exploits.</p>
                        <p><strong>7.8 FX Risk.</strong> Fluctuations in the INR/USD exchange rate affect the INR value of your holdings.</p>
                    </Section>

                    <Section n="8" title="Prohibited Activities">
                        <p>You shall not: use the Platform for money laundering, terrorist financing, or any activity prohibited under the PMLA; provide false KYC information; circumvent foreign exchange controls under FEMA; use automated bots or scrapers; reverse-engineer Platform software; engage in wash trading or market manipulation; transfer your account to any third party; or use the Platform on behalf of any minor.</p>
                    </Section>

                    <Section n="9" title="Intellectual Property">
                        <p>9.1 The Platform, including its source code, design, branding (including the "gold.fi" trademarks), and all related intellectual property, is owned by Bullion Digital Corp (Ontario, Canada) and licensed to Bullion BVI. No right, title, or interest is transferred to you.</p>
                    </Section>

                    <Section n="10" title="Disclaimers and Limitation of Liability">
                        <p className="uppercase text-xs tracking-wide text-walnut-500 leading-relaxed">
                            The Platform is provided "as is" and "as available." Bullion BVI, the Indian Partner, and their affiliates disclaim all warranties, express or implied. To the maximum extent permitted by law, neither Bullion BVI nor the Indian Partner shall be liable for any indirect, incidental, special, consequential, or punitive damages. Aggregate liability shall not exceed the total fees paid by you in the twelve (12) months preceding the event giving rise to the claim.
                        </p>
                    </Section>

                    <Section n="11" title="Indemnification">
                        <p>You agree to indemnify, defend, and hold harmless Bullion BVI, the Indian Partner, and their respective directors, officers, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses arising from your use of the Platform, your breach of these Terms, or your violation of any applicable law.</p>
                    </Section>

                    <Section n="12" title="Dispute Resolution">
                        <p><strong>12.1 Governing Law:</strong> Laws of India (for Indian Partner obligations) and laws of the British Virgin Islands (for Bullion BVI obligations).</p>
                        <p><strong>12.2 Grievance Redressal:</strong> Contact the Grievance Officer at grievance@bulliondigital.com. 48 hours acknowledgment; 30 days resolution.</p>
                        <p><strong>12.3 Arbitration:</strong> Under the Arbitration and Conciliation Act, 1996. Seat: Mumbai, India. Language: English. Sole arbitrator.</p>
                    </Section>

                    <Section n="13" title="Suspension and Termination">
                        <p>We may suspend or terminate your account for breach, legal requirement, suspected fraud, KYC failure, or with 30 days' notice. Upon termination, you must withdraw holdings within 30 days.</p>
                    </Section>

                    <Section n="14" title="Regulatory Status">
                        <p>Bullion BVI is not registered with any Indian regulatory body and does not directly provide financial services in India. The Indian Partner is registered with FIU-IND. Neither entity is a bank, NBFC, payment system operator, depository, or custodian under any Indian statute.</p>
                    </Section>

                    <Section n="15" title="Advertising Disclaimer (ASCI Compliance)">
                        <div className="bg-walnut-100 rounded-xl p-5">
                            <p className="text-sm text-walnut-600">Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. This disclaimer is made pursuant to ASCI guidelines for Virtual Digital Assets, effective 1 April 2022.</p>
                        </div>
                    </Section>

                    <Section n="16" title="Modifications">
                        <p>We may modify these Terms at any time. Material changes will be notified at least 15 days before becoming effective. Continued use constitutes acceptance.</p>
                    </Section>

                    <Section n="17" title="Miscellaneous">
                        <p>These Terms, together with the Privacy Policy and any other terms referenced herein, constitute the entire agreement. If any provision is held invalid, the remaining provisions continue. Failure to enforce any right is not a waiver. You may not assign your rights. These Terms are provided in English.</p>
                    </Section>

                </div>
            </div>

            {/* Footer */}
            <div className="dark-section py-8 border-t border-walnut-800/60">
                <div className="max-w-4xl mx-auto px-5 sm:px-8 flex items-center justify-between">
                    <a href="/" className="flex items-center">
                        <img src="/goldfi-logo-light.svg" alt="Gold.fi" className="h-5" />
                    </a>
                    <p className="text-sm text-walnut-600">&copy; {new Date().getFullYear()} gold.fi</p>
                </div>
            </div>
        </div>
    )
}

function Section({ n, title, children }) {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-display font-bold text-walnut-800 mb-4 tracking-tight">
                {n}. {title}
            </h2>
            <div className="space-y-3 text-walnut-600 leading-relaxed text-[15px]">
                {children}
            </div>
        </div>
    )
}

export default Terms
