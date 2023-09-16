import Snake from './snake';
import Stage from './stage';

class View {
    readonly #stage: Stage;
    readonly #snake: Snake;
    constructor(stage: Stage, snake: Snake) {
        this.#stage = stage;
        this.#snake = snake;
    }

    private renderStage() {
        this.#stage.ctx.fillStyle = '#000';
        this.#stage.ctx.fillRect(0, 0, Stage.Size, Stage.Size);
    }

    private renderSnake() {
        this.#stage.ctx.fillStyle = '#0c0';
        for (const [x, y] of this.#snake.positionList) {
            this.#stage.ctx.beginPath();
            this.#stage.ctx.arc(x, y, Snake.halfWidth, 0, 2 * Math.PI);
            this.#stage.ctx.fill();
            this.#stage.ctx.closePath();
        }
    }

    render() {
        this.renderStage();
        this.renderSnake();
    }
}

export default View;
