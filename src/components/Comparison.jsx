const rows = [
    {
        feature: 'Custody fees',
        goldfi: 'None',
        digital: '3–5% premium',
        etfs: '0.4% / yr',
        physical: '0.5–1.5% / yr',
    },
    {
        feature: 'Yield',
        goldfi: '3–5% APY',
        digital: null,
        etfs: null,
        physical: null,
    },
    {
        feature: 'Borrow',
        goldfi: 'Instant, on-chain',
        digital: null,
        etfs: 'Margin only',
        physical: 'Banks only',
    },
    {
        feature: 'Transfer',
        goldfi: 'Anyone, instantly',
        digital: null,
        etfs: null,
        physical: 'In person',
    },
    {
        feature: 'Spend',
        goldfi: 'Card',
        digital: null,
        etfs: null,
        physical: null,
    },
    {
        feature: 'Self-custody',
        goldfi: true,
        digital: null,
        etfs: null,
        physical: true,
    },
    {
        feature: 'Redeem physical',
        goldfi: 'Partner jewelers',
        digital: true,
        etfs: null,
        physical: '—',
    },
]

function CellValue({ value }) {
    if (value === null) {
        return <span className="text-dark-secondary/40">✕</span>
    }
    if (value === true) {
        return <span className="text-gold">✓</span>
    }
    return <span>{value}</span>
}

function Comparison() {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-dark mb-12 lg:mb-16 tracking-tight">
                    How it compares.
                </h2>

                {/* Desktop Table */}
                <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs uppercase tracking-widest">
                                <th className="pb-4 pr-6 font-medium text-dark-secondary/60 w-[160px]"></th>
                                <th className="pb-4 pr-6 font-semibold text-gold">Gold.fi</th>
                                <th className="pb-4 pr-6 font-medium text-dark-secondary/60">Digital Gold</th>
                                <th className="pb-4 pr-6 font-medium text-dark-secondary/60">Gold ETFs</th>
                                <th className="pb-4 font-medium text-dark-secondary/60">Physical</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm sm:text-base">
                            {rows.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-black/[0.06] group"
                                >
                                    <td className="py-4 pr-6 text-dark font-medium">{row.feature}</td>
                                    <td className="py-4 pr-6 text-gold font-medium">
                                        <CellValue value={row.goldfi} />
                                    </td>
                                    <td className="py-4 pr-6 text-dark-secondary">
                                        <CellValue value={row.digital} />
                                    </td>
                                    <td className="py-4 pr-6 text-dark-secondary">
                                        <CellValue value={row.etfs} />
                                    </td>
                                    <td className="py-4 text-dark-secondary">
                                        <CellValue value={row.physical} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="sm:hidden space-y-4">
                    {rows.map((row, index) => (
                        <div key={index} className="border-t border-black/[0.06] pt-4">
                            <p className="text-sm font-medium text-dark mb-2">{row.feature}</p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-gold/70 block mb-0.5">Gold.fi</span>
                                    <span className="text-gold font-medium"><CellValue value={row.goldfi} /></span>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-dark-secondary/50 block mb-0.5">Digital Gold</span>
                                    <span className="text-dark-secondary"><CellValue value={row.digital} /></span>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-dark-secondary/50 block mb-0.5">Gold ETFs</span>
                                    <span className="text-dark-secondary"><CellValue value={row.etfs} /></span>
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-dark-secondary/50 block mb-0.5">Physical</span>
                                    <span className="text-dark-secondary"><CellValue value={row.physical} /></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Comparison
