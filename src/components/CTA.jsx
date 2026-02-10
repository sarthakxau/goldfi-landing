function CTA() {
    return (
        <section id="download" className="py-24 lg:py-32">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark mb-5 tracking-tight leading-[1.1]">
                    Your gold.{' '}
                    <span className="gold-text">Your keys.</span>
                </h2>
                <p className="text-lg sm:text-xl text-dark-secondary mb-10 max-w-xl mx-auto">
                    No custody fees. No walled gardens. Gold that works.
                </p>

                {/* CTA Button */}
                <a
                    href="#"
                    className="btn-gold inline-flex items-center gap-2 text-base py-3.5 px-8"
                >
                    Download Gold.fi
                    <span className="text-lg">→</span>
                </a>

                {/* Trust line */}
                <p className="mt-8 text-sm text-dark-secondary/60 tracking-wide">
                    Built on Tether Gold (XAUT) · Self-custody · 24K · Swiss vaulted
                </p>
            </div>
        </section>
    )
}

export default CTA
