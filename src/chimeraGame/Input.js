export class Input {
    constructor() {
        this.keys = {};

        this.onKeyDown = (e) => {
            this.keys[e.code] = true;
        };

        this.onKeyUp = (e) => {
            this.keys[e.code] = false;
        };

        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }
    isHeld(code) {
        return !!this.keys[code];
    }
    destroy() {
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keyup", this.onKeyUp);
    }
}