function About() {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                    {/* Image */}
                    <div className="flex-1">
                        <div className="relative">
                            <img
                                src="/vault_room.jpg"
                                alt="Secure Gold Vault"
                                className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-3xl shadow-xl"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-dark">Fully Insured</p>
                                        <p className="text-xs text-dark-secondary">IIFL, IDBI, MMTC-PAMP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
                            Trusted by <span className="gold-text">Millions</span>
                        </h2>
                        <p className="text-lg text-dark-secondary mb-8 leading-relaxed">
                            gold.fi partners with India's leading gold refineries and trusted vault
                            providers to ensure your investment is always safe, pure, and accessible.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="text-center lg:text-left">
                                <p className="text-2xl lg:text-3xl font-display font-bold gold-text">₹500Cr+</p>
                                <p className="text-sm text-dark-secondary">Gold Stored</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-2xl lg:text-3xl font-display font-bold gold-text">1M+</p>
                                <p className="text-sm text-dark-secondary">Happy Users</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-2xl lg:text-3xl font-display font-bold gold-text">24K</p>
                                <p className="text-sm text-dark-secondary">Purity</p>
                            </div>
                        </div>

                        {/* Trust Chips */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            {['RBI Compliant', 'SEBI Registered', 'ISO Certified'].map((chip) => (
                                <span
                                    key={chip}
                                    className="about-chip px-4 py-2 bg-white border border-black/10 rounded-full text-sm text-dark-secondary"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
