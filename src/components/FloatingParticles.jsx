import { useEffect, useRef } from 'react'

function FloatingParticles() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        const particles = []
        const particleCount = 30

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedY: Math.random() * 0.5 + 0.2,
                speedX: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.2,
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                particle.y -= particle.speedY
                particle.x += particle.speedX

                if (particle.y < 0) {
                    particle.y = canvas.height
                    particle.x = Math.random() * canvas.width
                }
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.speedX *= -1
                }

                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(212, 169, 58, ${particle.opacity})`
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
        />
    )
}

export default FloatingParticles
