function Hero() {
    return (
        <section className="pt-24 pb-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark mb-6 leading-tight">
                            Build Savings with{' '}
                            <span className="gold-text">Digital Gold</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-dark-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Start investing in 24K gold with as little as ₹10. Secure, transparent,
                            and backed by real gold stored in insured vaults.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-cta">
                            <a href="#download" className="btn-gold text-center">
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    App Store
                                </span>
                            </a>
                            <a href="#download" className="btn-outline-gold text-center">
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    Play Store
                                </span>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-dark-secondary">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>100% Secure</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Insured Vaults</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>24K Purity</span>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="relative w-[280px] sm:w-[320px] lg:w-[380px]">
                                <img
                                    src="/hero-phone-3d.png"
                                    alt="gold.fi App Preview"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
