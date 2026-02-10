function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 border-t border-black/[0.06]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gold rounded-full flex items-center justify-center">
                            <span className="text-white font-display font-bold text-xs">G</span>
                        </div>
                        <span className="font-display font-semibold text-lg text-dark">gold.fi</span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <a href="#" className="text-dark-secondary hover:text-dark transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-dark-secondary hover:text-dark transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-dark-secondary hover:text-dark transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-dark-secondary/60">
                        &copy; {currentYear} gold.fi
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
