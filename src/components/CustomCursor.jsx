import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Only enable on desktop
        if (window.innerWidth < 768) {
            setIsVisible(false)
            return
        }

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            setIsVisible(true)
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        // Check for interactive elements
        const handleMouseOver = (e) => {
            const target = e.target
            const isInteractive = 
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.closest('.btn-gold') ||
                target.closest('.btn-outline-gold') ||
                getComputedStyle(target).cursor === 'pointer'
            
            setIsHovering(isInteractive)
        }

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [])

    if (!isVisible) return null

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
                animate={{
                    x: '-50%',
                    y: '-50%',
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                }}
            >
                <div
                    className={`rounded-full transition-all duration-300 ${
                        isHovering
                            ? 'w-8 h-8 border-2 border-gold bg-gold/20'
                            : 'w-4 h-4 border border-gold/50 bg-transparent'
                    }`}
                />
            </motion.div>

            {/* Trailing cursor with lag */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
                animate={{
                    x: '-50%',
                    y: '-50%',
                    scale: isHovering ? 1.8 : 1.2,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                }}
            >
                <div
                    className={`rounded-full transition-all duration-500 ${
                        isHovering
                            ? 'w-12 h-12 border border-gold/30 bg-gold/5'
                            : 'w-6 h-6 border border-gold/20 bg-gold/5'
                    }`}
                />
            </motion.div>
        </>
    )
}

export default CustomCursor
