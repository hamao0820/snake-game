import Model from './model';
import Snake from './snake';
import Stage from './stage';

class View {
    readonly #model: Model;
    constructor(model: Model) {
        this.#model = model;
    }

    private renderStage() {
        this.#model.stage.ctx.fillStyle = '#000';
        this.#model.stage.ctx.fillRect(0, 0, Stage.Size, Stage.Size);
    }

    private renderSnake() {
        this.#model.stage.ctx.fillStyle = '#0c0';
        for (const [x, y] of this.#model.snake.positionList) {
            this.#model.stage.ctx.beginPath();
            this.#model.stage.ctx.arc(x, y, Snake.halfWidth, 0, 2 * Math.PI);
            this.#model.stage.ctx.fill();
            this.#model.stage.ctx.closePath();
        }
    }

    render() {
        this.renderStage();
        this.renderSnake();
    }
}

export default View;
