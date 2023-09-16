import Snake from './snake';
import Stage from './stage';

class Model {
    readonly #snake: Snake;
    readonly #stage: Stage;
    #turnAngle = 0;
    constructor() {
        this.#snake = new Snake();
        this.#stage = new Stage();
    }

    update() {
        this.#snake.turn(this.#turnAngle);
        this.#snake.move();
    }

    set turnAngle(turnAngle: number) {
        this.#turnAngle = turnAngle;
    }

    get snake() {
        return this.#snake;
    }

    get stage() {
        return this.#stage;
    }
}

export default Model;
