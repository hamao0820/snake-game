import Controller from './controller';
import Judger from './judger';
import Model from './model';
import View from './view';

class Game {
    readonly #view: View;
    readonly #model: Model;

    constructor() {
        this.#model = new Model();
        this.#view = new View(this.#model);

        this.#view.render();
    }

    private step() {
        this.#model.update();
        this.#view.render();
    }

    async start() {
        const controller = new Controller(this.#view, this.#model);
        while (!this.#model.gameOver) {
            await new Promise((resolve) => setTimeout(resolve, 10));
            this.step();
        }
        controller.reset();
    }
}

export default Game;