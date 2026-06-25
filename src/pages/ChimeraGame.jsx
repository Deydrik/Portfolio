import { useEffect, useRef } from 'react';
import { Game } from '../chimeraGame/Game.js';

function GamePage() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const game = new Game(canvas);
        game.start();

        // Cleanup on unmount
        return () => {
            game.stop();
        };
    }, []); // Empty array = run once on mount

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
        }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>
                Chimera Game
            </h2>

            <canvas
                ref={canvasRef}
                width={740}
                height={500}
                style={{
                    border: '1px solid #4a4a8a',
                    borderRadius: '8px',
                    backgroundColor: '#1a1a2e' 
                }}
            />

            <div style={{
                color: '#aaa', 
                marginTop: '1rem',
                fontSize: '0.85rem', 
                textAlign: 'center',
                lineHeight: '1.8' 
                }}>
                    <strong style={{color: '#6366f1'}}>P1:</strong> WASD to move · F to attack
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <strong style={{ color: '#ef4444' }}>P2:</strong> Arrow keys to move · / to attack
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <strong style={{ color: 'white' }}>R</strong> to restart
            </div>
        </div>
     );   
}

export default GamePage;
