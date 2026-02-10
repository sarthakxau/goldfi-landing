const features = [
    {
        stat: '0%',
        title: 'No custody fees',
        description: 'On-chain gold, not a rented vault. No storage premium.',
    },
    {
        stat: '3–5%',
        title: 'Yield on gold',
        description: 'Institutional lending. Paid in gold.',
    },
    {
        stat: '60%',
        title: 'Borrow against it',
        description: 'Stablecoin liquidity. No credit checks.',
    },
    {
        stat: '₹10',
        title: 'Buy with UPI',
        description: 'As easy as sending a payment.',
    },
    {
        stat: '→',
        title: 'Send gold instantly',
        description: 'To anyone. Peer-to-peer. On-chain.',
    },
    {
        stat: '◆',
        title: 'Spend with a card',
        description: 'Spend your gold. Live spot rate.',
    },
]

function Features() {
    return (
        <section id="features" className="py-4 lg:py-6">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Features List */}
                <div className="divide-y divide-walnut-200/60">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-row py-6 sm:py-8 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-0"
                        >
                            <div className="sm:w-32 lg:w-40 flex-shrink-0">
                                <span className="text-2xl sm:text-3xl lg:text-[2.25rem] font-display font-medium gold-text leading-none">
                                    {feature.stat}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-display font-semibold text-walnut-800 mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base text-walnut-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
