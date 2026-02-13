function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-walnut-900 overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-gold/[0.04] rounded-full blur-[100px]" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content */}
                <div className="text-center mb-16 lg:mb-20">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-walnut-50 mb-6 leading-[1.05] tracking-tight">
                        Grow your wealth in{' '}
                        <span className="gold-text">Gold</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-walnut-300 max-w-2xl mx-auto leading-relaxed font-light">
                        A Swiss gold vault in your pocket to hold, earn,
                        borrow, send, and spend gold — with zero fees.
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
                    {/* Left phone - Earning screen */}
                    <div className="w-[140px] sm:w-[180px] lg:w-[220px] flex-shrink-0 opacity-85 animate-fade-up animate-fade-up-delay-1">
                        <div className="app-phone-card rounded-2xl sm:rounded-3xl border border-gold/[0.08] bg-white overflow-hidden shadow-dark-card">
                            <img src="/earning.jpeg" alt="Earning Screen" className="w-full h-auto block" />
                        </div>
                    </div>

                    {/* Center phone - Main dashboard (larger) */}
                    <div className="w-[170px] sm:w-[220px] lg:w-[260px] flex-shrink-0 -mb-2 z-10 animate-fade-up animate-fade-up-delay-2">
                        <div className="app-phone-card rounded-2xl sm:rounded-3xl border border-gold/[0.12] bg-white overflow-hidden shadow-dark-card">
                            <img src="/dashboard.jpeg" alt="Dashboard Screen" className="w-full h-auto block" />
                        </div>
                    </div>

                    {/* Right phone - Redeem screen */}
                    <div className="w-[140px] sm:w-[180px] lg:w-[220px] flex-shrink-0 opacity-85 animate-fade-up animate-fade-up-delay-3">
                        <div className="app-phone-card rounded-2xl sm:rounded-3xl border border-gold/[0.08] bg-white overflow-hidden shadow-dark-card">
                            <img src="/redeem.jpeg" alt="Redeem Screen" className="w-full h-auto block" />
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
