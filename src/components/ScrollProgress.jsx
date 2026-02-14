import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValue } from 'framer-motion'

function ScrollProgress() {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollYProgress } = useScroll()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setProgress(latest)
        })
        return unsubscribe
    }, [scrollYProgress])

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial state
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <>
            {/* Top progress bar only */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gold/20 z-[10000] origin-left"
                style={{ scaleX: scrollYProgress }}
            />
        </>
    )
}

export default ScrollProgress
