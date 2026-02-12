import React from 'react';

const CTASection = () => {
    return (
        <section className="bg-ink text-bg py-16 md:py-24 px-6 md:px-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FF7722 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="inline-block border border-[#FF7722] text-[#FF7722] px-4 py-1 text-[10px] md:text-xs font-mono mb-6 md:mb-8 uppercase tracking-widest">Limited Access</div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase mb-6 md:mb-12 leading-[0.9]">
                    Join the gold<br /> revolution.
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://app.gold.fi" className="bg-[#FF7722] text-bg border border-[#FF7722] px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-bg hover:text-[#FF7722] transition-all transform hover:-translate-y-1 inline-block text-center decoration-none">
                        Open App
                    </a>
                    <button className="bg-transparent text-bg border border-bg px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-bg hover:text-ink transition-all transform hover:-translate-y-1">
                        Download for Mobile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
