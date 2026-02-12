import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-ink">
            <div className="p-6 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-ink bg-bg">
                <span className="inline-block w-12 h-1 bg-[#FF7722] mb-6 md:mb-8"></span>
                <h2 className="text-3xl md:text-5xl font-bold uppercase leading-none mb-4 md:mb-6 text-ink">
                    The gold account <br />for modern India.
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-md text-ink">
                    Buy gold directly with UPI and earn up to <span className="bg-[#FF7722] text-bg px-1 whitespace-nowrap">5% returns</span> on your holdings, annually. No lock-in periods.
                </p>

                <div className="mt-8 border border-ink p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,77,77,1)]">
                    <div className="flex justify-between items-end mb-4 font-mono text-xs">
                        <span className="opacity-60 text-ink">YIELD GENERATION</span>
                        <span className="text-[#FF7722]">+5.0% APY</span>
                    </div>
                    <div className="h-32 flex items-end gap-1">
                        <div className="w-1/6 bg-ink opacity-20 h-[30%] animate-[pulse_3s_ease-in-out_infinite]"></div>
                        <div className="w-1/6 bg-ink opacity-40 h-[45%] animate-[pulse_3s_ease-in-out_0.5s_infinite]"></div>
                        <div className="w-1/6 bg-ink opacity-60 h-[55%] animate-[pulse_3s_ease-in-out_1s_infinite]"></div>
                        <div className="w-1/6 bg-ink opacity-80 h-[70%] animate-[pulse_3s_ease-in-out_1.5s_infinite]"></div>
                        <div className="w-1/6 bg-ink h-[85%] animate-[pulse_3s_ease-in-out_2s_infinite]"></div>
                        <div className="w-1/6 bg-[#FF7722] h-[100%]"></div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9FAF2]">
                <div className="p-8 md:p-12 border-b border-ink flex gap-6 hover:bg-white transition-colors group">
                    <div className="font-serif text-4xl text-[#CD7F32] w-16 group-hover:scale-110 transition-transform">0%</div>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-2 text-ink">No custody fees</h3>
                        <p className="opacity-80 leading-relaxed text-ink">Real gold backed by Swiss reserves. We secure your assets without eating into your profits.</p>
                    </div>
                </div>

                <div className="p-8 md:p-12 border-b border-ink flex gap-6 hover:bg-white transition-colors group">
                    <div className="font-serif text-4xl text-[#CD7F32] w-16 group-hover:scale-110 transition-transform">5%</div>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-2 text-ink">Earn on gold</h3>
                        <p className="opacity-80 leading-relaxed text-ink">Multiply your savings and secure your future with industry-leading yields on your gold holdings.</p>
                    </div>
                </div>

                <div className="p-8 md:p-12 border-b border-ink flex gap-6 hover:bg-white transition-colors group">
                    <div className="font-serif text-4xl text-[#CD7F32] w-16 group-hover:scale-110 transition-transform">₹10</div>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-2 text-ink">Buy with UPI</h3>
                        <p className="opacity-80 leading-relaxed text-ink">Start your gold investment journey from as little as ₹10/day. Accessible to everyone.</p>
                    </div>
                </div>

                <div className="p-8 md:p-12 flex gap-6 hover:bg-white transition-colors group">
                    <div className="font-serif text-4xl text-[#CD7F32] w-16 group-hover:scale-110 transition-transform">→</div>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-2 text-ink">Send gold instantly</h3>
                        <p className="opacity-80 leading-relaxed text-ink">Send and gift gold to your loved ones as easy as sending a text message. Instant settlement.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
