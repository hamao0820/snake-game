import Model from './model';
import Snake from './snake';
import Stage from './stage';
import View from './view';

class Game {
    readonly #stage: Stage;
    readonly #snake: Snake;
    readonly #view: View;
    readonly #model: Model;
    constructor() {
        this.#stage = new Stage();
        this.#snake = new Snake();
        this.#view = new View(this.#stage, this.#snake);
        this.#model = new Model(this.#view, this.#snake);

        this.#view.render();
    }

    async start() {
        while (true) {
            await new Promise((resolve) => setTimeout(resolve, 10));
            this.#model.update();
        }
    }
}

export default Game;
