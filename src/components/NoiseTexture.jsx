import { useEffect, useRef } from 'react'

function NoiseTexture() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Generate noise
        const imageData = ctx.createImageData(canvas.width, canvas.height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
            const value = Math.random() * 255
            data[i] = value     // R
            data[i + 1] = value // G
            data[i + 2] = value // B
            data[i + 3] = 5    // A (very low opacity)
        }

        ctx.putImageData(imageData, 0, 0)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
            style={{ zIndex: 5 }}
        />
    )
}

export default NoiseTexture
