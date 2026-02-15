function Footer() {
    return (
        <footer className="py-12 dark-section border-t border-walnut-800/60">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-8 mb-10 pb-10 border-b border-walnut-700/30">
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #F2C94C, #D4A93A)' }}>
                            <span className="text-white text-[9px] font-bold">₮</span>
                        </div>
                        <span className="text-sm text-walnut-400">Built on Tether Gold</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-walnut-700/40 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-walnut-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <span className="text-sm text-walnut-400">Self-custody</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-walnut-700/40 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-walnut-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <span className="text-sm text-walnut-400">24K Pure gold</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src="/goldfi-logo-light.svg"
                            alt="Gold.fi"
                            className="h-5 sm:h-6"
                        />
                    </a>

                    {/* Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm" aria-label="Footer navigation">
                        <a 
                            href="#about" 
                            className="text-walnut-500 hover:text-walnut-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
                        >
                            About
                        </a>
                        <a 
                            href="#features" 
                            className="text-walnut-500 hover:text-walnut-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
                        >
                            Features
                        </a>
                        {/* <a 
                            href="#faq" 
                            className="text-walnut-500 hover:text-walnut-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
                        >
                            FAQ
                        </a> */}
                        <a 
                            href="/privacy" 
                            className="text-walnut-500 hover:text-walnut-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
                        >
                            Privacy
                        </a>
                        <a 
                            href="/terms" 
                            className="text-walnut-500 hover:text-walnut-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
                        >
                            Terms
                        </a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-sm text-walnut-600">
                        &copy; {new Date().getFullYear()} Bullion Digital (BVI) Ltd.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
