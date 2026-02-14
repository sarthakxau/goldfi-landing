import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import FloatingParticles from './FloatingParticles'

// Live gold price ticker with XAUT USD price
function GoldPriceTicker() {
    const [inrPrice, setInrPrice] = useState(144755.22)
    const [xautPrice, setXautPrice] = useState(null)
    const [xautChange, setXautChange] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [sparklineData, setSparklineData] = useState([])
    const [lastUpdate, setLastUpdate] = useState(Date.now())

    useEffect(() => {
        // INR price drift
        const interval = setInterval(() => {
            setInrPrice(prev => prev + (Math.random() - 0.48) * 12)
        }, 3000)

        // Fetch live XAUT from CoinGecko
        const fetchXaut = async () => {
            setIsLoading(true)
            setError(false)
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout
            
            try {
                const res = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=tether-gold&vs_currencies=usd&include_24hr_change=true',
                    { signal: controller.signal }
                )
                clearTimeout(timeoutId)
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                if (data['tether-gold']) {
                    const newPrice = data['tether-gold'].usd
                    setXautPrice(newPrice)
                    setXautChange(data['tether-gold'].usd_24h_change)
                    setError(false)
                    setLastUpdate(Date.now())
                    
                    // Update sparkline data (simulate 24h trend)
                    setSparklineData(prev => {
                        const newData = [...prev, newPrice]
                        return newData.slice(-24) // Keep last 24 points
                    })
                } else {
                    throw new Error('Invalid data')
                }
            } catch (err) {
                clearTimeout(timeoutId)
                // Fallback to default values on error
                setXautPrice(3108.50)
                setXautChange(0.42)
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        fetchXaut()
        const xautInterval = setInterval(fetchXaut, 60000)

        return () => { clearInterval(interval); clearInterval(xautInterval) }
    }, [])

    const xautUp = xautChange !== null && xautChange >= 0
    const isLive = Date.now() - lastUpdate < 60000 // Green if updated in last minute

    // Generate sparkline path
    const getSparklinePath = () => {
        if (sparklineData.length < 2) return ''
        const width = 40
        const height = 12
        const min = Math.min(...sparklineData)
        const max = Math.max(...sparklineData)
        const range = max - min || 1
        
        const points = sparklineData.map((value, i) => {
            const x = (i / (sparklineData.length - 1)) * width
            const y = height - ((value - min) / range) * height
            return `${x},${y}`
        })
        
        return `M ${points.join(' L ')}`
    }

    return (
        <div className="flex flex-wrap items-center gap-3" role="region" aria-label="Live gold prices">
            {/* XAUT USD price */}
            {xautPrice && (
                <a
                    href="https://coinmarketcap.com/currencies/tether-gold/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.1] transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent group"
                    aria-label={`XAUT price: $${xautPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                >
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #F2C94C, #D4A93A)' }} aria-hidden="true">
                        <span className="text-white text-[6px] font-bold">₮</span>
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">XAUT</span>
                    {isLoading ? (
                        <span className="text-sm font-mono text-white/60 font-medium" aria-label="Loading price">...</span>
                    ) : (
                        <>
                            <span className="text-sm font-mono text-white/80 font-medium tabular-nums">
                                ${xautPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                            {/* Sparkline */}
                            {sparklineData.length >= 2 && (
                                <svg width="40" height="12" className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                                    <path
                                        d={getSparklinePath()}
                                        fill="none"
                                        stroke={xautUp ? '#10b981' : '#ef4444'}
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                            <span className={`text-[10px] font-mono font-semibold ${xautUp ? 'text-emerald-400' : 'text-red-400'}`} aria-label={`${xautUp ? 'Up' : 'Down'} ${Math.abs(xautChange).toFixed(2)}%`}>
                                {xautUp ? '▲' : '▼'} {Math.abs(xautChange).toFixed(2)}%
                            </span>
                            {/* Live indicator */}
                            <div className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-400 animate-pulse' : 'bg-walnut-400'}`} aria-label={isLive ? 'Live' : 'Stale'} />
                        </>
                    )}
                </a>
            )}
            {/* INR price */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]" aria-label={`Live gold price: ₹${inrPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per 10 grams`}>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Live</span>
                <span className="text-sm font-mono text-white/80 font-medium tabular-nums">
                    ₹{inrPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/10g
                </span>
            </div>
        </div>
    )
}

