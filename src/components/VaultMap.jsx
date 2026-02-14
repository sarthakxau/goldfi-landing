import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const vaults = [
    { name: 'Zurich', country: 'Switzerland', lat: 47.3769, lng: 8.5417, level: 'Tier 1' },
    { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, level: 'Tier 1' },
    { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, level: 'Tier 1' },
    { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, level: 'Tier 1' },
]

function VaultMap() {
    const [hoveredVault, setHoveredVault] = useState(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    // Simple SVG world map with vault locations
    const getVaultPosition = (vault) => {
        // Convert lat/lng to SVG coordinates (simplified)
        const x = ((vault.lng + 180) / 360) * 100
        const y = ((90 - vault.lat) / 180) * 100
        return { x, y }
    }

    return (
        <section className="py-20 lg:py-28 dark-section relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
            <div className="relative max-w-6xl mx-auto px-5 sm:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 lg:mb-16"
                >
                    <motion.div 
                        className="w-10 h-[2px] bg-gold mb-8"
                        initial={{ width: 0, opacity: 0 }}
                        animate={isInView ? { width: 40, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-walnut-50 tracking-tight mb-4">
                        Vault locations. <span className="gold-text">Worldwide.</span>
                    </h2>
                    <p className="text-lg text-walnut-400 max-w-2xl font-light">
                        Your gold is held in audited vaults across the globe, managed by Tether.
                    </p>
                </motion.div>

                <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10">
                    {/* Simplified World Map */}
                    <div className="relative w-full h-[400px] sm:h-[500px] mb-8">
                        <svg
                            viewBox="0 0 100 50"
                            className="w-full h-full"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            {/* Simplified continents */}
                            <path
                                d="M 20 25 Q 30 20 40 25 Q 50 30 60 25 Q 70 20 80 25 L 80 35 Q 70 40 60 35 Q 50 40 40 35 Q 30 40 20 35 Z"
                                fill="rgba(255,255,255,0.05)"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="0.5"
                            />
                            
                            {/* Vault locations */}
                            {vaults.map((vault, i) => {
                                const pos = getVaultPosition(vault)
                                return (
                                    <g key={i}>
                                        {/* Pulsing circle */}
                                        <motion.circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="1.5"
                                            fill="#D4A93A"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={isInView ? { 
                                                scale: [1, 1.5, 1],
                                                opacity: [0.8, 0.4, 0.8]
                                            } : {}}
                                            transition={{ 
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.3,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        {/* Outer pulse */}
                                        <motion.circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="2"
                                            fill="none"
                                            stroke="#D4A93A"
                                            strokeWidth="0.3"
                                            opacity="0.5"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={isInView ? { 
                                                scale: [1, 2, 1],
                                                opacity: [0.5, 0, 0.5]
                                            } : {}}
                                            transition={{ 
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.3,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </g>
                                )
                            })}
                        </svg>

                        {/* Vault list */}
                        <div className="absolute bottom-0 left-0 right-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                            {vaults.map((vault, i) => {
                                const pos = getVaultPosition(vault)
                                return (
                                    <motion.div
                                        key={i}
                                        className="glass-card p-4 cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        onMouseEnter={() => setHoveredVault(i)}
                                        onMouseLeave={() => setHoveredVault(null)}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className={`w-2 h-2 rounded-full bg-gold ${hoveredVault === i ? 'animate-pulse' : ''}`} />
                                            <h3 className="font-semibold text-walnut-100">{vault.name}</h3>
                                        </div>
                                        <p className="text-xs text-walnut-400">{vault.country}</p>
                                        <p className="text-xs text-gold mt-1">{vault.level}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VaultMap
