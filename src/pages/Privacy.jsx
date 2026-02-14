import { useEffect } from 'react'

function Privacy() {
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
                        Privacy Policy
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

                    <Section n="1" title="Introduction">
                        <p>1.1 This Privacy Policy ("Policy") describes how Bullion Digital (BVI) Ltd ("Bullion BVI") and [FIU-IND Registered Partner Name] ("Indian Partner") (collectively, "we", "us", "our") collect, use, store, share, and protect your personal data when you use the gold.fi platform ("Platform").</p>
                        <p>1.2 This Policy is issued in compliance with the Digital Personal Data Protection Act, 2023 ("DPDPA"), the Information Technology Act, 2000 ("IT Act"), the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules"), and the Prevention of Money Laundering Act, 2002 ("PMLA").</p>
                        <p>1.3 By using the Platform, you consent to the collection and processing of your personal data as described in this Policy.</p>
                    </Section>

                    <Section n="2" title="Data Fiduciary Information">
                        <p>Under the DPDPA, the Data Fiduciary for the processing of your personal data is:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li><strong>For Platform operations:</strong> Bullion Digital (BVI) Ltd. Email: privacy@bulliondigital.com</li>
                            <li><strong>For KYC and regulatory compliance:</strong> [Indian Partner Name]</li>
                            <li><strong>Data Protection Officer:</strong> Email: dpo@bulliondigital.com</li>
                        </ul>
                    </Section>

                    <Section n="3" title="Personal Data We Collect">
                        <p><strong>3.1 Data You Provide</strong></p>
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-walnut-200">
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Category</th>
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Data Elements</th>
                                        <th className="text-left py-3 font-semibold text-walnut-700">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="text-walnut-600">
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Identity Data</td><td className="py-2.5 pr-4">Full name, DOB, gender, nationality, photograph</td><td className="py-2.5">KYC verification</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Government ID</td><td className="py-2.5 pr-4">PAN, Aadhaar, voter ID, passport</td><td className="py-2.5">PMLA compliance</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Contact Data</td><td className="py-2.5 pr-4">Email, mobile, address</td><td className="py-2.5">Communications</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Financial Data</td><td className="py-2.5 pr-4">Bank account, UPI ID</td><td className="py-2.5">Deposits & withdrawals</td></tr>
                                    <tr><td className="py-2.5 pr-4">Source of Funds</td><td className="py-2.5 pr-4">ITR, salary slips, bank statements</td><td className="py-2.5">Enhanced Due Diligence</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p><strong>3.2 Data We Collect Automatically</strong></p>
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-walnut-200">
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Category</th>
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Data Elements</th>
                                        <th className="text-left py-3 font-semibold text-walnut-700">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="text-walnut-600">
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Device Data</td><td className="py-2.5 pr-4">Device type, OS, unique ID, IP</td><td className="py-2.5">Security, fraud prevention</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Usage Data</td><td className="py-2.5 pr-4">Pages viewed, features used</td><td className="py-2.5">Analytics</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Location Data</td><td className="py-2.5 pr-4">Approximate geolocation (IP)</td><td className="py-2.5">Regulatory compliance</td></tr>
                                    <tr><td className="py-2.5 pr-4">Blockchain Data</td><td className="py-2.5 pr-4">Wallet addresses, tx hashes</td><td className="py-2.5">AML monitoring</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p><strong>3.3 Data from Third Parties:</strong> KYC verification providers, CKYCR data, blockchain analytics providers, payment service providers, and credit bureaus (where applicable).</p>
                    </Section>

                    <Section n="4" title="Purpose of Processing">
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-walnut-200">
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Purpose</th>
                                        <th className="text-left py-3 font-semibold text-walnut-700">Legal Basis</th>
                                    </tr>
                                </thead>
                                <tbody className="text-walnut-600">
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Account creation and KYC</td><td className="py-2.5">Legal obligation (PMLA); Consent (DPDPA)</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Transaction processing</td><td className="py-2.5">Contract performance; Legal obligation</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">AML/CFT monitoring</td><td className="py-2.5">Legal obligation (PMLA, IT Act)</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Tax compliance (TDS)</td><td className="py-2.5">Legal obligation (Income Tax Act)</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">FIU-IND reporting</td><td className="py-2.5">Legal obligation (PMLA)</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Customer support</td><td className="py-2.5">Legitimate interest; Consent</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Platform improvement</td><td className="py-2.5">Legitimate interest; Consent</td></tr>
                                    <tr><td className="py-2.5 pr-4">Marketing communications</td><td className="py-2.5">Consent (opt-in)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section n="5" title="Data Sharing and Transfers">
                        <p><strong>5.1</strong> Your personal data is shared between Bullion BVI and the Indian Partner under a data processing agreement.</p>
                        <p><strong>5.2 Third-Party Sharing:</strong> KYC providers (Persona/Onfido), blockchain analytics (Chainalysis), payment processors, card issuer partner, cloud infrastructure (AWS/GCP), FIU-IND, Income Tax Department, CKYCR, and law enforcement as legally required.</p>
                        <p><strong>5.3 Cross-Border Transfers:</strong> Data is transferred to the British Virgin Islands and may be processed on servers in the US, EU, and Singapore, in compliance with Section 16 of the DPDPA, 2023. Appropriate safeguards including encryption and contractual clauses are implemented.</p>
                    </Section>

                    <Section n="6" title="Data Retention">
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-walnut-200">
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Data Type</th>
                                        <th className="text-left py-3 pr-4 font-semibold text-walnut-700">Retention Period</th>
                                        <th className="text-left py-3 font-semibold text-walnut-700">Legal Basis</th>
                                    </tr>
                                </thead>
                                <tbody className="text-walnut-600">
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">KYC / Identity</td><td className="py-2.5 pr-4">5 years after account closure</td><td className="py-2.5">PMLA Rule 9</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Transaction Records</td><td className="py-2.5 pr-4">5 years after closure</td><td className="py-2.5">PMLA; IT Act</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Tax Records (TDS)</td><td className="py-2.5 pr-4">8 years from assessment year</td><td className="py-2.5">Income Tax Act</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Blockchain Data</td><td className="py-2.5 pr-4">Permanent (on-chain)</td><td className="py-2.5">Nature of blockchain</td></tr>
                                    <tr className="border-b border-walnut-100"><td className="py-2.5 pr-4">Communication Logs</td><td className="py-2.5 pr-4">3 years</td><td className="py-2.5">Customer service</td></tr>
                                    <tr><td className="py-2.5 pr-4">Usage / Analytics</td><td className="py-2.5 pr-4">2 years (anonymized after)</td><td className="py-2.5">Legitimate interest</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section n="7" title="Data Security">
                        <p>We implement reasonable security practices including:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>AES-256 encryption at rest</li>
                            <li>TLS 1.3 encryption in transit</li>
                            <li>Multi-factor authentication</li>
                            <li>Role-based access controls with audit logging</li>
                            <li>Regular vulnerability assessments and penetration testing</li>
                            <li>72-hour breach notification to affected users and authorities</li>
                            <li>ISO 27001-aligned information security management</li>
                        </ul>
                        <p className="mt-2 text-walnut-500 text-sm">No security system is impenetrable. We cannot guarantee the absolute security of your data.</p>
                    </Section>

                    <Section n="8" title="Your Rights">
                        <p>Under the DPDPA, 2023:</p>
                        <p><strong>8.1 Right to Access:</strong> Request a summary of your personal data and processing activities.</p>
                        <p><strong>8.2 Right to Correction:</strong> Request correction, completion, or updating of inaccurate data.</p>
                        <p><strong>8.3 Right to Erasure:</strong> Request erasure of data no longer necessary for its purpose, subject to legal retention obligations.</p>
                        <p><strong>8.4 Right to Withdraw Consent:</strong> Withdraw consent at any time. Note: withdrawing KYC consent will result in account suspension.</p>
                        <p><strong>8.5 Right to Nominate:</strong> Nominate another individual to exercise your rights in the event of death or incapacity.</p>
                        <p><strong>8.6 Right to Grievance Redressal:</strong> File complaints with us or the Data Protection Board of India.</p>
                        <p className="mt-2">To exercise your rights, contact: <strong>dpo@bulliondigital.com</strong>. We will respond within 30 days.</p>
                    </Section>

                    <Section n="9" title="Children's Data">
                        <p>The Platform is not intended for individuals under 18. We do not knowingly collect data from children. Contact dpo@bulliondigital.com if you believe a child has provided data to us.</p>
                    </Section>

                    <Section n="10" title="Cookies and Tracking">
                        <p>The Platform uses essential cookies for session management. Analytics cookies are deployed only with consent. The mobile app uses equivalent local storage. You may manage preferences in browser settings.</p>
                    </Section>

                    <Section n="11" title="Grievance Officer">
                        <div className="bg-walnut-100 rounded-xl p-5">
                            <p className="text-sm text-walnut-700"><strong>Email:</strong> grievance@bulliondigital.com</p>
                            <p className="text-sm text-walnut-600 mt-1">Complaints acknowledged within 48 hours, resolved within 30 days.</p>
                        </div>
                    </Section>

                    <Section n="12" title="Changes to This Policy">
                        <p>Material changes will be notified at least 15 days before becoming effective via email or in-app notification.</p>
                    </Section>

                    <Section n="13" title="Contact Us">
                        <p>Email: <strong>privacy@bulliondigital.com</strong></p>
                        <p>Data Protection Officer: <strong>dpo@bulliondigital.com</strong></p>
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

export default Privacy
