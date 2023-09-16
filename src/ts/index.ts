import '../style.css';
import Game from './game';
import Snake from './snake';
import Stage from './stage';
import View from './view';
const size = 300;

class Main {
    constructor() {
        const game = new Game();
        game.start();
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
