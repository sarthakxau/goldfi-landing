import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Approx: 1g gold ≈ ₹6,000 (simplified for viz). Monthly INR → gold at that rate, then compound at 4% APY.
const INR_PER_GRAM = 6000
const APY = 0.043

function GoldGrowthCalculator() {
    const [monthlyInr, setMonthlyInr] = useState(5000)
    const [months, setMonths] = useState(24)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    // Projected: each month add (monthlyInr / INR_PER_GRAM) gold, then apply (1 + APY/12) to running total
    const projection = []
    let totalGold = 0
    for (let m = 0; m <= months; m++) {
        if (m > 0) {
            totalGold += monthlyInr / INR_PER_GRAM
            totalGold *= 1 + APY / 12
        }
        projection.push({ month: m, gold: totalGold })
    }
    const maxGold = Math.max(...projection.map((p) => p.gold), 0.01)

    const options = [
        { label: '₹1,000', value: 1000 },
        { label: '₹5,000', value: 5000 },
        { label: '₹10,000', value: 10000 },
        { label: '₹25,000', value: 25000 },
    ]

    return (
        <section id="growth-calculator" className="py-24 lg:py-28 relative overflow-hidden" ref={ref}>
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative max-w-6xl mx-auto px-4 sm:px-8 min-w-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="w-10 h-[2px] bg-gold mx-auto mb-6" />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-800 tracking-tight mb-4">
                        See your <span className="gold-text">gold</span> grow.
                    </h2>
                    <p className="text-lg text-walnut-600 max-w-xl mx-auto">
                        Add a monthly amount and see how much gold you could have with yield.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="bg-white rounded-2xl border border-walnut-100 shadow-card p-6 sm:p-8 lg:p-10"
                >
                    {/* Controls */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 sm:justify-center mb-10">
                        <div className="w-full sm:w-auto">
                            <p className="text-xs font-semibold text-walnut-500 uppercase tracking-wider mb-3">Monthly investment</p>
                            <div className="grid grid-cols-2 sm:flex gap-2">
                                {options.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => setMonthlyInr(opt.value)}
                                        className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                                            monthlyInr === opt.value
                                                ? 'bg-gold text-white shadow-md'
                                                : 'bg-walnut-100 text-walnut-600 hover:bg-walnut-200'
                                        }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-3 flex items-center gap-2">
                                <input
                                    type="range"
                                    min="1000"
                                    max="50000"
                                    step="1000"
                                    value={monthlyInr}
                                    onChange={(e) => setMonthlyInr(Number(e.target.value))}
                                    className="flex-1 h-3 sm:h-2 rounded-full appearance-none bg-walnut-200 accent-gold"
                                />
                                <span className="text-sm font-mono font-semibold text-walnut-800 tabular-nums min-w-[5rem] text-right">₹{monthlyInr.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                        <div className="w-full sm:w-auto">
                            <p className="text-xs font-semibold text-walnut-500 uppercase tracking-wider mb-3">Timeframe</p>
                            <div className="grid grid-cols-3 sm:flex gap-2">
                                {[12, 24, 36].map((m) => (
                                    <button
                                        key={m}
                                        onClick={() => setMonths(m)}
                                        className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                                            months === m ? 'bg-gold text-white shadow-md' : 'bg-walnut-100 text-walnut-600 hover:bg-walnut-200'
                                        }`}
                                    >
                                        {m} mo
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Result + Chart */}
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <motion.div
                            className="flex-shrink-0 text-center sm:text-left"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-sm text-walnut-500 mb-1">Projected gold</p>
                            <p className="text-4xl sm:text-5xl font-display font-bold gold-text-static tabular-nums">
                                {projection[projection.length - 1].gold.toFixed(2)}g
                            </p>
                            <p className="text-sm text-walnut-500 mt-1">+ yield at ~4% APY</p>
                        </motion.div>
                        <div className="flex-1 w-full h-48 sm:h-56 flex items-end gap-0.5 sm:gap-1">
                            {projection.filter((_, i) => i % Math.max(1, Math.floor(months / 24)) === 0 || i === projection.length - 1).map((point, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 min-w-[4px] rounded-t bg-gradient-to-t from-gold-dark via-gold to-gold-light"
                                    initial={{ height: 0 }}
                                    animate={isInView ? { height: `${Math.max(4, (point.gold / maxGold) * 100)}%` } : {}}
                                    transition={{ duration: 0.8, delay: 0.2 + i * 0.02, ease: [0.16, 1, 0.3, 1] }}
                                    title={`Month ${point.month}: ${point.gold.toFixed(2)}g`}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-center text-xs text-walnut-400 mt-4">Gold accumulation over time (illustrative)</p>
                </motion.div>
            </div>
        </section>
    )
}

export default GoldGrowthCalculator
