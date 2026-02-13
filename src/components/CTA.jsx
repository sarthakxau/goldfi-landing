function CTA() {
    return (
        <section id="download" className="relative py-28 lg:py-36 bg-walnut-900 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gold/[0.03] rounded-full blur-[80px]" />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-walnut-50 mb-5 tracking-tight leading-[1.1]">
                    Your gold.{' '}
                    <span className="gold-text">Your keys.</span>
                </h2>
                <p className="text-lg sm:text-xl text-walnut-300 mb-10 max-w-xl mx-auto font-light">
                    No custody fees. No walled gardens. Gold that works.
                </p>

                {/* CTA Button */}
                <a
                    href="https://app.gold.fi"
                    className="btn-gold inline-flex items-center gap-2 text-base py-3.5 px-8"
                >
                    Open Gold.fi
                    <span className="text-lg">→</span>
                </a>

                {/* Trust line */}
                <p className="mt-10 text-sm text-walnut-500 tracking-wide">
                    Built on Tether Gold (XAUT) · Self-custody · 24K · Swiss vaulted
                </p>
            </div>
        </section>
    )
}

export default CTA
