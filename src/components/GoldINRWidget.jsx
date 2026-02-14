import { useState } from 'react'
import { motion } from 'framer-motion'

function GoldINRWidget() {
    const [inrAmount, setInrAmount] = useState(10)
    
    // Simple conversion: ₹10 = 0.001g (approximate)
    const goldAmount = (inrAmount / 10000).toFixed(3)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 bg-white/95 backdrop-blur-xl p-3 rounded-xl border border-walnut-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center gap-2">
                <div className="bg-walnut-100 rounded-lg px-2.5 py-1 flex items-center gap-1">
                    <input
                        type="number"
                        value={inrAmount}
                        onChange={(e) => setInrAmount(Math.max(10, parseInt(e.target.value) || 10))}
                        className="text-xs font-mono font-semibold text-walnut-900 w-10 bg-transparent border-none outline-none"
                        min="10"
                    />
                    <span className="text-[9px] text-walnut-600 font-medium">INR</span>
                </div>
                <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="bg-gold/15 rounded-lg px-2.5 py-1 flex items-center gap-1">
                    <span className="text-xs font-mono font-semibold text-gold">{goldAmount}g</span>
                    <span className="text-[9px] text-walnut-600 font-medium">gold</span>
                </div>
            </div>
        </motion.div>
    )
}

export default GoldINRWidget
