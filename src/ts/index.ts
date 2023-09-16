import '../style.css';
import Snake from './snake';
import Stage from './stage';
import View from './view';
const size = 300;

class Main {
    readonly #stage: Stage;
    readonly #snake: Snake;
    constructor() {
        this.#stage = new Stage();
        this.#snake = new Snake();
        const view = new View(this.#stage, this.#snake);
        view.render();
    }
}

new Main();

// const init = () => {
//     const canvas = document.getElementById('canvas') as HTMLCanvasElement;
//     const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
//     ctx.fillStyle = '#f00';
//     ctx.fillRect(0, 0, size, size);
// };

// window.onload = () => {
//     init();
// };
