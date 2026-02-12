import React from 'react';

const customStyles = {
    scene: {
        perspective: '1000px',
        width: '300px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    barContainer: {
        width: '160px',
        height: '240px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(-20deg) rotateY(-30deg)',
        animation: 'float-rotate 8s infinite ease-in-out',
    },
    face: {
        background: 'linear-gradient(135deg, #CD7F32 0%, #B87333 20%, #E3963E 40%, #8B4513 60%, #B87333 80%, #F5F5F5 100%)',
        position: 'absolute',
        border: '1px solid rgba(139, 69, 19, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
    },
    front: { width: '160px', height: '240px', transform: 'translateZ(25px)' },
    back: { width: '160px', height: '240px', transform: 'translateZ(-25px) rotateY(180deg)' },
    right: { width: '50px', height: '240px', transform: 'rotateY(90deg) translateZ(135px)', background: 'linear-gradient(to right, #8B4513, #CD7F32)' },
    left: { width: '50px', height: '240px', transform: 'rotateY(-90deg) translateZ(25px)', background: 'linear-gradient(to right, #CD7F32, #8B4513)' },
    top: { width: '160px', height: '50px', transform: 'rotateX(90deg) translateZ(25px)', background: 'linear-gradient(to bottom, #FFFDF5, #B87333)' },
    bottom: { width: '160px', height: '50px', transform: 'rotateX(-90deg) translateZ(215px)' },
    engraving: {
        border: '2px solid rgba(80, 40, 0, 0.4)',
        padding: '10px',
        width: '80%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'rgba(60, 30, 0, 0.8)',
        fontFamily: '"Times New Roman", serif',
    },
};

const GoldBar3D = () => {
    return (
        <div style={customStyles.scene} className="scale-125 md:scale-150">
            <div style={customStyles.barContainer}>
                <div style={{ ...customStyles.face, ...customStyles.front }}>
                    <div style={customStyles.engraving}>
                        <div className="text-xs tracking-widest mt-2">FINE GOLD</div>
                        <div className="text-3xl font-serif font-bold">999.9</div>
                        <div className="w-10 h-10 border-2 border-current rounded-full grid place-items-center font-bold text-xs mb-2">GC</div>
                    </div>
                </div>
                <div style={{ ...customStyles.face, ...customStyles.back }}></div>
                <div style={{ ...customStyles.face, ...customStyles.right }}></div>
                <div style={{ ...customStyles.face, ...customStyles.left }}></div>
                <div style={{ ...customStyles.face, ...customStyles.top }}></div>
                <div style={{ ...customStyles.face, ...customStyles.bottom }}></div>
            </div>
        </div>
    );
};

export default GoldBar3D;
