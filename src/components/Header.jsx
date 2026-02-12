import React from 'react';
import Clock from './Clock';
import useLivePrices from '../hooks/useLivePrices';

const Header = () => {
    const { gold, loading, lastUpdated } = useLivePrices();

    const priceDisplay = loading || !gold ? 'LOADING...' : `₹ ${gold.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;

    return (
        <header className="sticky top-0 z-50 bg-bg border-b-2 border-ink px-4 py-3 md:px-8 md:py-4">
            {/* Desktop layout */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="font-bold leading-none text-xs sm:text-sm md:text-base tracking-tight text-ink">
                        THE GOLD CO.<br />OF BOMBAY
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8 text-xs font-mono">
                    <div className="text-right text-ink">
                        <div className="opacity-60">BOMBAY</div>
                        <Clock />
                    </div>
                    <div className="text-right">
                        <div className="opacity-60 text-ink">GOLD/INR</div>
                        <div
                            key={lastUpdated}
                            className={`text-[#FF7722] font-bold ${lastUpdated ? 'price-shimmer' : ''}`}
                        >
                            {priceDisplay}
                        </div>
                    </div>
                </div>

                <a href="https://app.gold.fi" className="bg-ink text-bg px-4 py-2 md:px-6 md:py-3 font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-[#FF7722] transition-colors inline-block text-center decoration-none">
                    Open App
                </a>
            </div>

            {/* Mobile price strip */}
            <div className="flex md:hidden justify-between items-center mt-2 pt-2 border-t border-ink/20 text-[10px] font-mono">
                <div className="flex items-center gap-1 text-ink">
                    <span className="opacity-60">BOMBAY</span>
                    <Clock />
                </div>
                <div
                    key={`mobile-${lastUpdated}`}
                    className={`text-[#FF7722] font-bold ${lastUpdated ? 'price-shimmer' : ''}`}
                >
                    GOLD {priceDisplay}
                </div>
            </div>
        </header>
    );
};

export default Header;
