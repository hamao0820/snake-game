import Snake from './snake';
import View from './view';

class Model {
    readonly #view: View;
    readonly #snake: Snake;
    constructor(view: View,snake: Snake) {
        this.#view = view;
        this.#snake = snake;
    }

    update(){
        this.#snake.move();
        this.#view.render();
    }
}

export default Model;