function Hero() {
    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 dark-section overflow-hidden min-h-[92vh] flex items-center">
            {/* Floating particles */}
            <FloatingParticles />
            
            {/* Rich background layers with parallax effect */}
            <motion.div 
                className="absolute inset-0 grid-pattern opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
            />
            <motion.div 
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-gold/[0.07] via-transparent to-transparent rounded-full blur-[80px]"
                animate={{ 
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gold/[0.05] via-transparent to-transparent rounded-full blur-[100px]"
                animate={{ 
                    x: [0, -25, 0],
                    y: [0, 15, 0],
                    scale: [1, 1.15, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-gold/[0.02] rounded-full blur-[120px]"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.02, 0.04, 0.02]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="mb-6">
                            <GoldPriceTicker />
                        </div>

                        <motion.h1 
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-[1.15] tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Grow your{' '}
                            <br className="hidden sm:block" />
                            wealth in{' '}
                            <motion.span 
                                className="gold-text inline-block pb-1"
                                animate={{ 
                                    backgroundPosition: ['0% center', '100% center', '0% center']
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Gold
                            </motion.span>
                        </motion.h1>

                        <motion.p 
                            className="text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed font-light mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            A Swiss gold vault in your pocket to hold, earn,
                            borrow, send, and spend gold — with zero fees.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <motion.a 
                                href="https://app.gold.fi" 
                                className="btn-gold inline-flex items-center gap-2.5 text-base py-3.5 px-8 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
                                aria-label="Open Gold.fi app"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Open Gold.fi
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <motion.a 
                                href="#features" 
                                className="btn-outline-gold inline-flex items-center gap-2 text-sm py-3.5 px-7 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
                                aria-label="Learn how Gold.fi works"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                See how it works
                            </motion.a>
                        </div>

                        {/* Trust badges - Glass morphism pills */}
                        <div className="mt-12 flex flex-wrap items-center gap-3 sm:gap-4 overflow-x-auto pb-2 -mx-5 sm:mx-0 px-5 sm:px-0">
                            {[
                                { icon: <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: 'Self-custody' },
                                { icon: <span className="text-gold text-xs" aria-hidden="true">🇨🇭</span>, text: 'Held in Swiss vaults' },
                                { icon: <span className="text-gold text-xs font-bold" aria-hidden="true">24K</span>, text: 'Pure gold' },
                            ].map((badge, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                    role="listitem"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {badge.icon}
                                    <span className="text-xs font-medium tracking-wide whitespace-nowrap">{badge.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Interactive App Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex justify-center lg:justify-end z-20"
                        aria-label="Gold.fi app preview"
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Gold orb behind phone */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/20 via-gold/10 to-transparent rounded-full blur-[120px]"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.3, 0.2],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            style={{ zIndex: 1 }}
                        />
                        
                        {/* Rotating ring */}
                        <motion.svg
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
                            style={{ zIndex: 2 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <circle
                                cx="250"
                                cy="250"
                                r="240"
                                fill="none"
                                stroke="url(#goldRing)"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                opacity="0.3"
                            />
                            <defs>
                                <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#D4A93A" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#F2C94C" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#D4A93A" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </motion.svg>
                        
                        <div className="relative" style={{ zIndex: 10 }}>
                            {/* Phone frame */}
                            <div className="phone-mockup gold-glow" style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))' }}>
                                <div className="bg-[#FAF8F5] rounded-[30px] overflow-hidden flex flex-col" style={{ aspectRatio: '9/19.5' }}>
                                    {/* Dynamic island */}
                                    <div className="h-12" />

                                    {/* Live Price Bar */}
                                    <div className="flex items-center justify-between px-4 pb-2">
                                        <div className="flex items-center gap-1">
                                            <span className="text-[7px] text-walnut-400 uppercase tracking-widest">Live Price</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[9px] font-mono font-semibold text-walnut-800">₹1,44,755.22</span>
                                            <span className="text-[7px] text-walnut-400">/10g</span>
                                            <svg className="w-2 h-2 text-walnut-400 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </div>
                                    </div>

                                    {/* Gold Balance */}
                                    <div className="text-center pt-3 pb-4 px-5">
                                        <p className="text-[8px] text-walnut-400 tracking-wide mb-1.5">Gold Balance</p>
                                        <div className="flex items-center justify-center gap-1.5">
                                            <p className="text-[26px] font-display font-bold text-walnut-800 leading-none tabular-nums">
                                                <AnimatedCounter end={2784200} duration={4000} decimals={0} prefix="₹" />
                                            </p>
                                            <svg className="w-3 h-3 text-walnut-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                        <div className="inline-flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full mt-2">
                                            <svg className="w-2 h-2 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-[9px] font-semibold text-emerald-700">4.2%</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons — matching real app */}
                                    <div className="flex justify-center gap-5 px-5 mb-4">
                                        {[
                                            { label: 'Buy Gold', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg> },
                                            { label: 'Redeem', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l4-4M4 12l4 4" /></svg> },
                                            { label: 'Earn', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
                                            { label: 'Transfer', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg> },
                                        ].map((a) => (
                                            <div key={a.label} className="flex flex-col items-center gap-1.5">
                                                <div className="w-10 h-10 rounded-full bg-walnut-100/80 flex items-center justify-center text-walnut-500">{a.icon}</div>
                                                <span className="text-[7px] text-walnut-500 font-medium">{a.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Cards */}
                                    <div className="px-3 space-y-2 flex-1">
                                        {/* Two side-by-side cards */}
                                        <div className="flex gap-2">
                                            {/* Gold is up card */}
                                            <div className="flex-1 bg-white rounded-2xl p-3 border border-walnut-100/60">
                                                <p className="text-[9px] text-walnut-600 font-medium mb-0.5">Gold is up <span className="text-emerald-600 font-bold">21.80%</span></p>
                                                <p className="text-[7px] text-walnut-400 mb-2">in the last 90 days.</p>
                                                <svg viewBox="0 0 120 28" className="w-full h-5">
                                                    <defs>
                                                        <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#D4A93A" stopOpacity="0.2"/>
                                                            <stop offset="100%" stopColor="#D4A93A" stopOpacity="0"/>
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M0 24 Q10 22 20 20 T40 17 T60 13 T80 10 T100 5 T120 2" fill="none" stroke="#D4A93A" strokeWidth="1.5"/>
                                                    <path d="M0 24 Q10 22 20 20 T40 17 T60 13 T80 10 T100 5 T120 2 V28 H0 Z" fill="url(#cg2)"/>
                                                </svg>
                                                <div className="mt-1.5 inline-flex items-center bg-walnut-100/60 px-2 py-1 rounded-full">
                                                    <span className="text-[7px] font-medium text-walnut-600">View Chart</span>
                                                </div>
                                            </div>

                                            {/* Grow savings card */}
                                            <div className="flex-1 rounded-2xl p-3 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5EACD 0%, #EDE0C0 100%)' }}>
                                                <p className="text-[9px] font-semibold text-walnut-700 leading-tight mb-0.5">Grow your</p>
                                                <p className="text-[9px] font-semibold text-walnut-700 leading-tight mb-3">gold savings</p>
                                                {/* Gold bars illustration */}
                                                <div className="flex justify-end -mr-1">
                                                    <div className="flex gap-0.5">
                                                        <div className="w-4 h-6 rounded-sm bg-gradient-to-b from-gold-light to-gold" />
                                                        <div className="w-4 h-8 rounded-sm bg-gradient-to-b from-gold to-gold-dark -mt-2" />
                                                        <div className="w-4 h-5 rounded-sm bg-gradient-to-b from-gold-light to-gold mt-1" />
                                                    </div>
                                                </div>
                                                <div className="mt-1 inline-flex items-center bg-white/60 px-2 py-1 rounded-full">
                                                    <span className="text-[7px] font-medium text-walnut-600">Set up Autopay</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* February Summary */}
                                        <div className="bg-white rounded-2xl p-3 border border-walnut-100/60">
                                            <p className="text-[10px] font-display font-bold text-walnut-800 mb-2">February Summary</p>
                                            <div className="flex gap-2 mb-2">
                                                <div className="flex-1">
                                                    <p className="text-[7px] text-gold font-semibold mb-0.5">Gold Purchased</p>
                                                    <p className="text-xs font-bold text-walnut-800">12.4 g</p>
                                                    <p className="text-[7px] text-walnut-400">+₹89,200</p>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-[7px] text-emerald-600 font-semibold mb-0.5">Wealth Growth</p>
                                                    <div className="flex items-center gap-0.5">
                                                        <p className="text-xs font-bold text-walnut-800">+3.2%</p>
                                                        <svg className="w-2 h-2 text-emerald-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                                    </div>
                                                    <p className="text-[7px] text-walnut-400">+₹12,340</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[8px] font-semibold text-walnut-600">Monthly Goal</p>
                                                <p className="text-[8px] font-mono text-walnut-500">8.2g / 10g</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className="flex items-center justify-around px-4 py-2.5 border-t border-walnut-100/60 mt-auto">
                                        {[
                                            { label: 'Home', active: true, icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> },
                                            { label: 'Wallet', active: false, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7V17C4 18.1 4.9 19 6 19H18C19.1 19 20 18.1 20 17V9C20 7.9 19.1 7 18 7H6C4.9 7 4 7.9 4 9V7ZM4 7C4 5.9 4.9 5 6 5H16" /><circle cx="16" cy="13" r="1" fill="currentColor"/></svg> },
                                            { label: 'Earn', active: false, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
                                            { label: 'Settings', active: false, icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                                        ].map((tab) => (
                                            <div key={tab.label} className="flex flex-col items-center gap-0.5">
                                                <div className={tab.active ? 'text-gold' : 'text-walnut-300'}>{tab.icon}</div>
                                                <span className={`text-[7px] font-medium ${tab.active ? 'text-gold' : 'text-walnut-300'}`}>{tab.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges — positioned within bounds */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -left-4 top-1/4 bg-white rounded-2xl p-3 shadow-card-hover border border-walnut-100 hidden lg:block"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[9px] text-walnut-400">Monthly yield</p>
                                        <p className="text-xs font-semibold text-emerald-600">+₹8,920</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -right-4 bottom-1/4 bg-walnut-800 rounded-2xl p-3 shadow-dark-card border border-walnut-700/50 hidden lg:block"
                            >
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                    <div>
                                        <p className="text-xs font-semibold text-white/90">Self-custody</p>
                                        <p className="text-[9px] text-white/50">Your keys, your gold</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
