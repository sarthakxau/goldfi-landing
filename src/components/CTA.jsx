function CTA() {
    return (
        <section id="download" className="py-20 bg-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                    Start Your <span className="text-gold-light">Gold Journey</span> Today
                </h2>
                <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                    Download the gold.fi app and get ₹50 worth of gold absolutely free
                    when you make your first investment.
                </p>

                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#"
                        className="group inline-flex items-center justify-center gap-3 bg-white text-dark px-6 py-4 rounded-xl hover:bg-white/90 transition-all"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        <div className="text-left">
                            <p className="text-xs text-dark-secondary">Download on the</p>
                            <p className="text-lg font-semibold -mt-1">App Store</p>
                        </div>
                    </a>

                    <a
                        href="#"
                        className="group inline-flex items-center justify-center gap-3 bg-white text-dark px-6 py-4 rounded-xl hover:bg-white/90 transition-all"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                        </svg>
                        <div className="text-left">
                            <p className="text-xs text-dark-secondary">Get it on</p>
                            <p className="text-lg font-semibold -mt-1">Google Play</p>
                        </div>
                    </a>
                </div>

                {/* QR Code hint */}
                <p className="mt-8 text-sm text-white/50">
                    Or scan the QR code on our app to get started instantly
                </p>
            </div>
        </section>
    )
}

export default CTA
