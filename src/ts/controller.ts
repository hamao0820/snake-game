import Model from './model';
import View from './view';

class Controller {
    readonly #view: View;
    readonly #model: Model;
    readonly #leftButton: HTMLButtonElement;
    readonly #rightButton: HTMLButtonElement;
    constructor(view: View, model: Model) {
        this.#view = view;
        this.#model = model;

        this.#leftButton = document.getElementById('left') as HTMLButtonElement;
        this.#rightButton = document.getElementById('right') as HTMLButtonElement;

        this.#leftButton.addEventListener('pointerdown', this.turnLeft.bind(this));
        this.#rightButton.addEventListener('pointerdown', this.turnRight.bind(this));
        this.#leftButton.addEventListener('pointerup', this.stopTurn.bind(this));
        this.#rightButton.addEventListener('pointerup', this.stopTurn.bind(this));
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

    reset() {
        this.#leftButton.removeEventListener('pointerdown', this.turnLeft.bind(this));
        this.#rightButton.removeEventListener('pointerdown', this.turnRight.bind(this));
        this.#leftButton.removeEventListener('pointerup', this.stopTurn.bind(this));
        this.#rightButton.removeEventListener('pointerup', this.stopTurn.bind(this));
    }
}

export default Controller;
