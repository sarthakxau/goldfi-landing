import { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-walnut-50/90 backdrop-blur-md border-b border-walnut-200/60">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                            <span className="text-white font-display font-bold text-base">G</span>
                        </div>
                        <span className="font-display font-bold text-xl text-walnut-800 tracking-tight">gold.fi</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm font-medium text-walnut-500 hover:text-walnut-800 transition-colors">
                            Features
                        </a>
                        <a href="#about" className="text-sm font-medium text-walnut-500 hover:text-walnut-800 transition-colors">
                            About
                        </a>
                        <a href="https://app.gold.fi" className="btn-gold text-sm py-2 px-5">
                            Open Gold.fi
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-walnut-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-walnut-200/60">
                        <div className="flex flex-col gap-4">
                            <a
                                href="#features"
                                className="font-medium text-walnut-500 hover:text-walnut-800 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#about"
                                className="font-medium text-walnut-500 hover:text-walnut-800 transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#download"
                                className="btn-gold text-center py-3"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Early Access
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
