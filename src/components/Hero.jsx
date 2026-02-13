function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-walnut-900 overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-gold/[0.04] rounded-full blur-[100px]" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content */}
                <div className="text-center mb-16 lg:mb-20">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-walnut-50 mb-6 leading-[1.05] tracking-tight">
                        Say hello to{' '}
                        <span className="gold-text">gold.fi</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-walnut-300 max-w-2xl mx-auto leading-relaxed font-light">
                        A self-custody Swiss gold vault in your pocket. Hold, earn,
                        borrow, send, and spend gold — with no custody fees.
                    </p>

                    {/* CTA */}
                    <div className="mt-10">
                        <a href="https://app.gold.fi" className="btn-gold inline-flex items-center gap-2 text-base py-3.5 px-8">
                            Open Gold.fi
                            <span className="text-lg">→</span>
                        </a>
                    </div>
                </div>

                {/* App Mockups - Three phones */}
                <div className="relative flex items-end justify-center gap-3 sm:gap-5 lg:gap-6 mx-auto max-w-3xl">
                    {/* Left phone - Send screen */}
                    <div className="w-[140px] sm:w-[180px] lg:w-[220px] flex-shrink-0 opacity-85">
                        <div className="app-phone-card rounded-2xl sm:rounded-3xl border border-gold/[0.08] bg-white p-3 sm:p-4 shadow-dark-card">
                            <div className="mb-3">
                                <p className="text-[10px] sm:text-xs font-display font-medium text-gold tracking-wide">gold.fi</p>
                            </div>
                            <p className="text-[8px] sm:text-[10px] text-walnut-400 uppercase tracking-widest mb-1">Send Gold</p>
                            <p className="text-lg sm:text-2xl font-display font-bold text-walnut-800 mb-1">62.2 g</p>
                            <p className="text-[8px] sm:text-[10px] text-walnut-400 mb-4">→ Priya S. · Arriving instantly</p>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-2 text-[8px] sm:text-[10px]">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/10 flex items-center justify-center">
                                        <span className="text-gold text-[8px]">↗</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-walnut-800 font-medium">Sent to Priya</p>
                                        <p className="text-walnut-400">Today, 2:14pm</p>
                                    </div>
                                    <p className="text-walnut-800 font-medium">62.2 g</p>
                                </div>
                                <div className="flex items-center gap-2 text-[8px] sm:text-[10px]">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/10 flex items-center justify-center">
                                        <span className="text-gold text-[8px]">↙</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-walnut-800 font-medium">Received from Arjun</p>
                                        <p className="text-walnut-400">Yesterday</p>
                                    </div>
                                    <p className="text-walnut-800 font-medium">15.5 g</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center phone - Main dashboard (larger) */}
                    <div className="w-[170px] sm:w-[220px] lg:w-[260px] flex-shrink-0 -mb-2 z-10">
                        <div className="app-phone-card rounded-2xl sm:rounded-3xl border border-gold/[0.12] bg-white p-3 sm:p-5 shadow-dark-card">
                            <div className="mb-3 sm:mb-4">
                                <p className="text-[10px] sm:text-xs font-display font-medium text-gold tracking-wide">gold.fi</p>
                            </div>
                            <p className="text-[8px] sm:text-[10px] text-walnut-400 uppercase tracking-widest mb-1">Gold Balance</p>
                            <p className="text-2xl sm:text-3xl font-display font-bold text-walnut-800 mb-0.5">388.0 g</p>
                            <p className="text-[9px] sm:text-xs text-walnut-400 mb-4 sm:mb-5">+4.2% yield earned · ₹27,84,200</p>

                            {/* Action buttons */}
                            <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                                {[
                                    { icon: '+', label: 'Buy' },
                                    { icon: '↗', label: 'Send' },
                                    { icon: '%', label: 'Earn' },
                                    { icon: '◇', label: 'Borrow' },
                                ].map((action) => (
                                    <div key={action.label} className="flex flex-col items-center gap-1">
                                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-walnut-100 flex items-center justify-center text-walnut-700 text-xs sm:text-sm">
                                            {action.icon}
                                        </div>
                                        <span className="text-[7px] sm:text-[9px] text-walnut-400">{action.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Holdings */}
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-2 text-[8px] sm:text-[10px]">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold/15 flex items-center justify-center">
                                        <span className="text-gold font-display text-[8px] sm:text-[10px] font-bold">Au</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-walnut-800 font-medium">XAUT</p>
                                        <p className="text-walnut-400">Self-custody · 12.48 XAUT</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-walnut-800 font-medium">388.0 g</p>
                                        <p className="text-emerald-600">+3.8% APY</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-[8px] sm:text-[10px]">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-walnut-100 flex items-center justify-center">
                                        <span className="text-walnut-600 font-display text-[8px] sm:text-[10px] font-bold">₹</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-walnut-800 font-medium">Spend Balance</p>
                                        <p className="text-walnut-400">Card linked · XAUT</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-walnut-800 font-medium">77.1 g</p>
                                        <p className="text-walnut-400">Tap to pay</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right phone - Earnings screen */}
                    <div className="w-[140px] sm:w-[180px] lg:w-[220px] flex-shrink-0 opacity-85">
                        <div className="app-phone-card rounded-2xl sm:rounded-3xl border border-gold/[0.08] bg-white p-3 sm:p-4 shadow-dark-card">
                            <div className="mb-3">
                                <p className="text-[10px] sm:text-xs font-display font-medium text-gold tracking-wide">gold.fi</p>
                            </div>
                            <p className="text-[8px] sm:text-[10px] text-walnut-400 uppercase tracking-widest mb-1">Earning 3.8% APY</p>
                            <p className="text-lg sm:text-2xl font-display font-bold text-walnut-800 mb-0.5">₹1,06,242</p>
                            <p className="text-[8px] sm:text-[10px] text-walnut-400 mb-4">Yield earned · All time</p>

                            <div className="space-y-2.5">
                                <div className="flex items-center gap-2 text-[8px] sm:text-[10px]">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/10 flex items-center justify-center">
                                        <span className="text-gold text-[8px]">●</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-walnut-800 font-medium">Yield earned</p>
                                        <p className="text-walnut-400">This month</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-walnut-800 font-medium">1.24 g</p>
                                        <p className="text-emerald-600">+ ₹8,920</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-[8px] sm:text-[10px]">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/10 flex items-center justify-center">
                                        <span className="text-gold text-[8px]">●</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-walnut-800 font-medium">Yield earned</p>
                                        <p className="text-walnut-400">Last month</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-walnut-800 font-medium">1.20 g</p>
                                        <p className="text-emerald-600">+ ₹8,640</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative gold line connecting the phones */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                </div>
            </div>
        </section>
    )
}

export default Hero
