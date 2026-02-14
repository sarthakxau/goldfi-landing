import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            {/* Skip to main content link for accessibility */}
            <a
                href="#main-content"
                className="skip-link"
            >
                Skip to main content
            </a>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-walnut-50/95 backdrop-blur-xl shadow-sm'
                    : 'bg-transparent'
            }`} role="navigation" aria-label="Main navigation">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src="/goldfi-logo-light.svg"
                            alt="Gold.fi"
                            className="h-7 sm:h-9"
                        />
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                        <a 
                            href="#about" 
                            className={`text-sm font-medium transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1 ${
                                scrolled ? 'text-walnut-500 hover:text-walnut-800' : 'text-white/60 hover:text-white'
                            }`}
                        >
                            About
                        </a>
                        <a 
                            href="#features" 
                            className={`text-sm font-medium transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1 ${
                                scrolled ? 'text-walnut-500 hover:text-walnut-800' : 'text-white/60 hover:text-white'
                            }`}
                        >
                            Features
                        </a>
                        <a 
                            href="https://app.gold.fi" 
                            className="btn-gold text-sm py-2.5 px-7 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent"
                            aria-label="Open Gold.fi app"
                        >
                            Open App →
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className={`w-6 h-6 transition-colors ${scrolled ? 'text-walnut-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="md:hidden pb-6 pt-2 bg-walnut-50/95 backdrop-blur-xl rounded-2xl mt-1 px-2" 
                            role="menu" 
                            aria-label="Mobile navigation"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                        <nav className="flex flex-col gap-1">
                            {['About', 'Features'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-walnut-600 hover:text-walnut-900 hover:bg-walnut-100/50 transition-colors py-3 px-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-walnut-50"
                                    onClick={() => setIsMenuOpen(false)}
                                    role="menuitem"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="mt-3 px-4">
                                <a
                                    href="https://app.gold.fi"
                                    className="btn-gold block text-center py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-walnut-50"
                                    onClick={() => setIsMenuOpen(false)}
                                    role="menuitem"
                                    aria-label="Open Gold.fi app"
                                >
                                    Open App →
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
        </>
    )
}

export default Navbar
