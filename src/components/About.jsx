import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
    { value: '24K', label: 'Pure Swiss Gold', sub: 'Backed by Tether Gold (XAUT)', accent: 'from-gold-light to-gold' },
    { value: '0%', label: 'Custody Fees', sub: 'No premiums, no storage charges', accent: 'from-emerald-400 to-emerald-600' },
    { value: '₹10', label: 'Minimum Buy', sub: 'Start with as little as a chai', accent: 'from-gold to-gold-dark' },
    // { value: '4.3%', label: 'Avg. APY', sub: 'Earn yield on your gold holdings', accent: 'from-emerald-400 to-emerald-500' },
]

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="py-20 lg:py-24">
            <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mb-12 lg:mb-14"
                >
                    <motion.div 
                        className="w-10 h-[2px] bg-gold mb-8"
                        initial={{ width: 0, opacity: 0 }}
                        animate={isInView ? { width: 40, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-800 leading-[1.1] tracking-tight mb-6">
                        The <span className="gold-text">gold</span> account
                        <br />
                        for modern India.
                    </h2>
                    <motion.p 
                        className="text-lg sm:text-xl text-walnut-500 leading-relaxed max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Buy gold as easily as sending a UPI payment. Save and earn on gold, borrow against it, and get a card to spend against the value of your holdings.
                    </motion.p>
                </motion.div>

                {/* Metric cards — richer design */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" role="list">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative bg-white rounded-2xl p-4 sm:p-5 lg:p-7 border border-walnut-100 overflow-hidden group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                            role="listitem"
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Subtle top accent bar */}
                            <motion.div 
                                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${m.accent}`}
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                                style={{ transformOrigin: 'left' }}
                            />
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold gold-text-static mb-1.5">{m.value}</p>
                            <p className="text-sm font-semibold text-walnut-800 mb-1">{m.label}</p>
                            <p className="text-xs text-walnut-400 leading-relaxed">{m.sub}</p>
                            
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-gold/0 group-hover:to-gold/5 transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
