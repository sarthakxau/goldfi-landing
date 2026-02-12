import React, { useState } from 'react';

const GoldBar3D = () => {
    const [isHovered, setIsHovered] = useState(false);

    const goldGradients = {
        // More vibrant, multi-stop gold gradients
        primary: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        side: 'linear-gradient(to bottom, #8A6E2F, #C3A343, #8A6E2F)',
        highlight: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%)',
    };

    const styles = {
        scene: {
            perspective: '1200px',
            width: '300px',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        barContainer: {
            width: '180px',
            height: '260px',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: isHovered
                ? 'rotateX(-25deg) rotateY(45deg) scale(1.1)'
                : 'rotateX(-20deg) rotateY(-30deg)',
            animation: isHovered
                ? 'float-rotate-fast 4s infinite ease-in-out'
                : 'float-rotate 8s infinite ease-in-out',
        },
        face: {
            background: goldGradients.primary,
            position: 'absolute',
            border: '1px solid rgba(139, 69, 19, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.15)',
            backfaceVisibility: 'hidden',
        },
        front: { width: '180px', height: '260px', transform: 'translateZ(30px)', background: goldGradients.primary },
        back: { width: '180px', height: '260px', transform: 'translateZ(-30px) rotateY(180deg)', background: goldGradients.primary },
        right: { width: '60px', height: '260px', transform: 'rotateY(90deg) translateZ(150px)', background: goldGradients.side },
        left: { width: '60px', height: '260px', transform: 'rotateY(-90deg) translateZ(30px)', background: goldGradients.side },
        top: { width: '180px', height: '60px', transform: 'rotateX(90deg) translateZ(30px)', background: 'linear-gradient(to bottom, #FFF7A8, #B38728)' },
        bottom: { width: '180px', height: '60px', transform: 'rotateX(-90deg) translateZ(230px)', background: '#8A6E2F' },
        engraving: {
            border: '2px solid rgba(101, 67, 33, 0.5)',
            padding: '15px',
            width: '85%',
            height: '85%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'rgba(80, 40, 20, 0.7)',
            fontFamily: '"Times New Roman", serif',
            textShadow: '1px 1px 0px rgba(255,255,255,0.2)',
        },
        shimmer: {
            position: 'absolute',
            inset: 0,
            background: goldGradients.highlight,
            pointerEvents: 'none',
        }
    };

    return (
        <div
            style={styles.scene}
            className="scale-110 md:scale-125"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.barContainer}>
                {/* Front Face */}
                <div style={{ ...styles.face, ...styles.front }}>
                    <div style={styles.shimmer}></div>
                    <div style={styles.engraving}>
                        <div className="text-xs tracking-[0.2em] font-bold mt-4">FINE GOLD</div>
                        <div className="text-4xl font-serif font-black tracking-tighter">999.9</div>
                        <div className="w-12 h-12 border-2 border-[rgba(80,40,20,0.5)] rounded-full grid place-items-center font-bold text-sm mb-4">
                            GC
                        </div>
                    </div>
                </div>
                {/* Other faces */}
                <div style={{ ...styles.face, ...styles.back }}></div>
                <div style={{ ...styles.face, ...styles.right }}><div style={styles.shimmer}></div></div>
                <div style={{ ...styles.face, ...styles.left }}><div style={styles.shimmer}></div></div>
                <div style={{ ...styles.face, ...styles.top }}><div style={styles.shimmer}></div></div>
                <div style={{ ...styles.face, ...styles.bottom }}></div>
            </div>

            {/* In-component extra keyframes for the fast hover float */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float-rotate-fast {
                    0% { transform: rotateX(-20deg) rotateY(30deg) translateY(0px) scale(1.1); }
                    50% { transform: rotateX(-30deg) rotateY(60deg) translateY(-30px) scale(1.1); }
                    100% { transform: rotateX(-20deg) rotateY(30deg) translateY(0px) scale(1.1); }
                }
            `}} />
        </div>
    );
};

export default GoldBar3D;
