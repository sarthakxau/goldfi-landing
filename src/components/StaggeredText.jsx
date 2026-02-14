import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function StaggeredText({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    
    const words = children.split(' ')

    return (
        <motion.span
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: delay + i * 0.05,
                                duration: 0.3,
                            },
                        },
                    }}
                    className="inline-block"
                >
                    {word}
                    {i < words.length - 1 && '\u00A0'}
                </motion.span>
            ))}
        </motion.span>
    )
}

export default StaggeredText
