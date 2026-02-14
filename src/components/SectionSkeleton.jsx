function SectionSkeleton({ type = 'default' }) {
    if (type === 'chart') {
        return (
            <div className="py-20 lg:py-28 dark-section relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                    <div className="mb-12 lg:mb-16">
                        <div className="h-[2px] w-10 bg-walnut-700/30 mb-8 animate-pulse" />
                        <div className="h-12 w-96 bg-walnut-700/30 rounded mb-4 animate-pulse" />
                        <div className="h-6 w-64 bg-walnut-700/20 rounded animate-pulse" />
                    </div>
                    <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl">
                        <div className="h-[400px] bg-walnut-700/20 rounded-lg mb-8 animate-pulse" />
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="h-24 bg-walnut-700/20 rounded-lg animate-pulse" />
                            <div className="h-24 bg-walnut-700/20 rounded-lg animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (type === 'features') {
        return (
            <div className="py-20 lg:py-28">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                    <div className="mb-12 lg:mb-16">
                        <div className="h-[2px] w-10 bg-walnut-200 mb-8 animate-pulse" />
                        <div className="h-12 w-80 bg-walnut-200 rounded mb-4 animate-pulse" />
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-20 bg-walnut-100 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (type === 'cards') {
        return (
            <div className="py-20 lg:py-28">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                    <div className="mb-12 lg:mb-16">
                        <div className="h-[2px] w-10 bg-walnut-200 mb-8 animate-pulse" />
                        <div className="h-12 w-96 bg-walnut-200 rounded mb-4 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-48 bg-white rounded-2xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Default skeleton
    return (
        <div className="py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="mb-12">
                    <div className="h-[2px] w-10 bg-walnut-200 mb-8 animate-pulse" />
                    <div className="h-12 w-80 bg-walnut-200 rounded mb-4 animate-pulse" />
                    <div className="h-6 w-96 bg-walnut-100 rounded animate-pulse" />
                </div>
                <div className="h-64 bg-walnut-100 rounded-2xl animate-pulse" />
            </div>
        </div>
    )
}

export default SectionSkeleton
