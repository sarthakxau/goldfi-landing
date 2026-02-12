import React from 'react';

const TickerBand = () => {
    const tickerText = "LIVE MARKET: GOLD ₹5,840.00 (+1.2%) •  SILVER ₹72.40 (-0.4%) •  SGB-2028 ₹128.50 (+0.1%) • ";

    return (
        <div className="border-b border-ink py-3 overflow-hidden bg-ink text-bg font-mono text-xs md:text-sm uppercase tracking-widest">
            <div className="whitespace-nowrap">
                <div className="inline-block animate-[ticker_20s_linear_infinite]">
                    {tickerText.repeat(3)}
                </div>
            </div>
        </div>
    );
};

export default TickerBand;
