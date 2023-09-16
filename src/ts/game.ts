import Controller from './controller';
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
        this.#view.render();
        this.#model.update();
    }

    async start() {
        new Controller(this.#view, this.#model);
        while (true) {
            await new Promise((resolve) => setTimeout(resolve, 10));
            this.step();
        }
    }
}

export default Game;
