import { Monster } from "./monster.js";
import { Renderer } from "./renderer.js";
import { Input } from "./input.js";

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.renderer = new Renderer(canvas);
        this.input = new Input();
        this.rafId = null;
        this.winner = null;

        this.monsters = [
            new Monster({
                x: 100,
                y: 200,
                color: '#6366f1',
                hp: 100,
                speed: 3,
                controls: {
                    up: 'KeyW',
                    down: 'KeyS',
                    left: 'KeyA',
                    right: 'KeyD',
                    attack: 'KeyF',
                },
            }),
            new Monster({
                x: 560,
                y: 200,
                color: '#ef4444',
                hp: 100,
                speed: 3,
                controls: {
                    up: 'ArrowUp',
                    down: 'ArrowDown',
                    left: 'ArrowLeft',
                    right: 'ArrowRight',
                    attack: 'Slash',
                },
            })
        ];

        // Restart On 'R' Key Press
        this.onKeyDown = (e) => {
            if (e.code === 'KeyR' && this.winner) this.reset();
        };
        window.addEventListener('keydown', this.onKeyDown);
    }

    reset() {
    this.winner = null;

    const p1 = this.monsters[0];
    const p2 = this.monsters[1];

    p1.x = 100;
    p1.y = 200;
    p1.hp = p1.maxHp;

    p2.x = 560;
    p2.y = 200;
    p2.hp = p2.maxHp;
}

    start() {
        const loop = () => {
            this.update();
            this.renderer.draw(this.monsters, this.winner);
            this.rafId = requestAnimationFrame(loop);
        };
        this.rafId = requestAnimationFrame(loop);
    }

    update() {
        if (this.winner) return; // Freeze when game is over

        const [p1, p2] = this.monsters;

        //Update movement for both monsters
        p1.update(this.input, this.canvas.width, this.canvas.height);
        p2.update(this.input, this.canvas.width, this.canvas.height);

        //Check for attack inputs
        if (this.input.isHeld(p1.controls.attack)) {
            if (p1.tryAttack() && p1.isInRange(p2)) {
                p2.takeDamage(10);
            }
        }

        if (this.input.isHeld(p2.controls.attack)) {
            if (p2.tryAttack() && p2.isInRange(p1)) {
                p1.takeDamage(10);
            }
        }

        //Check for win condition
        if (p1.isDefeated()) this.winner = 'Player 2 Wins!';
        if (p2.isDefeated()) this.winner = 'Player 1 Wins!';
    }

    stop() {
        cancelAnimationFrame(this.rafId);
        this.input.destroy();
        window.removeEventListener('keydown', this.onKeyDown);
    }
}