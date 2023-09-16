import Judger from './judger';
import Snake from './snake';
import Stage from './stage';

class Model {
    readonly #snake: Snake;
    readonly #stage: Stage;
    #gameOver = false;
    #turnAngle = 0;
    constructor() {
        this.#snake = new Snake();
        this.#stage = new Stage();
    }

    update() {
        this.#snake.turn(this.#turnAngle);
        this.#snake.move();
        if (Judger.checkCollisionWall(this.#snake) || Judger.checkCollisionSelf(this.#snake, this.#stage.ctx)) {
            this.#gameOver = true;
        }
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

    get gameOver() {
        return this.#gameOver;
    }
}

export default Model;
