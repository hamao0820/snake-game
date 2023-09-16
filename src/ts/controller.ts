import Model from './model';
import View from './view';

class Controller {
    readonly #view: View;
    readonly #model: Model;
    constructor(view: View, model: Model) {
        this.#view = view;
        this.#model = model;

        const leftButton = document.getElementById('left') as HTMLButtonElement;
        const rightButton = document.getElementById('right') as HTMLButtonElement;

        leftButton.addEventListener('pointerdown', this.turnLeft.bind(this));
        rightButton.addEventListener('pointerdown', this.turnRight.bind(this));
        leftButton.addEventListener('pointerup', this.stopTurn.bind(this));
        rightButton.addEventListener('pointerup', this.stopTurn.bind(this));
    }

    private turnLeft(e: MouseEvent) {
        e.preventDefault();
        this.#model.turnAngle = -5;
    }

    private turnRight(e: MouseEvent) {
        e.preventDefault();
        this.#model.turnAngle = 5;
    }

    private stopTurn(e: MouseEvent) {
        e.preventDefault();
        this.#model.turnAngle = 0;
    }
}

export default Controller;
