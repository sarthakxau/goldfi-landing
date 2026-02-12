import React from 'react';
import Clock from './Clock';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-bg border-b-2 border-ink flex justify-between items-center px-6 py-4 md:px-8">
            <div className="flex items-center gap-4">
                <div className="font-bold leading-none text-sm md:text-base tracking-tight text-ink">
                    THE GOLD<br />COMPANY<br />OF BOMBAY
                </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-xs font-mono">
                <div className="text-right text-ink">
                    <div className="opacity-60">BOM/MUMBAI</div>
                    <Clock />
                </div>
                <div className="text-right">
                    <div className="opacity-60 text-ink">GOLD/INR</div>
                    <div className="text-[#FF7722] font-bold">₹ 5,840.00</div>
                </div>
            </div>

            <button className="bg-ink text-bg px-6 py-3 font-bold text-xs uppercase tracking-wider hover:bg-[#FF7722] transition-colors">
                Open App
            </button>
        </header>
    );
};

export default Header;
