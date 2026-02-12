import React from 'react';
import useLivePrices from '../hooks/useLivePrices';

const TickerBand = () => {
    const { gold, silver, goldPctChange, silverPctChange, loading } = useLivePrices();

    const goldDisplay = gold ? `₹${gold.toLocaleString('en-IN', { maximumFractionDigits: 2 })}` : '...';
    const goldChangeDisplay = goldPctChange ? `(${goldPctChange > 0 ? '+' : ''}${goldPctChange.toFixed(2)}%)` : '';

    const silverDisplay = silver ? `₹${silver.toLocaleString('en-IN', { maximumFractionDigits: 2 })}` : '...';
    const silverChangeDisplay = silverPctChange ? `(${silverPctChange > 0 ? '+' : ''}${silverPctChange.toFixed(2)}%)` : '';

    const tickerText = loading
        ? "INITIALIZING LIVE MARKET DATA • PLEASE WAIT • "
        : `LIVE MARKET: GOLD ${goldDisplay} ${goldChangeDisplay} •  SILVER ${silverDisplay} ${silverChangeDisplay} • `;

    return (
        <div className="border-b border-ink py-3 overflow-hidden bg-ink text-bg font-mono text-xs md:text-sm uppercase tracking-widest">
            <div className="whitespace-nowrap">
                <div className="inline-block animate-[ticker_20s_linear_infinite]">
                    {tickerText.repeat(10)}
                </div>
            </div>
        </div>
    );
};

export default TickerBand;
