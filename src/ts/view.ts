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
        let i = 0;
        for (const [x, y] of this.#model.snake.positionList) {
            this.#model.stage.ctx.fillStyle = this.#model.gameOver
                ? '#800'
                : `hsl(${120 - (this.#model.snake.positionList.length - i) * 2}deg, 100%, 50%)`;
            this.#model.stage.ctx.beginPath();
            this.#model.stage.ctx.arc(x, y, Snake.halfWidth, 0, 2 * Math.PI);
            this.#model.stage.ctx.fill();
            this.#model.stage.ctx.closePath();
            i++;
        }
    }

    private renderSnakeEye() {
        const lex =
            this.#model.snake.mx + Math.cos(((this.#model.snake.angle - 60) * Math.PI) / 180) * Snake.halfWidth * 0.4;
        const ley =
            this.#model.snake.my + Math.sin(((this.#model.snake.angle - 60) * Math.PI) / 180) * Snake.halfWidth * 0.4;
        const rex =
            this.#model.snake.mx + Math.cos(((this.#model.snake.angle + 60) * Math.PI) / 180) * Snake.halfWidth * 0.4;
        const rey =
            this.#model.snake.my + Math.sin(((this.#model.snake.angle + 60) * Math.PI) / 180) * Snake.halfWidth * 0.4;
        this.#model.stage.ctx.fillStyle = '#fff';
        this.#model.stage.ctx.beginPath();
        this.#model.stage.ctx.arc(lex, ley, Snake.halfWidth * 0.4, 0, 2 * Math.PI);
        this.#model.stage.ctx.fill();
        this.#model.stage.ctx.closePath();
        this.#model.stage.ctx.fillStyle = '#000';
        this.#model.stage.ctx.beginPath();
        this.#model.stage.ctx.arc(lex, ley, Snake.halfWidth * 0.2, 0, 2 * Math.PI);
        this.#model.stage.ctx.fill();
        this.#model.stage.ctx.closePath();

        this.#model.stage.ctx.fillStyle = '#fff';
        this.#model.stage.ctx.beginPath();
        this.#model.stage.ctx.arc(rex, rey, Snake.halfWidth * 0.4, 0, 2 * Math.PI);
        this.#model.stage.ctx.fill();
        this.#model.stage.ctx.closePath();
        this.#model.stage.ctx.fillStyle = '#000';
        this.#model.stage.ctx.beginPath();
        this.#model.stage.ctx.arc(rex, rey, Snake.halfWidth * 0.2, 0, 2 * Math.PI);
        this.#model.stage.ctx.fill();
        this.#model.stage.ctx.closePath();
    }

    private renderFood() {
        if (this.#model.food === null) {
            return;
        }
        this.#model.stage.ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.#model.stage.ctx.beginPath();
        this.#model.stage.ctx.arc(this.#model.food.x, this.#model.food.y, Snake.halfWidth, 0, 2 * Math.PI);
        this.#model.stage.ctx.fill();
        this.#model.stage.ctx.closePath();
    }

    render() {
        this.renderStage();
        this.renderSnake();
        this.renderSnakeEye();
        this.renderFood();
    }
}

export default View;
