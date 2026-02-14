import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const features = [
    {
        stat: '0%',
        title: 'No custody premium',
        description: 'Buy and hold 24K gold with zero fees. Your gold is backed by Tether Gold (XAUT) and held in Swiss vaults.',
        visualDescription: 'Every gram is backed by physical gold in Swiss vaults. No premiums, no storage fees, no hidden costs.',
        visual: 'custody',
    },
    {
        stat: '3–5%',
        title: 'Returns on gold',
        description: 'Create wealth and grow your gold. Earn yield through DeFi strategies — Aave V3, Fluid, and more — all managed for you.',
        visualDescription: 'Deploy your gold into battle-tested DeFi protocols. Watch your holdings grow automatically while you sleep.',
        visual: 'yield',
    },
    {
        stat: '₹10',
        title: 'Buy with UPI',
        description: 'Start buying gold with as little as ₹10. Set up autopay for weekly or monthly recurring purchases.',
        visualDescription: 'Like buying chai, but better. Link your UPI, set autopay, and build your gold savings effortlessly.',
        visual: 'upi',
    },
    {
        stat: '→',
        title: 'Send gold instantly',
        description: 'To anyone in India, instantly. Send gold to friends and family — no bank account needed.',
        visualDescription: 'Transfer gold to anyone with just a phone number. No bank accounts, no paperwork, no waiting.',
        visual: 'send',
    },
    {
        stat: '◆',
        title: 'Spend with a card',
        description: 'Unlock the value of your gold. Get a virtual Visa card and spend against your gold balance anywhere.',
        visualDescription: 'Turn your gold into spending power. Use your Gold.fi Visa card anywhere Visa is accepted — online or offline.',
        visual: 'card',
    },
]

// Mini visualizations for each feature
function TetherGoldLogo({ size = 36 }) {
    return (
        <div
            className="rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0"
            style={{
                width: size,
                height: size,
                background: 'linear-gradient(135deg, #F2C94C 0%, #D4A93A 50%, #B8941F 100%)',
            }}
        >
            <div
                className="rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm"
                style={{ width: size * 0.75, height: size * 0.75 }}
            >
                <span className="text-white font-bold" style={{ fontSize: size * 0.35 }}>₮</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
        </div>
    )
}

function FeatureVisual({ type }) {
    if (type === 'custody') {
        return (
            <div className="flex items-center gap-3">
                <TetherGoldLogo size={40} />
                <div>
                    <p className="text-xs font-medium text-walnut-800">Tether Gold (XAUT)</p>
                    <p className="text-[10px] text-walnut-600">Swiss vaults · Zero fees</p>
                </div>
            </div>
        )
    }
    if (type === 'yield') {
        return (
            <div className="flex items-center gap-3">
                <div className="flex items-end gap-0.5 h-8">
                    {[40, 55, 45, 65, 60, 80, 75, 90].map((h, i) => (
                        <div key={i} className="w-2 rounded-sm bg-gradient-to-t from-gold/40 to-gold" style={{ height: `${h}%` }} />
                    ))}
                </div>
                <div className="inline-flex items-center bg-emerald-50 px-2 py-0.5 rounded-full">
                    <span className="text-[10px] font-semibold text-emerald-600">+4.3% APY</span>
                </div>
            </div>
        )
    }
    if (type === 'upi') {
        return (
            <div className="flex items-center gap-2">
                <div className="bg-walnut-100 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <span className="text-xs font-mono font-medium text-walnut-800">₹10</span>
                    <span className="text-[9px] text-walnut-400">min</span>
                </div>
                <svg className="w-4 h-4 text-walnut-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="bg-gold/10 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <span className="text-xs font-mono font-medium text-gold">0.001g</span>
                    <span className="text-[9px] text-walnut-400">gold</span>
                </div>
            </div>
        )
    }
    if (type === 'send') {
        return (
            <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center text-[10px] font-bold text-gold">A</div>
                <div className="flex-1 border-t border-dashed border-walnut-200 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-walnut-50 px-1">
                        <span className="text-[9px] text-walnut-400">62.2g</span>
                    </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center text-[10px] font-bold text-gold">P</div>
            </div>
        )
    }
    if (type === 'card') {
        return (
            <div className="bg-gradient-to-r from-gold-dark to-gold rounded-lg p-2.5 max-w-[160px]">
                <div className="flex items-center justify-between">
                    <span className="text-[7px] text-white/70 uppercase tracking-widest">gold.fi</span>
                    <span className="text-[8px] text-white/80 font-bold">VISA</span>
                </div>
                <p className="text-white font-mono text-[8px] mt-1.5 tracking-wider">•••• 3224</p>
            </div>
        )
    }
    return null
}

