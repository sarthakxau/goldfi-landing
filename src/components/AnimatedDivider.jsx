import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedDivider({ className = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            className={`h-[2px] bg-gold ${className}`}
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 40, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
    )
}

export default AnimatedDivider
