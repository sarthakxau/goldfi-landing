import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const rows = [
    { feature: 'Custody fees', goldfi: 'None', digital: '3–5% premium', etfs: '0.4% / yr', physical: '0.5–1.5% / yr' },
    { feature: 'Yield', goldfi: '3–5% APY', digital: null, etfs: null, physical: null },
    // { feature: 'Borrow', goldfi: 'Instant, on-chain', digital: null, etfs: 'Margin only', physical: 'Banks only' },
    { feature: 'Transfer', goldfi: 'Anyone, instantly', digital: null, etfs: null, physical: 'In person' },
    { feature: 'Spend', goldfi: 'Card', digital: null, etfs: null, physical: null },
    { feature: 'Self-custody', goldfi: true, digital: null, etfs: null, physical: true },
    { feature: 'Redeem physical', goldfi: 'Partner jewelers', digital: true, etfs: null, physical: '—' },
]

function CellValue({ value, isGoldfi = false }) {
    if (value === null) return <span className="text-walnut-300">✕</span>
    if (value === true) return <span className={isGoldfi ? 'text-gold' : 'text-walnut-400'}>✓</span>
    return <span>{value}</span>
}

function Comparison() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="compare" className="py-20 lg:py-28 dark-section relative overflow-hidden">
            <motion.div 
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/[0.05] via-transparent to-transparent rounded-full blur-[80px]"
                animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.08, 0.05]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gold/[0.03] via-transparent to-transparent rounded-full blur-[100px]"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.06, 0.03]
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
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
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-50 tracking-tight">
                        How <span className="gold-text">gold.fi</span> compares.
                    </h2>
                </motion.div>

                {/* Desktop Table */}
                <div className="hidden sm:block -mx-5 sm:mx-0 px-5 sm:px-0">
                    <table className="w-full text-left table-fixed" role="table" aria-label="Comparison of gold investment options">
                        <thead>
                            <tr className="text-xs uppercase tracking-widest border-b border-walnut-700/40">
                                <th className="pb-4 pr-4 font-medium text-walnut-500 w-[28%]" scope="col"></th>
                                <th className="pb-4 pr-4 font-semibold text-gold w-[18%]" scope="col">Gold.fi</th>
                                <th className="pb-4 pr-4 font-medium text-walnut-500 w-[18%]" scope="col">Digital Gold</th>
                                <th className="pb-4 pr-4 font-medium text-walnut-500 w-[18%]" scope="col">Gold ETFs</th>
                                <th className="pb-4 font-medium text-walnut-500 w-[18%]" scope="col">Physical</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm sm:text-base">
                            {rows.map((row, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.05 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                    className="border-t border-walnut-700/20 group hover:bg-walnut-800/30 transition-all duration-300 hover:border-gold/20"
                                    whileHover={{ x: 4 }}
                                >
                                    <td className="py-4 pr-4 text-walnut-300 font-medium">{row.feature}</td>
                                    <td className="py-4 pr-4 text-gold font-medium">
                                        <CellValue value={row.goldfi} isGoldfi />
                                    </td>
                                    <td className="py-4 pr-4 text-walnut-500">
                                        <CellValue value={row.digital} />
                                    </td>
                                    <td className="py-4 pr-4 text-walnut-500">
                                        <CellValue value={row.etfs} />
                                    </td>
                                    <td className="py-4 text-walnut-500">
                                        <CellValue value={row.physical} />
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="sm:hidden space-y-2">
                    {rows.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.05 + index * 0.06 }}
                            className="border-t border-walnut-700/20 pt-6 pb-2"
                        >
                            <p className="text-xl font-display font-bold text-walnut-50 mb-4">{row.feature}</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="border border-gold/40 bg-gold/[0.06] rounded-xl p-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block mb-1.5">Gold.fi</span>
                                    <span className="text-gold font-display font-bold text-xl leading-tight"><CellValue value={row.goldfi} isGoldfi /></span>
                                </div>
                                <div className="flex flex-col justify-center pl-2">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-walnut-500 font-medium block mb-1">Digital Gold</span>
                                    <span className="text-walnut-300 text-lg font-medium"><CellValue value={row.digital} /></span>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-walnut-500 font-medium block mb-1">Gold ETFs</span>
                                    <span className="text-walnut-300 text-lg font-medium"><CellValue value={row.etfs} /></span>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-walnut-500 font-medium block mb-1">Physical</span>
                                    <span className="text-walnut-300 text-lg font-medium"><CellValue value={row.physical} /></span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Comparison
