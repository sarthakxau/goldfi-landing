import React from 'react';

const ComparisonTable = () => {
    return (
        <section className="py-20 px-6 md:px-12 border-b border-ink bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-center text-ink">How it compares.</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-ink text-xs uppercase tracking-widest text-ink text-opacity-60">
                                <th className="py-4 px-4 font-normal w-1/5">Feature</th>
                                <th className="py-4 px-4 text-[#CD7F32] font-bold w-1/5 bg-bg">The Gold Co.</th>
                                <th className="py-4 px-4 font-normal w-1/5 opacity-60">Digital Gold</th>
                                <th className="py-4 px-4 font-normal w-1/5 opacity-60">Gold ETFs</th>
                                <th className="py-4 px-4 font-normal w-1/5 opacity-60">Physical</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-ink">
                            <tr className="border-b border-gray-200 hover:bg-bg">
                                <td className="py-6 px-4 font-bold">Custody fees</td>
                                <td className="py-6 px-4 text-[#CD7F32] font-bold bg-bg">None</td>
                                <td className="py-6 px-4 opacity-70">3-5% premium</td>
                                <td className="py-6 px-4 opacity-70">0.4% / yr</td>
                                <td className="py-6 px-4 opacity-70">0.5-1.5% / yr</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-bg">
                                <td className="py-6 px-4 font-bold">Yield</td>
                                <td className="py-6 px-4 text-[#CD7F32] font-bold bg-bg">3-5% APY</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-bg">
                                <td className="py-6 px-4 font-bold">Borrow</td>
                                <td className="py-6 px-4 text-[#CD7F32] font-bold bg-bg">Instant, on-chain</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-70">Margin only</td>
                                <td className="py-6 px-4 opacity-70">Banks only</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-bg">
                                <td className="py-6 px-4 font-bold">Transfer</td>
                                <td className="py-6 px-4 text-[#CD7F32] font-bold bg-bg">Anyone, instantly</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-70">In person</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-bg">
                                <td className="py-6 px-4 font-bold">Spend</td>
                                <td className="py-6 px-4 text-[#CD7F32] font-bold bg-bg">Debit Card</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-bg">
                                <td className="py-6 px-4 font-bold">Self-custody</td>
                                <td className="py-6 px-4 text-[#CD7F32] font-bold bg-bg">✓</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-70">✓</td>
                            </tr>
                            <tr className="hover:bg-bg">
                                <td className="py-6 px-4 font-bold">Redeem physical</td>
                                <td className="py-6 px-4 text-[#CD7F32] font-bold bg-bg">Partner jewelers</td>
                                <td className="py-6 px-4 opacity-70">✓</td>
                                <td className="py-6 px-4 opacity-40">✕</td>
                                <td className="py-6 px-4 opacity-40">—</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
