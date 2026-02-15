import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function CTA() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="download" className="relative py-28 lg:py-36 overflow-hidden">
            {/* Grid pattern background */}
            <div className="absolute inset-0 grid-pattern opacity-40" />

            {/* Enhanced gold ambient glows */}
            <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gold/[0.06] rounded-full blur-[100px]"
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.06, 0.1, 0.06]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gold/[0.04] rounded-full blur-[80px]" />

            <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-xs font-semibold text-gold uppercase tracking-widest">Start Today</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-walnut-800 mb-5 tracking-tight leading-[1.1]">
                        Join the <span className="gold-text">gold</span> revolution.
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-walnut-500 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                        Buy gold with ₹10, earn yield, and build wealth the modern way.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <motion.a
                            href="https://app.gold.fi"
                            className="btn-gold inline-flex items-center gap-2.5 text-base sm:text-lg py-4 px-10 sm:px-12 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
                            aria-label="Open Gold.fi app to start investing in gold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Open App
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="#features"
                            className="btn-outline-gold inline-flex items-center gap-2 text-sm sm:text-base py-4 px-8 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.a>
                    </div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm text-walnut-400"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>No signup fees</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Start with ₹10</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Instant setup</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default CTA
