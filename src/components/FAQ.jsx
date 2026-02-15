import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const faqs = [
    {
        question: 'What is gold.fi?',
        answer: 'gold.fi is a self-custody gold platform that lets you buy, hold, earn yield on, borrow against, send, and spend 24K gold — all with zero custody fees. Your gold is backed by Tether Gold (XAUT), held in Swiss vaults.',
    },
    {
        question: 'How do I buy gold?',
        answer: 'You can buy gold with as little as ₹10 using UPI. Simply download the app, create an account, and start purchasing gold instantly. You can also set up autopay for recurring purchases.',
    },
    {
        question: 'Are there any fees?',
        answer: 'No custody fees, no storage charges, and no premiums. gold.fi charges zero fees for holding gold. You only pay network fees when buying or redeeming, which are minimal.',
    },
    {
        question: 'How does earning yield work?',
        answer: 'You can deploy your gold into DeFi yield strategies like Aave V3, Fluid, and Morpho. These strategies earn you 3–5% APY on average. Your gold remains safe and you can withdraw anytime.',
    },
    {
        question: 'Can I redeem physical gold?',
        answer: 'Yes! You can redeem your digital gold for physical gold through our partner jewelers across India. The process is simple and you receive 24K gold bars or coins.',
    },
    {
        question: 'Is my gold safe?',
        answer: 'Absolutely. Your gold is held in Swiss vaults by Tether, the world\'s largest digital asset issuer. You maintain self-custody of your assets, meaning you control your private keys.',
    },
    {
        question: 'What is Tether Gold (XAUT)?',
        answer: 'Tether Gold (XAUT) is a digital asset backed by physical gold held in Swiss vaults. Each XAUT token represents 1 troy ounce of fine gold. It\'s audited regularly and fully backed.',
    },
    {
        question: 'Can I send gold to others?',
        answer: 'Yes! You can send gold to anyone in India instantly, even if they don\'t have a bank account. They just need a phone number to receive the gold in their Gold.fi wallet.',
    },
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <motion.div 
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[100px]"
                animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.02, 0.04, 0.02]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative max-w-4xl mx-auto px-5 sm:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <motion.div 
                        className="w-10 h-[2px] bg-gold mx-auto mb-8"
                        initial={{ width: 0, opacity: 0 }}
                        animate={isInView ? { width: 40, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-800 tracking-tight mb-4">
                        Frequently asked <span className="gold-text">questions</span>.
                    </h2>
                    <motion.p 
                        className="text-lg text-walnut-500 max-w-xl mx-auto font-light"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Everything you need to know about gold.fi
                    </motion.p>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="card-light overflow-hidden"
                        >
                            <motion.button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-white rounded-3xl"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <h3 className="text-base sm:text-lg font-display font-semibold text-walnut-800 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    <motion.svg
                                        className="w-5 h-5 text-gold"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </div>
                            </motion.button>
                            <motion.div
                                id={`faq-answer-${index}`}
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                    <p className="text-sm sm:text-base text-walnut-500 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-walnut-500 mb-4">
                        Still have questions?
                    </p>
                    <a
                        href="https://app.gold.fi"
                        className="btn-outline-gold inline-flex items-center gap-2 text-sm py-3 px-7 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
                        aria-label="Contact support or visit app"
                    >
                        Get in touch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div> */}
            </div>
        </section>
    )
}

export default FAQ
