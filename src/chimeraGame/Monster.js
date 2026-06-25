export class Monster {
    constructor({x, y, color, controls, hp = 100, speed = 3}) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.color = color;
        this.controls = controls; // {up, down, left, right, attack}
        this.hp = hp;
        this.maxHp = hp;
        this.speed = speed;

        this.attackCooldown = 0; // frames until next attack
        this.isAttacking = false;
        this.attackTimer = 0; // how long the attack flash is active
    }
    update(input, canvasWidth, canvasHeight) {
        // Movement
        if (input[this.controls.up]) this.y -= this.speed;
        if (input[this.controls.down]) this.y += this.speed;
        if (input[this.controls.left]) this.x -= this.speed;
        if (input[this.controls.right]) this.x += this.speed;
        
        // Wall collision -> keep monster within canvas bounds
        this.x = Math.max(0, Math.min(canvasWidth - this.width, this.x));
        this.y = Math.max(0, Math.min(canvasHeight - this.height, this.y));

        // Tick down cooldowns
        if (this.attackCooldown > 0) this.attackCooldown--;
        if (this.attackTimer > 0) {
            this.attackTimer--;
            this.isAttacking = this.attackTimer > 0; 
        }
    }
        // Returns true if the attack landed (called by Game.js)
        tryAttack() {
            if (this.attackCooldown > 0) return false;
            this.attackCooldown = 45; // `0.75s at 60fps
            this.isAttacking = true;
            this.attackTimer = 10; // Attack flash lasts for 10 frames
            return true;
        }
        
        //Check if this monster's attack range overlaps with the other monster
        isInRange(other) {
            const range = 60; //pixels
            const centerX = this.x + this.width / 2;
            const centerY = this.y + this.height / 2;
            const otherCenterX = other.x + other.width / 2;
            const otherCenterY = other.y + other.height / 2;
            const distSq = (centerX - otherCenterX) ** 2 + (centerY - otherCenterY) ** 2;
            return distSq <= range ** 2;
        }

    takeDamage(amount) {
        this.hp = Math.max(0, this.hp - amount);
    }

    isDefeated() {
        return this.hp <= 0;
    }
}
