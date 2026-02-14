import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const timeframes = [
    { label: '5Y', years: 5 },
    { label: '10Y', years: 10 },
]

// Simplified data points for the chart
const getDataPoints = (years) => {
    const points = []
    const startGold = 100000
    const startINR = 100000
    const goldMultiplier = years === 5 ? 1.58 : years === 10 ? 2.16 : 1.95
    const inrMultiplier = years === 5 ? 0.85 : years === 10 ? 0.67 : 0.72
    
    for (let i = 0; i <= 20; i++) {
        const progress = i / 20
        const goldValue = startGold + (startGold * goldMultiplier - startGold) * progress
        const inrValue = startINR - (startINR - startINR * inrMultiplier) * progress
        points.push({ x: i, gold: goldValue, inr: inrValue })
    }
    return points
}

function GoldVsINR() {
    const [selectedTimeframe, setSelectedTimeframe] = useState(1) // Default to 10Y
    const [animatedProgress, setAnimatedProgress] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const dataPoints = getDataPoints(timeframes[selectedTimeframe].years)
    const finalGold = dataPoints[dataPoints.length - 1].gold
    const finalINR = dataPoints[dataPoints.length - 1].inr
    const goldGain = ((finalGold - 100000) / 100000) * 100
    const inrLoss = ((100000 - finalINR) / 100000) * 100

    useEffect(() => {
        if (!isInView) return
        const duration = 2000
        const startTime = performance.now()
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setAnimatedProgress(eased)
            
            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }
        requestAnimationFrame(animate)
    }, [isInView, selectedTimeframe])

    const visiblePoints = dataPoints.slice(0, Math.floor(dataPoints.length * animatedProgress) + 1)

    return (
        <section className="py-20 lg:py-28 dark-section relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
            <div className="relative max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
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
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-50 tracking-tight mb-4">
                        <span className="gold-text">Gold</span> vs INR.
                    </h2>
                    <p className="text-lg text-walnut-300 max-w-2xl font-light">
                        See how ₹1,00,000 invested in 2015 would have performed.
                    </p>
                </motion.div>

                {/* Timeframe Toggle */}
                <div className="flex items-center gap-3 mb-8">
                    {timeframes.map((tf, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setSelectedTimeframe(i)
                                setAnimatedProgress(0)
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent ${
                                selectedTimeframe === i
                                    ? 'bg-gold/20 text-gold border border-gold/40'
                                    : 'bg-walnut-800/50 text-walnut-400 border border-walnut-700/30 hover:border-walnut-600/50'
                            }`}
                        >
                            {tf.label}
                        </button>
                    ))}
                </div>

                {/* Chart Container */}
                <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl">
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                        {/* Chart Area */}
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#D4A93A" stopOpacity="0.1" />
                                </linearGradient>
                                <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#D4A93A" />
                                    <stop offset="100%" stopColor="#FDE68A" />
                                </linearGradient>
                            </defs>

                            {/* Grid lines */}
                            {[20, 40, 60, 80, 100].map((y) => (
                                <line
                                    key={y}
                                    x1="0"
                                    y1={y}
                                    x2="100"
                                    y2={y}
                                    stroke="rgba(255,255,255,0.05)"
                                    strokeWidth="0.5"
                                />
                            ))}

                            {/* INR Line Area */}
                            {visiblePoints.length > 1 && (
                                <motion.path
                                    d={`M ${visiblePoints.map((p, i) => `${(p.x / 20) * 100},${100 - ((p.inr / 100000) * 50)}`).join(' L ')}`}
                                    fill="rgba(150, 150, 150, 0.1)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}

                            {/* Gold Line Area */}
                            {visiblePoints.length > 1 && (
                                <>
                                    <motion.path
                                        d={`M ${visiblePoints.map((p, i) => `${(p.x / 20) * 100},${100 - ((p.gold / 100000) * 50)}`).join(' L ')} L ${(visiblePoints[visiblePoints.length - 1].x / 20) * 100},100 L 0,100 Z`}
                                        fill="url(#goldGradient)"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.path
                                        d={`M ${visiblePoints.map((p, i) => `${(p.x / 20) * 100},${100 - ((p.gold / 100000) * 50)}`).join(' L ')}`}
                                        fill="none"
                                        stroke="url(#goldStroke)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                </>
                            )}

                            {/* INR Line */}
                            {visiblePoints.length > 1 && (
                                <motion.path
                                    d={`M ${visiblePoints.map((p, i) => `${(p.x / 20) * 100},${100 - ((p.inr / 100000) * 50)}`).join(' L ')}`}
                                    fill="none"
                                    stroke="rgba(150, 150, 150, 0.4)"
                                    strokeWidth="1"
                                    strokeDasharray="2 2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            )}
                        </svg>

                        {/* Starting Point Marker */}
                        <div className="absolute bottom-0 left-0 transform translate-x-[-50%]">
                            <div className="w-2 h-2 rounded-full bg-walnut-400" />
                            <p className="text-xs text-walnut-400 mt-1 whitespace-nowrap">₹1,00,000</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-walnut-700/30">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gold to-gold-light" />
                                <p className="text-sm text-walnut-400">Gold Performance</p>
                            </div>
                            <p className="text-3xl sm:text-4xl font-display font-bold gold-text-static mb-1">
                                ₹<AnimatedCounter end={Math.floor(finalGold)} duration={2000} decimals={0} />
                            </p>
                            <p className="text-sm text-emerald-400 font-semibold">+{goldGain.toFixed(1)}% gain</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-walnut-400" />
                                <p className="text-sm text-walnut-400">INR Value</p>
                            </div>
                            <p className="text-3xl sm:text-4xl font-display font-bold text-walnut-300 mb-1">
                                ₹<AnimatedCounter end={Math.floor(finalINR)} duration={2000} decimals={0} />
                            </p>
                            <p className="text-sm text-red-400 font-semibold">-{inrLoss.toFixed(1)}% to inflation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoldVsINR
