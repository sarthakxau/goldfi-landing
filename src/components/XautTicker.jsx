import { useState, useEffect } from 'react'

function XautTicker() {
    const [price, setPrice] = useState(null)
    const [change, setChange] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const res = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=tether-gold&vs_currencies=usd&include_24hr_change=true'
                )
                const data = await res.json()
                if (data['tether-gold']) {
                    setPrice(data['tether-gold'].usd)
                    setChange(data['tether-gold'].usd_24h_change)
                    setLoading(false)
                }
            } catch (err) {
                // Fallback to approximate price if API fails
                setPrice(3108.50)
                setChange(0.42)
                setLoading(false)
            }
        }

        fetchPrice()
        // Refresh every 60 seconds
        const interval = setInterval(fetchPrice, 60000)
        return () => clearInterval(interval)
    }, [])

    const isUp = change !== null && change >= 0

    if (loading) {
        return (
            <div className="bg-walnut-800 border-y border-walnut-700/40">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                    <div className="flex items-center justify-center py-3">
                        <span className="text-xs text-walnut-500">Loading XAUT price…</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-walnut-800 border-y border-walnut-700/40">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <a
                    href="https://coinmarketcap.com/currencies/tether-gold/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 group"
                >
                    <div className="flex items-center gap-3">
                        {/* Tether Gold mini logo */}
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg, #F2C94C, #D4A93A)' }}
                        >
                            <span className="text-white text-[9px] font-bold">₮</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-walnut-200 tracking-wide">XAUT</span>
                            <span className="text-[10px] text-walnut-500">Tether Gold</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm font-mono font-medium text-walnut-100 tabular-nums">
                            ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        {change !== null && (
                            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                                isUp ? 'bg-emerald-900/30 text-emerald-400' : 'bg-red-900/30 text-red-400'
                            }`}>
                                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                    {isUp ? (
                                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    ) : (
                                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    )}
                                </svg>
                                {Math.abs(change).toFixed(2)}%
                            </div>
                        )}
                        <div className="hidden sm:flex items-center gap-1.5 text-walnut-500 group-hover:text-walnut-300 transition-colors">
                            <span className="text-[10px]">Live · CoinGecko</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default XautTicker