function Features() {
    const [active, setActive] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="features" className="pt-10 pb-20 lg:pt-14 lg:pb-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 lg:mb-16"
                >
                    <motion.div 
                        className="w-10 h-[2px] bg-gold mb-8"
                        initial={{ width: 0, opacity: 0 }}
                        animate={isInView ? { width: 40, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-800 tracking-tight">
                        Everything <span className="gold-text">gold</span><br />should be.
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Feature list — left */}
                    <div className="lg:col-span-3 divide-y divide-walnut-200/60">
                        {features.map((feature, index) => (
                            <div key={index}>
                                <motion.button
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.05 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    onClick={() => setActive(index)}
                                    className={`w-full text-left py-6 sm:py-7 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg ${
                                        active === index ? 'pl-2' : 'pl-0 hover:pl-2'
                                    }`}
                                    aria-expanded={active === index}
                                    aria-controls={`feature-visual-${index}`}
                                >
                                    <div className="sm:w-24 lg:w-28 flex-shrink-0">
                                        <span className={`text-2xl sm:text-3xl font-display font-medium leading-none transition-colors duration-300 ${
                                            active === index ? 'gold-text-static' : 'text-walnut-300 group-hover:text-walnut-400'
                                        }`}>
                                            {feature.stat}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-base sm:text-lg font-display font-semibold mb-1.5 transition-colors duration-300 ${
                                            active === index ? 'text-walnut-800' : 'text-walnut-600 group-hover:text-walnut-700'
                                        }`}>
                                            {feature.title}
                                        </h3>
                                        <AnimatePresence mode="wait">
                                            {active === index && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-sm text-walnut-500 leading-relaxed"
                                                >
                                                    {feature.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {/* Active indicator */}
                                    <motion.div 
                                        className={`hidden sm:block w-1 self-stretch rounded-full transition-colors duration-300 ${
                                            active === index ? 'bg-gold' : 'bg-transparent'
                                        }`}
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: active === index ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ transformOrigin: 'top' }}
                                    />
                                </motion.button>
                                
                                {/* Mobile visual - shown below active feature */}
                                <AnimatePresence>
                                    {active === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="lg:hidden mt-4 mb-6"
                                            id={`feature-visual-mobile-${index}`}
                                        >
                                            <div className="card-light p-6 rounded-2xl">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-3xl font-display font-bold gold-text-static">{feature.stat}</span>
                                                    <h3 className="text-lg font-display font-semibold text-walnut-800">{feature.title}</h3>
                                                </div>
                                                <p className="text-sm text-walnut-700 leading-relaxed mb-4">{feature.visualDescription}</p>
                                                <div className="pt-4 border-t border-walnut-100">
                                                    <FeatureVisual type={feature.visual} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Feature visual — right (desktop only) */}
                    <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
                        <div className="w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, scale: 0.96, y: 10, rotateY: -5 }}
                                    animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                                    exit={{ opacity: 0, scale: 0.96, y: -10, rotateY: 5 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="card-light p-8 sm:p-10"
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    id={`feature-visual-${active}`}
                                >
                                    <p className="text-5xl font-display font-bold gold-text-static mb-4">{features[active].stat}</p>
                                    <h3 className="text-xl font-display font-semibold text-walnut-800 mb-3">{features[active].title}</h3>
                                    <p className="text-sm text-walnut-500 leading-relaxed mb-6">{features[active].visualDescription}</p>
                                    <FeatureVisual type={features[active].visual} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
