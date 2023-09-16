import Stage from './stage';

class Snake {
    static readonly initialLength = 150;
    static readonly halfWidth = 8;
    readonly #positionList: [number, number][] = [];
    #mx = Stage.Size / 2;
    #my = Stage.Size / 2;
    #speed = 1;
    #angle = 90;

    constructor() {
        for (let i = 0; i < Snake.initialLength; i++) {
            this.#positionList.push([this.#mx, this.#my]);
        }
    }

    turn(turnAngle: number) {
        this.#angle += turnAngle;
    }

    move() {
        this.#mx += this.#speed * Math.cos((this.#angle * Math.PI) / 180);
        this.#my += this.#speed * Math.sin((this.#angle * Math.PI) / 180);
        this.#positionList.push([this.#mx, this.#my]);
        this.#positionList.shift();
    }

    get positionList() {
        return this.#positionList;
    }
}

export default Snake;
