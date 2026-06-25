export class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    draw(monsters, winner) {
        const { ctx, canvas } = this;

        //1. Clear the canvas
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //2. Draw the arena border
        ctx.strokeStyle = '#4a4a8a';
        ctx.lineWidth = 4;
        ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

        //3. Draw the monsters
        monsters.forEach(m => this.drawMonster(m));

        //4. Draw HP bars
        monsters.forEach((m, i) => this.drawHPBar(m, i));

        //5. Draw winner overlay if game is over
        if (winner) this.drawWinner(winner);

    }

    drawMonster(m) {
        const { ctx } = this;

        //Body
        ctx.fillStyle = m.isAttacking ? '#ffffff' : m.color;
        ctx.fillRect(m.x, m.y, m.width, m.height);

        //Attack range ring (only when attacking)
        if (m.isAttacking) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(
                m.x + m.width / 2,
                m.y + m.height / 2,
                60, 0, Math.PI * 2
            );
            ctx.stroke();
        }
    }
    drawHPBar(monster, index) {
        const { ctx, canvas } = this;
        const barWidth = 200;
        const barHeight = 18;
        const padding = 20;

        //Player 1 bar top-left, Player 2 bar top-right
        const x = index === 0
            ? padding
            : canvas.width - barWidth - padding;
        const y = padding;

        const hpPercent = monster.hp / monster.maxHp;

        //Background
        ctx.fillStyle = '#333';
        ctx.fillRect(x, y, barWidth, barHeight);

        //Fill -> Green -> Yellow -> Red
        ctx.fillStyle = hpPercent > 0.5 ? '#22c55e'
            : hpPercent > 0.25 ? '#eab308'
                : '#ef4444';
        ctx.fillRect(x, y, barWidth, barHeight);

        //Border
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, barWidth, barHeight);

        //Label
        ctx.fillStyle = 'white';
        ctx.font = '12px monospace';
        ctx.textAlign = index === 0 ? 'left' : 'right';
        ctx.fillText(
            'Player${index + 1} ${monster.hp}/${monster.maxHp}',
            index === 0 ? x : x + barWidth,
            y + barHeight + 16
        );
    }

    drawWinner(winner) {
        const { ctx, canvas } = this;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'white';
        ctx.font = 'bold 48px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(winner, canvas.width / 2, canvas.height / 2);

        ctx.font = '20px monospace';
        ctx.fillText('Press R to Restart', canvas.width / 2, canvas.height / 2 + 50);
    }
}
