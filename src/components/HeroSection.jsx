import React from 'react';
import GoldBar3D from './GoldBar3D';

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-ink">
            <div className="lg:col-span-7 flex flex-col justify-center px-6 py-12 md:px-12 md:py-24 border-b lg:border-b-0 lg:border-r border-ink bg-bg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7722] to-transparent"></div>

                <div className="opacity-0 animate-[reveal_0.8s_forwards]">
                    <span className="font-mono text-[#FF7722] text-[10px] md:text-xs mb-4 block tracking-widest">EST. 2026 — BOMBAY</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight mb-6 md:mb-8 text-ink">
                        Grow your <br />
                        wealth in <br />
                        <span className="text-[#FF7722]">Gold.</span>
                    </h1>
                    <p className="text-base md:text-xl max-w-md mb-8 md:mb-10 leading-relaxed font-medium text-ink">
                        Earn, save, and send the world's hardest asset to anyone in India with zero friction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://app.gold.fi" className="bg-ink text-bg px-6 py-3 md:px-8 md:py-4 font-bold text-sm uppercase tracking-wider border border-ink transition-all hover:bg-[#FF7722] hover:text-bg hover:border-[#FF7722] inline-block text-center decoration-none">
                            Open The App
                        </a>

                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 bg-[#F5F2E8] flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-auto relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
                    <div className="border-r border-ink"></div><div className="border-r border-ink"></div>
                    <div className="border-r border-ink"></div><div className="border-r border-ink"></div>
                    <div className="border-r border-ink"></div><div className="border-r border-ink"></div>
                </div>

                <GoldBar3D />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex justify-between font-mono text-[10px] sm:text-xs opacity-60 text-ink">
                    <span>ASSET: XAU</span>
                    <span>WEIGHT: 1KG</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
