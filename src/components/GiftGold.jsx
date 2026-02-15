import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const giftSteps = [
    {
        label: 'Choose amount',
        detail: '1g – 100g of 24K gold',
        icon: (active) => (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${active ? 'bg-gold/15' : 'bg-walnut-100'}`}>
                <svg className={`w-5 h-5 transition-colors duration-500 ${active ? 'text-gold' : 'text-walnut-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        ),
    },
    {
        label: 'Add recipient',
        detail: 'Anyone with a phone number',
        icon: (active) => (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${active ? 'bg-gold/15' : 'bg-walnut-100'}`}>
                <svg className={`w-5 h-5 transition-colors duration-500 ${active ? 'text-gold' : 'text-walnut-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
        ),
    },
    {
        label: 'Personalize',
        detail: 'Pick an occasion & message',
        icon: (active) => (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${active ? 'bg-gold/15' : 'bg-walnut-100'}`}>
                <svg className={`w-5 h-5 transition-colors duration-500 ${active ? 'text-gold' : 'text-walnut-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            </div>
        ),
    },
    {
        label: 'Sent instantly',
        detail: 'They receive gold in seconds',
        icon: (active) => (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${active ? 'bg-gold/15' : 'bg-walnut-100'}`}>
                <svg className={`w-5 h-5 transition-colors duration-500 ${active ? 'text-gold' : 'text-walnut-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
            </div>
        ),
    },
]

function GiftGold() {
    const [activeStep, setActiveStep] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    useEffect(() => {
        if (!isInView) return
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % giftSteps.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [isInView])

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <motion.div 
                className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px]"
                animate={{ 
                    x: [0, 15, 0],
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-14"
                >
                    <motion.div 
                        className="w-10 h-[2px] bg-gold mx-auto mb-8"
                        initial={{ width: 0, opacity: 0 }}
                        animate={isInView ? { width: 40, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-800 tracking-tight mb-4">
                        Gift <span className="gold-text">gold</span> to anyone.
                    </h2>
                    <motion.p 
                        className="text-lg text-walnut-500 max-w-xl mx-auto font-light"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Send real 24K gold as a gift — no wrapping paper needed. They receive it instantly in their Gold.fi wallet.
                    </motion.p>
                </motion.div>

                {/* Desktop: 4-column grid */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden sm:block card-light p-6 sm:p-8 lg:p-10"
                >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {giftSteps.map((step, i) => (
                            <motion.div
                                key={step.label}
                                initial={{ opacity: 0, y: 12 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-500 cursor-pointer border focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-white ${
                                    activeStep === i
                                        ? 'bg-gold/10 border-gold/30 shadow-sm'
                                        : 'bg-white/50 border-walnut-200 hover:bg-white/80'
                                }`}
                                onClick={() => setActiveStep(i)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault()
                                        setActiveStep(i)
                                    }
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label={`Step ${i + 1}: ${step.label}`}
                                aria-pressed={activeStep === i}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`text-[10px] font-semibold uppercase tracking-widest mb-4 transition-colors duration-500 ${
                                    activeStep === i ? 'text-gold' : 'text-walnut-500'
                                }`}>
                                    Step {i + 1}
                                </div>

                                <div className="mb-3">
                                    {step.icon(activeStep === i)}
                                </div>

                                <p className={`text-sm font-semibold mb-1 transition-colors duration-500 ${
                                    activeStep === i ? 'text-walnut-900' : 'text-walnut-800'
                                }`}>
                                    {step.label}
                                </p>
                                <p className={`text-xs transition-colors duration-500 ${
                                    activeStep === i ? 'text-walnut-700' : 'text-walnut-600'
                                }`}>
                                    {step.detail}
                                </p>

                                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500 ${
                                    activeStep === i ? 'w-12 bg-gold' : 'w-0 bg-transparent'
                                }`} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="mt-6 flex gap-2">
                        {giftSteps.map((_, i) => (
                            <div
                                key={i}
                                className="flex-1 h-1 rounded-full bg-walnut-100 overflow-hidden cursor-pointer"
                                onClick={() => setActiveStep(i)}
                            >
                                <motion.div
                                    className="h-full rounded-full bg-gold"
                                    initial={{ width: '0%' }}
                                    animate={{ width: activeStep === i ? '100%' : activeStep > i ? '100%' : '0%' }}
                                    transition={{ duration: activeStep === i ? 2.5 : 0.3, ease: 'linear' }}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile: vertical stepper */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="sm:hidden card-light p-5"
                >
                    <div className="flex flex-col gap-1">
                        {giftSteps.map((step, i) => {
                            const isActive = activeStep === i
                            const isPast = activeStep > i
                            return (
                                <motion.div
                                    key={step.label}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                                    className={`flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-500 cursor-pointer ${
                                        isActive
                                            ? 'bg-gold/10'
                                            : 'bg-transparent'
                                    }`}
                                    onClick={() => setActiveStep(i)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Step ${i + 1}: ${step.label}`}
                                    aria-pressed={isActive}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault()
                                            setActiveStep(i)
                                        }
                                    }}
                                >
                                    {/* Step number / check circle */}
                                    <div className={`relative shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                                        isActive
                                            ? 'bg-gold text-white shadow-md shadow-gold/25'
                                            : isPast
                                                ? 'bg-gold/20 text-gold'
                                                : 'bg-walnut-100 text-walnut-400'
                                    }`}>
                                        {isPast ? (
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            i + 1
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-sm font-semibold transition-colors duration-500 ${
                                            isActive ? 'text-walnut-900' : isPast ? 'text-walnut-700' : 'text-walnut-800'
                                        }`}>
                                            {step.label}
                                        </p>
                                        <motion.p
                                            className={`text-xs transition-colors duration-500 ${
                                                isActive ? 'text-walnut-600' : 'text-walnut-400'
                                            }`}
                                            initial={false}
                                            animate={{
                                                height: isActive ? 'auto' : 0,
                                                opacity: isActive ? 1 : 0,
                                                marginTop: isActive ? 2 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            {step.detail}
                                        </motion.p>
                                    </div>

                                    {/* Icon on the right */}
                                    <div className={`shrink-0 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                        {step.icon(isActive)}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Mobile progress dots */}
                    <div className="mt-4 flex justify-center gap-2">
                        {giftSteps.map((_, i) => (
                            <button
                                key={i}
                                className={`rounded-full transition-all duration-500 ${
                                    activeStep === i
                                        ? 'w-6 h-1.5 bg-gold'
                                        : activeStep > i
                                            ? 'w-1.5 h-1.5 bg-gold/40'
                                            : 'w-1.5 h-1.5 bg-walnut-200'
                                }`}
                                onClick={() => setActiveStep(i)}
                                aria-label={`Go to step ${i + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default GiftGold
