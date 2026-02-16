import { useState, useEffect, useRef, useCallback, Fragment } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

function TetherGoldLogo({ size = 40 }) {
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

const steps = [
    { id: 'deposit', label: 'Deposit Gold', sub: 'Choose amount to deploy' },
    { id: 'strategy', label: 'Select Strategy', sub: 'Pick a yield vault' },
    { id: 'earning', label: 'Earning Yield', sub: 'Watch your gold grow' },
    { id: 'card', label: 'Load Card', sub: 'Spend your earnings' },
]

const strategies = [
    { name: 'Aave V3', chain: 'Ethereum', apy: '3.1%', risk: 'Low risk', tvl: '' },
    { name: 'Fluid', chain: 'Ethereum', apy: '4.8%', risk: 'Medium', tvl: '' },
    { name: 'Morpho', chain: 'Base', apy: '5.2%', risk: 'Medium', tvl: '' },
]

function YieldStrategy() {
    const [currentStep, setCurrentStep] = useState(-1)
    const [depositAmount, setDepositAmount] = useState(0)
    const [selectedStrategy, setSelectedStrategy] = useState(null)
    const [earnings, setEarnings] = useState(0)
    const [cardBalance, setCardBalance] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [autoPlay, setAutoPlay] = useState(true)
    const timersRef = useRef([])
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const hasStarted = useRef(false)

    const clearTimers = useCallback(() => {
        timersRef.current.forEach(({ id, type }) => {
            if (type === 'interval') clearInterval(id)
            else clearTimeout(id)
        })
        timersRef.current = []
    }, [])

    const addTimeout = useCallback((fn, ms) => {
        const id = setTimeout(fn, ms)
        timersRef.current.push({ id, type: 'timeout' })
        return id
    }, [])

    const addInterval = useCallback((fn, ms) => {
        const id = setInterval(fn, ms)
        timersRef.current.push({ id, type: 'interval' })
        return id
    }, [])

    // Run step animations
    useEffect(() => {
        if (currentStep === 0) {
            setDepositAmount(0)
            let amt = 0
            const intv = addInterval(() => {
                amt += 2
                if (amt >= 100) { amt = 100; clearInterval(intv) }
                setDepositAmount(amt)
            }, 40)
            if (autoPlay) addTimeout(() => setCurrentStep(1), 3800)
        }
        if (currentStep === 1) {
            setSelectedStrategy(null)
            if (autoPlay) {
                addTimeout(() => setSelectedStrategy(0), 1400)
                addTimeout(() => setCurrentStep(2), 4000)
            }
        }
        if (currentStep === 2) {
            setEarnings(0)
            setIsRunning(true)
            if (autoPlay) addTimeout(() => { setIsRunning(false); setCurrentStep(3) }, 5500)
        }
        if (currentStep === 3) {
            setIsRunning(false)
            setCardBalance(0)
            let bal = 0
            const intv = addInterval(() => {
                bal += 1
                if (bal >= 45) { bal = 45; clearInterval(intv) }
                setCardBalance(bal)
            }, 50)
        }
    }, [currentStep, autoPlay, addTimeout, addInterval])

    // Start on scroll into view
    useEffect(() => {
        if (isInView && !hasStarted.current) {
            hasStarted.current = true
            addTimeout(() => setCurrentStep(0), 600)
        }
    }, [isInView, addTimeout])

    // Earnings counter
    useEffect(() => {
        if (!isRunning) return
        const intv = setInterval(() => setEarnings(prev => prev + 0.12), 100)
        return () => clearInterval(intv)
    }, [isRunning])

    // Cleanup on unmount
    useEffect(() => clearTimers, [clearTimers])

    // Click a step manually
    const goToStep = (i) => {
        clearTimers()
        setAutoPlay(false)
        setIsRunning(false)
        setCurrentStep(i)
    }

    const replay = () => {
        clearTimers()
        setAutoPlay(true)
        setIsRunning(false)
        setDepositAmount(0)
        setSelectedStrategy(null)
        setEarnings(0)
        setCardBalance(0)
        setCurrentStep(-1)
        setTimeout(() => setCurrentStep(0), 300)
    }

    const showing = currentStep >= 0

    return (
        <section className="py-24 lg:py-32 dark-section relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <motion.div 
                className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-gold/[0.06] via-transparent to-transparent rounded-full blur-[80px]"
                animate={{ 
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gold/[0.04] via-transparent to-transparent rounded-full blur-[100px]"
                animate={{ 
                    x: [0, -15, 0],
                    y: [0, 10, 0],
                    scale: [1, 1.15, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 lg:mb-20"
                >
                    <motion.div 
                        className="flex items-center gap-4 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <TetherGoldLogo size={48} />
                        <div>
                            <p className="text-xs text-walnut-500 uppercase tracking-widest">Powered by</p>
                            <p className="text-lg font-semibold text-walnut-200">Tether Gold (XAUT)</p>
                        </div>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-50 tracking-tight mb-4">
                        Deploy. Earn. Spend.
                    </h2>
                    <motion.p 
                        className="text-lg text-walnut-400 max-w-2xl font-light"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Put your gold to work in DeFi yield strategies, then load earnings onto your Gold.fi Visa card — all in one app.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-12"
                >
                    {/* Left — Clickable step tracker */}
                    <div className="mb-8 mx-auto sm:mx-0" style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: '0 16px' }}>
                        {steps.map((step, i) => (
                            <Fragment key={step.id}>
                                {/* Circle + connector */}
                                <div className="flex flex-col items-center cursor-pointer" onClick={() => goToStep(i)}>
                                    <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-500 ${
                                        showing && i < currentStep
                                            ? 'bg-gold text-white shadow-lg shadow-gold/20'
                                            : showing && i === currentStep
                                                ? 'bg-gold/20 text-gold border-2 border-gold'
                                                : 'bg-walnut-800 text-walnut-600 border border-walnut-700 hover:border-walnut-500 hover:text-walnut-400'
                                    }`}>
                                        {showing && i < currentStep ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (i + 1)}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <motion.div
                                            className={`w-0.5 flex-1 ${
                                                showing && i < currentStep ? 'bg-gold' : 'bg-walnut-800'
                                            }`}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: showing && i < currentStep ? 1 : 0 }}
                                            transition={{ duration: 0.7, delay: 0.2 }}
                                            style={{ transformOrigin: 'top' }}
                                        />
                                    )}
                                </div>
                                {/* Text label */}
                                <button
                                    onClick={() => goToStep(i)}
                                    className="text-left group cursor-pointer focus:outline-none -mt-0.5 pb-8 flex flex-col gap-1 items-start max-w-fit"
                                    aria-label={`Go to step ${i + 1}: ${step.label}`}
                                    aria-pressed={showing && i === currentStep}
                                >
                                    <p className={`text-base font-semibold transition-colors duration-500 ${
                                        showing && i <= currentStep ? 'text-walnut-100' : 'text-walnut-600 group-hover:text-walnut-400'
                                    }`}>{step.label}</p>
                                    <p className={`text-sm transition-colors duration-500 ${
                                        showing && i <= currentStep ? 'text-walnut-400' : 'text-walnut-700 group-hover:text-walnut-600'
                                    }`}>{step.sub}</p>
                                </button>
                            </Fragment>
                        ))}
                    </div>

                    {/* Right — Interactive visual */}
                    <div className="relative min-h-[380px]">
                        <AnimatePresence mode="wait">
                            {currentStep === 0 && (
                                <motion.div key="deposit" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="glass-card rounded-3xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <TetherGoldLogo size={36} />
                                        <div>
                                            <p className="text-sm font-semibold text-walnut-100">XAUT</p>
                                            <p className="text-xs text-walnut-500">Tether Gold</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-walnut-500 uppercase tracking-widest mb-2">Deploying</p>
                                    <p className="text-4xl font-display font-bold text-walnut-50 mb-1 tabular-nums">{depositAmount.toFixed(0)}g</p>
                                    <p className="text-sm text-walnut-400 mb-6">≈ ₹{(depositAmount * 7182).toLocaleString('en-IN')}</p>
                                    <div className="w-full h-3 bg-walnut-700 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-75" style={{ width: `${depositAmount}%` }} />
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-walnut-600"><span>0g</span><span>100g</span></div>
                                </motion.div>
                            )}

                            {currentStep === 1 && (
                                <motion.div key="strategy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-3">
                                    <p className="text-xs text-walnut-500 uppercase tracking-widest mb-3">Select a yield vault</p>
                                    {strategies.map((s, i) => (
                                        <motion.div key={s.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12, duration: 0.4 }}
                                            className={`rounded-2xl p-5 border cursor-pointer transition-all duration-300 ${selectedStrategy === i ? 'glass-card border-gold/40 shadow-lg shadow-gold/5' : 'glass-card border-walnut-700/30 hover:border-walnut-600/40'}`}
                                            onClick={() => setSelectedStrategy(i)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${selectedStrategy === i ? 'bg-gold text-white' : 'bg-walnut-700/50 text-walnut-400'}`}>{s.name.charAt(0)}</div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-walnut-100">{s.name}</p>
                                                        <p className="text-xs text-walnut-500">{s.chain} · {s.tvl} TVL</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-bold text-emerald-400">{s.apy}</p>
                                                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.risk === 'Low risk' ? 'bg-emerald-900/30 text-emerald-400' : 'bg-amber-900/30 text-amber-400'}`}>{s.risk}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div key="earning" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="glass-card rounded-3xl p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gold text-white flex items-center justify-center text-sm font-bold">A</div>
                                            <div><p className="text-sm font-semibold text-walnut-100">Aave V3 · XAUT</p><p className="text-xs text-walnut-500">100g deployed</p></div>
                                        </div>
                                        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span className="text-xs text-emerald-400 font-medium">Active</span></div>
                                    </div>
                                    <p className="text-xs text-walnut-500 uppercase tracking-widest mb-2">Yield Earned</p>
                                    <div className="flex items-end gap-3 mb-2">
                                        <p className="text-5xl font-display font-bold text-emerald-400 tabular-nums">${earnings.toFixed(2)}</p>
                                        <span className="text-sm text-emerald-400/60 mb-2">and counting...</span>
                                    </div>
                                    <div className="mt-6 flex items-center gap-4">
                                        {[['APY', '3.1%'], ['Deposited', '100g'], ['Days', '45']].map(([k, v]) => (
                                            <div key={k} className="flex-1 bg-walnut-700/50 rounded-xl p-3">
                                                <p className="text-[10px] text-walnut-500 uppercase tracking-widest">{k}</p>
                                                <p className="text-lg font-bold text-walnut-100">{v}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex items-end gap-1 h-8">
                                        {Array.from({ length: 24 }).map((_, i) => (
                                            <motion.div key={i} className="flex-1 rounded-sm bg-emerald-400" animate={{ height: [4, 8 + Math.random() * 24, 4], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: i * 0.05 }} style={{ height: 4 }} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div key="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-4 w-full">
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-gold-dark via-gold to-gold-light rounded-3xl p-5 sm:p-8 relative overflow-hidden aspect-[1.6/1]">
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-12 -translate-x-8" />
                                            <div className="relative h-full flex flex-col justify-between">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs sm:text-sm text-white/80 font-medium uppercase tracking-[0.2em]">Gold.fi</span>
                                                    <TetherGoldLogo size={28} />
                                                </div>
                                                <div>
                                                    <p className="text-white font-mono text-sm sm:text-lg tracking-[0.2em] mb-1 sm:mb-2">•••• •••• •••• 3224</p>
                                                    <p className="text-xs sm:text-sm text-white/60">Pratik Patel</p>
                                                </div>
                                                <div className="flex items-end justify-between">
                                                    <div>
                                                        <p className="text-[10px] text-white/50 uppercase tracking-widest">Balance</p>
                                                        <p className="text-xl sm:text-2xl font-bold text-white tabular-nums relative">
                                                            <span className="invisible">₹{(45 * 718).toLocaleString('en-IN')}</span>
                                                            <span className="absolute left-0 bottom-0">₹{(cardBalance * 718).toLocaleString('en-IN')}</span>
                                                        </p>
                                                    </div>
                                                    <span className="text-xl sm:text-2xl text-white/90 font-bold tracking-wider">VISA</span>
                                                </div>
                                            </div>
                                        </div>
                                        {cardBalance > 0 && cardBalance < 45 && (
                                            <motion.div className="absolute inset-0 rounded-3xl border-2 border-gold" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.8, repeat: Infinity }} />
                                        )}
                                    </div>
                                    <div className="glass-card rounded-2xl p-4 sm:p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <div className="min-w-0"><p className="text-sm font-semibold text-walnut-100">Yield → Card</p><p className="text-xs text-walnut-500 truncate">Loaded from Aave V3 earnings</p></div>
                                            </div>
                                            <p className="text-base sm:text-lg font-bold text-emerald-400 flex-shrink-0 tabular-nums relative">
                                                <span className="invisible">+₹{(45 * 718).toLocaleString('en-IN')}</span>
                                                <span className="absolute right-0 top-0">+₹{(cardBalance * 718).toLocaleString('en-IN')}</span>
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default YieldStrategy
