import React from 'react';

const CTASection = () => {
    return (
        <section className="bg-ink text-bg py-24 px-6 md:px-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FF7722 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="inline-block border border-[#FF7722] text-[#FF7722] px-4 py-1 text-xs font-mono mb-8 uppercase tracking-widest">Limited Access</div>
                <h2 className="text-5xl md:text-7xl font-bold uppercase mb-8 leading-[0.9]">
                    Join the gold<br /> revolution.
                </h2>
                <p className="text-lg md:text-xl opacity-80 mb-12 max-w-xl mx-auto">
                    Download the app today and receive your first 10mg of Digital Gold for free.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-[#FF7722] text-bg border border-[#FF7722] px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-bg hover:text-[#FF7722] transition-all transform hover:-translate-y-1">
                        Download for iOS
                    </button>
                    <button className="bg-transparent text-bg border border-bg px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-bg hover:text-ink transition-all transform hover:-translate-y-1">
                        Download for Android
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
