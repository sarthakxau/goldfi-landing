import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
    {
        number: 1,
        title: 'Download',
        description: 'Get the app from App Store or Google Play',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-dark">
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5" />
                <path d="M12 7v5m0 0l-2-2m2 2l2-2" />
            </svg>
        ),
    },
    {
        number: 2,
        title: 'Add money',
        description: 'Fund your account with UPI, cards, or bank transfer',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-dark">
                <rect x="2" y="6" width="20" height="13" rx="3" />
                <path d="M2 10h20" />
                <path d="M6 15h1" />
                <path d="M10 15h3" />
            </svg>
        ),
    },
    {
        number: 3,
        title: 'Buy gold',
        description: 'Own 24K Swiss gold in under 30 seconds',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-dark">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
]

function HowItWorks() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="py-16 sm:py-24 lg:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-8" ref={ref}>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-800 leading-[1.1] tracking-tight">
                        Get started in <span className="gold-text">3 taps</span>.
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 relative">
                    {/* Dashed connecting line — desktop only */}
                    <div
                        className="hidden lg:block absolute top-[72px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] border-t-2 border-dashed border-walnut-200"
                        aria-hidden="true"
                    />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.15 + i * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="relative flex justify-center"
                        >
                            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-walnut-100 hover:shadow-lg hover:shadow-walnut-100/50 transition-shadow duration-300 w-full max-w-sm text-center">
                                {/* Step number */}
                                <div className="flex justify-center mb-4">
                                    <span className="w-7 h-7 rounded-full bg-gold/10 text-gold text-xs font-bold flex items-center justify-center">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gold/[0.08] flex items-center justify-center mb-4 mx-auto">
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-display font-bold text-walnut-800 mb-2">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-walnut-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
